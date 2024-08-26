import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderStatus = () => {
    const [orders, setOrders] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('userEmail');
        setEmail(data);
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/order/getUserOrders', {
                    email: email,
                });
                setOrders(response.data.orders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        if (email) {
            fetchOrders();
        }
    }, [email]);

    return (
        <div className="w-[70%] mx-auto p-4 py-20">
            <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
            <div className="flex flex-col ">
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <div key={index} className="p-4 mb-4 bg-slate-200 shadow-md shadow-gray-400 rounded-lg flex justify-between items-center px-8">
                            <div className="">
                                <h3 className="font-semibold">Products:</h3>
                                <ul className="list-disc ml-4">
                                    {order.products.map((product, idx) => (
                                        <li key={idx} className='capitalize'>
                                            {product.productName} - {product.quantity} * &#x20B9; {product.price} = &#x20B9; {product.total}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-md font-semibold mb-2">Order-Id: <span className='text-gray-500'>#{order._id}</span></h2>
                                <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className='mb-2'><strong>Total Amount:</strong> &#x20B9; {order.totalAmount}</p>
                                <p><strong>Status:</strong> <span className='text-gray-400 font-semibold'>{order.orderStatus}</span></p>
                            </div>

                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default OrderStatus;
