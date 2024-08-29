import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD'); // Default to COD

  useEffect(() => {
    const data = localStorage.getItem('userEmail');
    setEmail(data);
  }, []);

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

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

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
      products: cartItems.map(item => ({
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
      })),
      name: formData.name,
      address: formData.address,
      mobileNumber: formData.mobileNumber,
      pincode: formData.pincode,
      totalAmount: calculateTotalPrice(),
      paymentMethod: paymentMethod,
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
              // razorpayOrderId: response.razorpay_order_id,
              // razorpaySignature: response.razorpay_signature,
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
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => decreaseQuantity(index)}
                            className="px-3 py-1 bg-gray-400 text-white rounded-l"
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(index)}
                            className="px-3 py-1 bg-green-500 text-white rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <button
                          onClick={() => removeCartItem(item.productId._id, index)}
                          className="text-red-500 font-semibold">
                          Remove
                        </button>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="text-gray-900 font-semibold">
                          &#x20B9; {item.price * item.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5" className="text-right font-semibold">Total Price:</td>
                    <td className="py-3 px-6 text-center text-gray-900 font-semibold">
                      &#x20B9; {calculateTotalPrice()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-[80%] mt-10">
              <h1 className="text-2xl font-semibold mb-4 text-left">Enter your details:</h1>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobileNumber" className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pincode" className="block text-gray-700 font-semibold mb-2">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Select Payment Method:</label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="COD"
                        checked={paymentMethod === 'COD'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      Cash on Delivery (COD)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Online"
                        checked={paymentMethod === 'Online'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      Online Payment
                    </label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
                  Place Order
                </button>
              </form>
            </div>
            {isSubmitted && (
              <div className="w-[80%] mt-10">
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-green-500 text-white py-2 px-4 rounded"
                >
                  Confirm & Place Order
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>Your cart is empty</p>
        )
      }
    </>
  );
};

export default Cart;
