import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div className='relative h-[150px] md:h-[200px] m-2 md:m-6 w-auto rounded-lg overflow-hidden bg-white '>
        <h1 className='relative z-10 flex items-center justify-center h-full w-full text-black text-4xl md:text-6xl font-bold '>
          {department}
        </h1>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 w-full md:sticky md:top-24 md:m-auto md:bottom-auto h-auto">
        <div className="w-full h-full">
          <ul className="flex flex-wrap justify-evenly gap-2 md:gap-4 md:py-3 px-2 md:px-0 bg-[#3E4095] overflow-x-auto">
            {departments.map((department, index) => (
              <li key={index} className="flex items-center gap-2 text-center text-sm tracking-wider">
                <NavLink
                  to={`/shop/${department.department}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-[rgb(129,196,8)] text-white font-bold py-1 px-10  shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center flex-col lg:flex-row border-white border-[1px]'
                      : 'text-white py-1 px-10  border-gray-400 border-[1px] font-medium hover:bg-[rgba(255,255,255,0.1)] hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center flex-col lg:flex-row'
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
        <h1 className='text-4xl font-bold px-4 mb-8 text-center tracking-wider text-[rgb(129,196,8)]'>Shop from department</h1>
        <div className="bg-[rgb(232,236,243)] md:p-2 rounded">
          <div className="flex flex-col md:flex-row ">
            {/* category section */}
            <div className="hidden md:block md:w-[15%] bg-white p-2 rounded shadow-md ">
              <h2 className="w-full text-lg font-semibold mb-4 bg-slate-400 text-white text-center py-1 tracking-wider rounded">Categories</h2>
              <ul className='px-4'>
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
            <div className="w-full md:w-[85%] p-2 md:p-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 place-items-center ">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="w-[220px] h-[310px] bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 border border-[#3E4095] transition-transform duration-1000 transform "
                  >
                    <Link to={`/product/${product._id}`} key={product._id}>
                      <div className="w-[220px] h-[200px] overflow-hidden rounded-t-lg p-2 shadow-md">
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          className="w-[220px] h-[182px] object-cover transition-transform duration-1000 transform hover:scale-105 rounded-t-lg border border-gray-300 overflow-hidden"
                        />
                      </div>
                    </Link>
                    <div className="p-2 flex text-center flex-col ">
                      <h3 className="text-xs md:text-[16px] font-semibold">{product.productName}</h3>
                      <p className="text-xs md:text-gray-700 mb-1"> {product.description} </p>
                      <div className="flex items-center text-sm justify-center">
                        <span className="ml-1 font-semibold mb-1">&#x20B9; {product.price} <span className='font-normal text-gray-800'>({product.unit})</span></span>
                      </div>
                      <div className='w-full flex justify-center items-center '>
                        <div className="w-[95%] flex items-center justify-between bottom-2 left-[5px] absolute">
                          <button className="w-full bg-green-500 border-2 text-white py-1 px-2 rounded hover:bg-transparent hover:border-green-500 transition duration-300 hover:text-black text-sm tracking-wider">
                            + Add to Cart
                          </button>
                        </div>
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
