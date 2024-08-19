import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';
import axios from 'axios';

const Shop = () => {
  const { department } = useParams();
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getAllDepartments');
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getAllCategories');
        const allCategories = response.data;

        // Filter categories by the department obtained from URL params
        const filteredCategories = allCategories.filter(
          (cat) => cat.department.toLowerCase() === department.toLowerCase()
        );

        setCategories(filteredCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (department) {
      fetchCategories();
    }
  }, [department]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vendor/getAllProducts');
        const allProducts = response.data;

        // Filter products by the department obtained from URL params
        const filteredProducts = allProducts.filter(
          (product) => product.department.toLowerCase() === department.toLowerCase()
        );

        setProducts(filteredProducts);
        setFilteredProducts(filteredProducts); // Initially, all products match the selected department
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (department) {
      fetchProducts();
    }
  }, [department]);

  return (
    <div>
      <div className='relative h-[150px] md:h-[200px] m-2 md:m-6 w-auto rounded-lg overflow-hidden bg-white bg-opacity-30 backdrop-blur-md shadow-lg'>
        <h1 className='relative z-10 flex items-center justify-center h-full w-full text-white text-4xl md:text-6xl font-bold bg-black bg-opacity-50'>
          {department}
        </h1>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 w-full md:sticky md:top-24 md:w-[85%] lg:w-[75%] md:m-auto md:bottom-auto h-auto">
        <div className="w-full h-full">
          <ul className="flex flex-wrap justify-evenly gap-2 md:gap-4 py-2 md:py-4 px-2 md:px-0 bg-green-600 bg-opacity-30 backdrop-blur-md rounded-lg overflow-x-auto">
            {departments.map((department, index) => (
              <li key={index} className="flex items-center gap-2 text-center">
                <NavLink
                  to={`/shop/${department.department}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center flex-col lg:flex-row'
                      : 'bg-blue-400 text-black py-2 px-4 rounded-lg flex items-center flex-col lg:flex-row'
                  }
                >
                  {department.department}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='px-0.5 py-5 md:p-10'>
        <h1 className='text-3xl font-bold px-4'>Shop from department</h1>
        <div className="bg-gray-400 md:p-4">
          <div className="flex flex-col md:flex-row">
            {/* Subcategory section */}
            <div className="hidden md:block md:w-1/4 bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <ul>
                {/* "All Products" tab */}
                <li
                  key="all-products"
                  className="mb-2 cursor-pointer"
                  onClick={() => setFilteredProducts(products)}
                >
                  All Products
                </li>

                {/* Other categories */}
                {categories.map((category) => (
                  <li
                    key={category._id}
                    className="mb-2 cursor-pointer"
                    onClick={() => {
                      const filtered = products.filter(product => product.category === category.category);
                      setFilteredProducts(filtered);
                    }}
                  >
                    {category.category}
                  </li>
                ))}
              </ul>
            </div>


            {/* Product section */}
            <div className="w-full md:w-3/4 p-2 md:p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-green-800 transition-shadow duration-300 group"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full h-48 md:h-64 object-cover transition-transform duration-1000 transform group-hover:scale-110"
                      />
                    </div>
                    <div className="p-2 md:p-4 flex flex-col">
                      <h3 className="text-sm md:text-lg font-semibold mb-1">{product.productName}</h3>
                      <p className="text-xs md:text-gray-700 mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex items-center text-sm md:text-lg mb-2">
                        <FaRupeeSign className="font-bold" />
                        <span className="ml-1">{product.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="bg-green-500 border-2 text-white py-1 px-2 rounded-full hover:bg-transparent hover:border-green-500 transition duration-300 hover:text-black">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
