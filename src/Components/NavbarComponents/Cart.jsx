import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [previewOrder, setPreviewOrder] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem('userEmail');
    setEmail(data);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/getSingleUser/${email}`);
        setUserData(response.data);

      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/cart/getCartItems', {
          email: email,
        });
        setCartItems(response.data.products);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    if (email) {
      fetchCartItems();
    }
  }, [email]);

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    }
    setCartItems(updatedCartItems);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const totalValue = calculateTotalPrice() - discount
  const walletBalance = userData.userShare

  const discountApply = () => {
    setDiscount(walletBalance);
    handleOpen();
  }

  const removeDiscount = () => {
    setDiscount(0);
    handleOpen();
  }

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    pincode: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setPreviewOrder(true); // Enable preview mode
  };

  const removeCartItem = async (productId, index) => {
    try {
      await axios.post('http://localhost:5000/api/cart/removeCartItem', {
        email: email,
        productId: productId,
      });
      const updatedCartItems = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedCartItems);
      window.location.reload();
    } catch (error) {
      console.error('Error removing cart item:', error);
      alert('Failed to remove the item. Please try again.');
    }
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      email: email,
      products: cartItems.map(item => {
        const commissionAmount = (item.vendorCommission / 100) * item.price * item.quantity;

        return {
          productId: item.productId._id,
          productCode: item.productCode,
          vendorCommission: item.vendorCommission,
          productName: item.productId.productName,
          vendorEmail: item.productId.vendorEmail,
          shopName: item.shopName,
          productImage: item.productImage,
          quantity: item.quantity,
          actualPrice: item.actualPrice,
          price: item.price,
          balance: item.balance,
          total: item.price * item.quantity,
          commissionAmount: commissionAmount,
        };
      }),
      name: formData.name,
      address: formData.address,
      mobileNumber: formData.mobileNumber,
      pincode: formData.pincode,
      totalAmount: totalValue,
      discount: discount,
      paymentMethod: paymentMethod,
      totalCommission: cartItems.reduce((sum, item) => sum + (item.vendorCommission / 100) * item.price * item.quantity, 0),
    };

    if (paymentMethod === 'Online') {
      handleOnlinePayment(orderData);
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/order/placeOrder', orderData);
        console.log(response);
        if (response.status === 201) {
          alert('Order placed successfully!');
          await axios.post('http://localhost:5000/api/cart/clearCart', { email: email });
          setCartItems([]);
          setFormData({
            name: '',
            mobileNumber: '',
            address: '',
            pincode: '',
          });
          setPreviewOrder(false); // Disable preview mode
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place the order. Please try again.');
      }
    }
  };

  const handleOnlinePayment = async (orderData) => {
    try {
      const orderResponse = await axios.post('http://localhost:5000/api/order/createOrder', {
        amount: orderData.totalAmount * 100,
        currency: 'INR',
        receipt: 'order_rcptid_11',
      });

      if (orderResponse.status !== 200) {
        throw new Error('Failed to create order');
      }

      const { order_id } = orderResponse.data;

      const options = {
        key: 'rzp_test_wH98jusmGqHYDH',
        amount: orderData.totalAmount * 100,
        currency: 'INR',
        name: 'Agr Store',
        description: 'Order Payment',
        order_id,
        handler: async function (response) {
          try {
            const paymentData = {
              ...orderData,
              razorpayPaymentId: response.razorpay_payment_id,
            };

            const orderPlaceResponse = await axios.post('http://localhost:5000/api/order/placeOrder', paymentData);

            if (orderPlaceResponse.status === 201) {
              alert('Payment successful and order placed!');
              await axios.post('http://localhost:5000/api/cart/clearCart', { email: email });
              setCartItems([]);
              setFormData({
                name: '',
                mobileNumber: '',
                address: '',
                pincode: '',
              });
              setPreviewOrder(false); // Disable preview mode
            }
          } catch (error) {
            console.error('Error processing payment and placing order:', error);
            alert('Payment failed. Please try again.');
          }
        },
        prefill: {
          name: orderData.name,
          email: email,
          contact: formData.mobileNumber,
        },
        notes: {
          address: formData.address,
        },
        theme: {
          color: '#3399cc',
        },
      };

      try {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('Error initializing Razorpay:', error);
        alert('There was an issue initializing the payment process. Please try again.');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('There was an issue creating the order. Please try again.');
    }
  };

  return (
    <>
      {
        cartItems.length > 0 ? (
          <div className="w-full mx-auto p-4 flex flex-col justify-center items-center mb-10">
            <h1 className="w-[80%] text-2xl font-semibold mb-4 text-left pt-10">Your Cart Items List:</h1>
            <div className="w-[80%] overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">Image</th>
                    <th className="py-3 px-6 text-center">Product Name</th>
                    <th className="py-3 px-6 text-center">Price</th>
                    <th className="py-3 px-6 text-center">Quantity</th>
                    <th className="py-3 px-6 text-center">Action</th>
                    <th className="py-3 px-6 text-center">Total</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                  {cartItems.map((item, index) => (
                    <tr key={item.productId._id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center justify-center ">
                          <img src={item.productImage} alt={item.productId.productName} className="w-12 h-12 object-cover mr-4 rounded border border-gray-400" />
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center flex flex-col">
                        <span className="text-gray-900 font-semibold">{item.productId.productName}</span>
                        <span className='font-normal'>({item.quantity} {item.unit})</span>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <span className='text-gray-900 font-semibold'>&#x20B9; {item.price}</span> <br />
                        <span>(1 {item.unit})</span>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <div className="flex justify-center items-center">
                          <button onClick={() => decreaseQuantity(index)} className="text-gray-600 bg-gray-300 rounded-l px-2 py-1 hover:bg-gray-400">-</button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button onClick={() => increaseQuantity(index)} className="text-gray-600 bg-gray-300 rounded-r px-2 py-1 hover:bg-gray-400">+</button>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <button
                          onClick={() => removeCartItem(item.productId._id, index)}
                          className=" text-red-500 px-4 py-2 rounded font-semibold"
                        >
                          Remove
                        </button>
                      </td>

                      <td className="py-3 px-6 text-center">
                        &#x20B9; {item.quantity * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-[80%] bg-white shadow-md rounded-lg mt-4 p-4">
              <div className='flex items-center gap-6 mb-4 '>
                <h2 className="text-lg font-semibold">Total Amount: &#x20B9; {totalValue.toFixed(2)}</h2>
                {
                  discount ?
                    <button
                      onClick={removeDiscount}
                      className='bg-gray-300 px-4 py-1 text-gray-500 rounded-sm text-sm font-semibold'
                    >
                      Remove wallet balance
                    </button>
                    :
                    <button
                      onClick={handleOpen}
                      className='bg-blue-500 px-4 py-1 text-white rounded-sm text-sm'
                    >
                      Applied wallet balance
                    </button>
                }
              </div>
              {isOpen && (
                <div className='flex mb-4 bg-gray-200 p-4 gap-3 items-center'>
                  <p>Your wallet balance is {discount ? "0" : <span className='font-semibold'>&#x20B9;{(walletBalance).toFixed(2)}</span>}</p>
                  {
                    discount ? "" :
                      <div className='flex gap-2'>
                        <p className='flex items-center gap-2'><del className='text-sm'>&#x20B9;{totalValue}</del> <span className='font-semibold text-xl'>&#x20B9;{(totalValue - walletBalance).toFixed(2)}</span></p>
                        <button
                          onClick={discountApply}
                          className='bg-green-600 text-white px-8 py-1 text-sm rounded-sm'
                        >
                          Apply
                        </button>
                      </div>
                  }
                </div>
              )}
              <div className='flex items-center gap-10'>
                <h2 className="text-lg font-semibold ">Choose Payment Method:</h2>
                <div className="flex gap-8">
                  <label className="mr-4 flex gap-2 items-center">
                    <input type="radio" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} />
                    Cash on Delivery
                  </label>
                  <label className='flex gap-2 items-center'>
                    <input type="radio" value="Online" checked={paymentMethod === 'Online'} onChange={(e) => setPaymentMethod(e.target.value)} />
                    Online Payment
                  </label>
                </div>
              </div>
            </div>

            <div className="w-[80%] bg-white shadow-md rounded-lg mt-4 p-4">
              <h2 className="text-lg font-semibold mb-2">Delivery Details:</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="text" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="mt-1 p-2 w-full border rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <textarea id="address" value={formData.address} onChange={handleChange} className="mt-1 p-2 w-full border rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                  <input type="text" id="pincode" value={formData.pincode} onChange={handleChange} className="mt-1 p-2 w-full border rounded-lg" required />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Confirm & Place Order
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600">Add some items to your cart before placing an order.</p>
          </div>
        )
      }

      {previewOrder && (
        <div className="w-full mx-auto p-4 flex flex-col justify-center items-center mb-10">
          <h2 className="w-[80%] text-2xl font-semibold mb-4 text-left pt-10">Order Preview:</h2>
          {/* <div className="w-[80%] overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-center">Image</th>
                  <th className="py-3 px-6 text-center">Product Name</th>
                  <th className="py-3 px-6 text-center">Price</th>
                  <th className="py-3 px-6 text-center">Quantity</th>
                  <th className="py-3 px-6 text-center">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {cartItems.map((item) => (
                  <tr key={item.productId._id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center justify-center ">
                        <img src={item.productImage} alt={item.productId.productName} className="w-12 h-12 object-cover mr-4 rounded border border-gray-400" />
                      </div>
                    </td>

                    <td className="py-3 px-6 text-center flex flex-col">
                      <span className="text-gray-900 font-semibold">{item.productId.productName}</span>
                      <span className='font-normal'>({item.quantity} {item.unit})</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span className='text-gray-900 font-semibold'>&#x20B9; {item.price}</span> <br />
                      <span>(1 {item.unit})</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span className="px-3 py-1">{item.quantity}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      &#x20B9; {item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          <div className="w-[80%] bg-white shadow-md rounded-lg mt-4 p-4">
            <h2 className="flex items-center gap-1 text-lg font-semibold mb-2">
              Total Amount: &#x20B9; {totalValue.toFixed(2)}
              {discount ? <span className='font-normal text-[14px] mb-1'>(with discount &#x20B9;{discount})</span> : ""}
            </h2>
            <h2 className="text-lg font-semibold mb-2">Payment Method: {paymentMethod}</h2>
            <h2 className="text-lg font-semibold mb-2">Delivery Details:</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Mobile Number:</strong> {formData.mobileNumber}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Pincode:</strong> {formData.pincode}</p>

            <button
              onClick={handlePlaceOrder}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
