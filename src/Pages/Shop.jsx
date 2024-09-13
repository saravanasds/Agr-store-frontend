import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QuantityPopup from './QuantityPopup';

const Shop = () => {
  const { department } = useParams();
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [email, setEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 25;

  useEffect(() => {
    const data = localStorage.getItem('userEmail');
    console.log(data);
    setEmail(data);
  }, []);

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

    // Find the current department object from the departments array
    const currentDepartment = departments.find(
      (dept) => dept.department.toLowerCase() === department.toLowerCase()
    );

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

  // Filter products based on the search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addToCart = async (productId, quantity, unit, actualPrice, price, balance, productImage, shopName, productCode, vendorCommission) => {
    try {
      setLoading(true);
      // Calculate the total balance based on the quantity
      const totalBalance = balance * quantity;

      const response = await axios.post('http://localhost:5000/api/cart/addToCart', {
        email,
        productId,
        productCode,
        vendorCommission,
        shopName,
        quantity,
        unit,
        actualPrice,
        price,
        balance: totalBalance, // Send the correct balance
        productImage,
      });

      if (response.data.success) {
        alert('Product added to cart successfully');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
      closePopup();
    }
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className=''>
      <div
        className="relative h-[150px] md:h-[250px] w-auto rounded-lg overflow-hidden bg-white m-4"
        style={{
          backgroundImage: `url(${currentDepartment?.coverImage})`, // Set background image
          backgroundSize: 'cover', // Ensure the image covers the entire div
          backgroundPosition: 'center', // Center the image
        }}
      >
        <h1 className="relative z-10 flex items-center justify-center h-full w-full text-black text-xl sm:text-4xl md:text-6xl font-bold capitalize">
          {department}
        </h1>
      </div>


      {/* Department Tabs */}

      <div className="fixed bottom-0 left-0 right-0 z-10 w-full md:sticky md:top-24 md:m-auto md:bottom-auto h-auto">
        <div className="w-full h-full bg-[#3E4095] overflow-x-auto py-3 md:py-1 px-1">
          <ul className="w-full flex gap-2 md:gap-4 md:py-3 justify-around ">
            {departments.map((department, index) => (
              <li
                key={index}
                className="text-center text-xs md:text-sm capitalize"
              >
                <NavLink
                  to={`/shop/${department.department}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-[rgb(129,196,8)] text-white font-bold py-1 px-2 md:px-10 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 border-white border-[1px] text-[10px] sm:text-sm whitespace-nowrap'
                      : 'text-white py-1 px-2 md:px-10 border-gray-400 border-[1px] font-medium hover:bg-[rgba(255,255,255,0.1)] hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 text-[10px] sm:text-sm whitespace-nowrap'
                  }
                >
                  {department.department}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className="px-0.5 py-5 md:p-10">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold px-4 mb-4 sm:mb-8 text-center tracking-wider text-[rgb(129,196,8)] capitalize">
          Shop from department
        </h1>

        {/* Search input */}
        <div className=" mb-4 text-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
            className="w-[90%] lg:w-1/3 sm:p-2 p-1 px-2 border border-gray-300 rounded text-sm sm:text-lg"
          />
        </div>

        {/* Horizontal Category Tabs for Mobile */}
        <div className="md:hidden mb-4 overflow-x-auto py-2 px-1 bg-white shadow-lg">
          <ul className="flex gap-1 sm:gap-3">
            <li
              key="all-products"
              className="cursor-pointer bg-gray-300 py-1 px-4 rounded text-xs sm:text-sm whitespace-nowrap"
              onClick={() => setFilteredProducts(products)}
            >
              All Products
            </li>
            {categories.map((category) => (
              <li
                key={category._id}
                className="cursor-pointer bg-gray-300 py-1 px-4 rounded capitalize text-xs sm:text-sm whitespace-nowrap"
                onClick={() => {
                  const filtered = products.filter(
                    (product) => product.category === category.category
                  );
                  setFilteredProducts(filtered);
                }}
              >
                {category.category}
              </li>
            ))}
          </ul>
        </div>



        <div className="bg-[rgb(232,236,243)] md:p-2 rounded">
          <div className="flex flex-col md:flex-row">
            {/* Category section for desktop only */}
            <div className="hidden md:block w-[30%] xl:w-[15%] bg-white p-2 rounded shadow-md">
              <h2 className="w-full text-lg font-semibold mb-4 bg-slate-400 text-white text-center py-1 tracking-wider rounded capitalize">
                Categories
              </h2>
              <ul className="px-4">
                <li key="all-products" className="mb-2 cursor-pointer" onClick={() => setFilteredProducts(products)}>
                  All Products
                </li>
                {categories.map((category) => (
                  <li
                    key={category._id}
                    className="mb-2 cursor-pointer capitalize"
                    onClick={() => {
                      const filtered = products.filter((product) => product.category === category.category);
                      setFilteredProducts(filtered);
                    }}
                  >
                    {category.category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product section */}
            <div className="w-[95%] md:w-[85%] p-2 md:p-4 mb-2 mx-auto py-6">
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-2 md:gap-4 place-items-center">
                {currentProducts.map((product) => (
                  <div
                    key={product._id}
                    className="w-full md:w-[220px] h-[200px] sm:h-[250px] md:h-[320px] bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 border border-[#3E4095] transition-transform duration-1000 transform"
                    onClick={scrolltoTop}
                  >
                    <Link to={`/product/${product._id}`} key={product._id}>
                      <div className="w-full h-[120px] sm:h-[150px] md:h-[200px] overflow-hidden rounded-t-lg p-1 sm:p-2 shadow-md">
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          className="w-full h-[110px] sm:h-[260px] md:h-[182px] object-cover transition-transform duration-1000 transform hover:scale-105 rounded-t-lg border border-gray-300 overflow-hidden"
                        />
                      </div>
                    </Link>
                    <div className="p-2 flex text-left sm:text-center flex-col">
                      <h3 className="text-xs md:text-[16px] font-semibold capitalize">{product.productName}</h3>
                      <p className="hidden md:block text-xs md:text-gray-700 mb-1 capitalize"> {product.description} </p>
                      <div className="flex items-center text-xs sm:text-sm md:text-lg justify-start sm:justify-center">
                        <span className="text-gray-500 text-[10px] sm:text-sm md:text-lg">
                          <del>&#x20B9;{product.actualPrice}</del>
                        </span>
                        <span className="ml-1 font-semibold text-xs sm:text-sm md:text-lg">&#x20B9; {product.price}</span>{' '}
                        <span className="font-normal text-gray-800">({product.unit})</span>
                      </div>
                      <div className="w-full flex justify-center items-center ">
                        <div className="w-[90%] flex items-center justify-between bottom-2 absolute">
                          <button
                            className="w-full bg-green-500 border-2 text-white py-1 px-2 rounded hover:bg-transparent hover:border-green-500 transition duration-300 hover:text-black text-[10px] sm:text-sm tracking-wider"
                            onClick={email ? () => openPopup(product) : () => alert('Please Sign In Your Account')}
                          >
                            + Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-4">
                <ul className="flex list-none">
                  {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`mx-1 sm:mx-2 cursor-pointer px-2 py-1 border rounded-full text-xs sm:text-sm ${currentPage === index + 1 ? 'bg-[rgb(62,64,149)] text-white' : 'bg-white text-[rgb(62,64,149)]'
                        }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Render the popup if it is open */}
            {isPopupOpen && (
              <QuantityPopup
                product={selectedProduct}
                onClose={closePopup}
                onAddToCart={addToCart}
                loading={loading}
              />
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Shop;
