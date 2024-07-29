import React, { useState } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { FaIndianRupeeSign } from "react-icons/fa6";
import ShopHero from "../Accets/HeroSec.jpg";
import Products from "../Accets/Prods.jpg";
import SearchFilter from "./ShopComponents/SearchFilter";

function Shop() {
  const products = [
    { id: 1, image: Products, title: 'Product 1', description: 'Description of Product 1', price: '10.00' },
    { id: 2, image: Products, title: 'Product 2', description: 'Description of Product 2', price: '20.00' },
    { id: 3, image: Products, title: 'Product 3', description: 'Description of Product 3', price: '30.00' },
    { id: 4, image: Products, title: 'Product 4', description: 'Description of Product 4', price: '40.00' },
    { id: 5, image: Products, title: 'Product 5', description: 'Description of Product 5', price: '50.00' },
    { id: 6, image: Products, title: 'Product 6', description: 'Description of Product 6', price: '60.00' },
    { id: 7, image: Products, title: 'Product 7', description: 'Description of Product 7', price: '70.00' },
    { id: 8, image: Products, title: 'Product 8', description: 'Description of Product 8', price: '80.00' },
    { id: 9, image: Products, title: 'Product 9', description: 'Description of Product 9', price: '90.00' },
    { id: 10, image: Products, title: 'Product 10', description: 'Description of Product 10', price: '100.00' },
    { id: 11, image: Products, title: 'Product 11', description: 'Description of Product 11', price: '110.00' },
    { id: 12, image: Products, title: 'Product 12', description: 'Description of Product 12', price: '120.00' },
    { id: 13, image: Products, title: 'Product 13', description: 'Description of Product 13', price: '130.00' },
    { id: 14, image: Products, title: 'Product 14', description: 'Description of Product 14', price: '140.00' },
    { id: 15, image: Products, title: 'Product 15', description: 'Description of Product 15', price: '150.00' },
    { id: 16, image: Products, title: 'Product 16', description: 'Description of Product 16', price: '160.00' },
    { id: 17, image: Products, title: 'Product 17', description: 'Description of Product 17', price: '170.00' },
    { id: 18, image: Products, title: 'Product 18', description: 'Description of Product 18', price: '180.00' },
    { id: 19, image: Products, title: 'Product 19', description: 'Description of Product 19', price: '190.00' },
    { id: 20, image: Products, title: 'Product 20', description: 'Description of Product 20', price: '200.00' },
    { id: 21, image: Products, title: 'Product 11', description: 'Description of Product 11', price: '110.00' },
    { id: 22, image: Products, title: 'Product 12', description: 'Description of Product 12', price: '120.00' },
    { id: 23, image: Products, title: 'Product 13', description: 'Description of Product 13', price: '130.00' },
    { id: 24, image: Products, title: 'Product 14', description: 'Description of Product 14', price: '140.00' },
    { id: 25, image: Products, title: 'Product 15', description: 'Description of Product 15', price: '150.00' },
    { id: 26, image: Products, title: 'Product 16', description: 'Description of Product 16', price: '160.00' },
    { id: 27, image: Products, title: 'Product 17', description: 'Description of Product 17', price: '170.00' },
    { id: 28, image: Products, title: 'Product 18', description: 'Description of Product 18', price: '180.00' },
    { id: 29, image: Products, title: 'Product 19', description: 'Description of Product 19', price: '190.00' },
    { id: 30, image: Products, title: 'Product 20', description: 'Description of Product 20', price: '200.00' },
    { id: 31, image: Products, title: 'Product 20', description: 'Description of Product 20', price: '200.00' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div>
        <div className='h-[200px] w-full overflow-hidden'>
          <img src={ShopHero} alt="" className='w-full h-full object-cover' />
        </div>

        <div className='p-10'>
          <h1 className='text-3xl font-bold px-4'>Shop from Category</h1>
          <SearchFilter />

          <div className="bg-gray-200 p-4">
            <div className="flex">
              <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ul>
                  <li className="mb-2">Category 1</li>
                  <li className="mb-2">Category 2</li>
                  <li className="mb-2">Category 3</li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
              <div className="w-3/4 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-green-800 transition-shadow duration-300 group">
                      <div className="overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 transition-transform duration-1000 transform group-hover:scale-125" />
                      </div>
                      <div className='p-4'>
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-700 mb-2">{product.description}</p>
                        <div className="flex items-center text-lg mb-4"><FaIndianRupeeSign className='font-bold'/>{product.price}</div>
                        <button className="w-full bg-green-500 border-2 text-white py-2 px-4 rounded-full hover:bg-transparent hover:border-green-500 transition duration-300 hover:text-black">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-4">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleClick(currentPage - 1)}
                      className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ${currentPage === 1 && 'cursor-not-allowed'}`}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    {[...Array(totalPages).keys()].map((page) => (
                      <button
                        key={page + 1}
                        onClick={() => handleClick(page + 1)}
                        className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ${currentPage === page + 1 ? 'bg-gray-400 text-white' : ''}`}
                      >
                        {page + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => handleClick(currentPage + 1)}
                      className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ${currentPage === totalPages && 'cursor-not-allowed'}`}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Shop;
