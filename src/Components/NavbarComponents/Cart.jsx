import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');

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
    try {
      const orderData = {
        email: email,
        products: cartItems.map(item => ({
          productId: item.productId._id,
          productName: item.productId.productName,
          vendorEmail: item.productId.vendorEmail,
          productImage: item.productImage,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        name: formData.name,
        address: formData.address,
        mobileNumber: formData.mobileNumber,
        pincode: formData.pincode,
        totalAmount: calculateTotalPrice(),
      };

      const response = await axios.post('http://localhost:5000/api/order/placeOrder', orderData);
      if (response.status === 200) {
        alert('Order placed successfully!');

        // Clear the cart after placing the order
        await axios.post('http://localhost:5000/api/cart/clearCart', { email: email });

        // Optionally clear cart and form in the frontend
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
                      <td className="py-3 px-6 text-center text-gray-900 font-semibold">
                        &#x20B9; {item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-full mt-8 text-right  border-b border-gray-600">
                <h2 className="text-xl font-semibold pb-2 mr-10">Total: &#x20B9; {calculateTotalPrice()}</h2>
              </div>
            </div>

            <div className='w-[80%]'>
              <div className="flex gap-8">
                {/* Form Section */}
                <form
                  className="w-[50%]  p-4 bg-white"
                  onSubmit={handleSubmit}
                >
                  <h1 className='text-2xl font-semibold text-left py-4 tracking-wider mb-4 border-b border-gray-300'>
                    Delivery Address Details:
                  </h1>

                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="number"
                      id="mobileNumber"
                      placeholder="Enter your mobile number"
                      className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      type="text"
                      id="address"
                      placeholder="Enter your address"
                      className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      id="pincode"
                      placeholder="Enter your pin code"
                      className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3E4095] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Submit
                  </button>
                </form>

                {/* Preview Section */}
                {isSubmitted && (
                  <div className="w-[50%] p-4 ">
                    <h2 className="text-2xl font-semibold text-left py-4 tracking-wider mb-4 border-b border-gray-300">Shipping Details:</h2>
                    <p className='mb-2 tracking-wider'><strong>Name:</strong> {formData.name}</p>
                    <p className='mb-2 tracking-wider'><strong>Mobile No:</strong> {formData.mobileNumber}</p>
                    <p className='mb-2 tracking-wider'><strong>Address:</strong> {formData.address}</p>
                    <p className='mb-2 tracking-wider'><strong>Pin Code:</strong> {formData.pincode}</p>

                    <div className="mt-6">
                      <h3 className="w-full border-b border-gray-500 text-lg font-semibold pb-3">Total Amount: &#x20B9; {calculateTotalPrice()}</h3>
                      <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-green-500 text-white px-3 py-2 mt-5 rounded hover:bg-green-600 transition duration-300">
                        Place Your Order
                      </button>
                      <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-gray-400 text-white px-3 py-2 mt-4 rounded hover:bg-gray-600 transition duration-300">
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) :
          <div className='w-full h-[50vh] flex justify-center items-center text-2xl font-semibold '>Your Cart is Empty</div>
      }
    </>
  );
};

export default Cart;
