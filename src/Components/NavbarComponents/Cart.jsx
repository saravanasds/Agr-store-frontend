import React from 'react'
import Products2 from '../../Accets/Prods-2.jpg';
import Products1 from '../../Accets/Prods-1.jpg';
import Products4 from '../../Accets/Prods-4.jpg';

function Cart() {
// Example prices for the products
const prices = [500, 300, 450]; // You can replace these with the actual prices
const totalAmount = prices.reduce((total, price) => total + price, 0);

return (
  <div className="flex flex-col items-center min-h-screen p-5 border-2 border-black">
    <h1 className="text-3xl font-bold mb-4">Order Status</h1>

    {/* <div className='bg-blue-500 p-5'>
      Your Cart is empty
    </div> */} 
    {/* display when cart is empty */}
    

    <ul className="w-full max-w-md space-y-4  rounded-lg  border-2 border-black">

      <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="w-1/4 flex-shrink-0">
          <img src={Products2} alt="Product Image" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-lg">Title 1</h2>
          <p className="text-gray-600">Qty: 1</p>
        </div>
        <div className="ml-4">
          <p className="text-gray-600">Price: ₹500</p>
        </div>
        <button className="text-red-500 hover:underline ml-4">
          Remove
        </button>
      </li>

      <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="w-1/4 flex-shrink-0">
          <img src={Products1} alt="Product Image" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-lg">Title 2</h2>
          <p className="text-gray-600">Qty: 1</p>
        </div>
        <div className="ml-4">
          <p className="text-gray-600">Price: ₹300</p>
        </div>
        <button className="text-red-500 hover:underline ml-4">
          Remove
        </button>
      </li>

      <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="w-1/4 flex-shrink-0">
          <img src={Products4} alt="Product Image" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-lg">Title 3</h2>
          <p className="text-gray-600">Qty: 1</p>
        </div>
        <div className="ml-4">
          <p className="text-gray-600">Price: ₹450</p>
        </div>
        <button className="text-red-500 hover:underline ml-4">
          Remove
        </button>
      </li>

    </ul>

    {/* Total Amount Section */}
    <div className="w-full max-w-md mt-6 p-4 flex justify-end bg-white shadow-md border-t-2 border-black">
      <div>
      <h2 className="text-xl font-semibold">Total Amount:</h2>
      <p className="text-gray-700 text-2xl">₹{totalAmount}</p>
      </div>
    </div>

  </div>
);
}

export default Cart