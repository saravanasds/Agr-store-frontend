import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import SearchFilter from './ShopComponents/SearchFilter';
import { FaRupeeSign } from 'react-icons/fa';
import { productsData, banners } from '../ProductsList';

const Shop = () => {
    const { category } = useParams();
    const [currentProducts, setCurrentProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [banner, setBanner] = useState({ image: '', title: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const productsPerPage = 6;

    // Update products and banner based on the current category
    useEffect(() => {
        if (productsData[category]) {
            setCurrentProducts(productsData[category]);
            setFilteredProducts(productsData[category]);
            setBanner(banners[category]);
            setCurrentPage(1);
            setTotalPages(Math.ceil(productsData[category].length / productsPerPage));
            setSelectedSubcategory('all');
        }
    }, [category]);

    // Update filtered products based on selected subcategory
    useEffect(() => {
        const filtered = selectedSubcategory === 'all'
            ? currentProducts
            : currentProducts.filter(product => product.subcategory === selectedSubcategory);

        setFilteredProducts(filtered);
        setTotalPages(Math.ceil(filtered.length / productsPerPage));
        setCurrentPage(1); // Reset to the first page when filter changes
    }, [selectedSubcategory, currentProducts]);

    // Handle page change
    const handleClick = (page) => {
        setCurrentPage(page);
    };

    // Calculate products to display on the current page
    const displayedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    // Generate subcategory list based on current products
    const subcategories = ['all', ...new Set(currentProducts.map(product => product.subcategory))];

    return (
        <div>
            <div className='relative h-[200px] w-full overflow-hidden'>
                <img src={banner.image} alt={banner.title} className='absolute inset-0 w-full h-full object-cover' />
                <h1 className='relative z-10 flex items-center justify-center h-full w-full text-red-950 text-4xl font-bold bg-opacity-50'>
                    {banner.title}
                </h1>
            </div>

            <div className="sticky top-[120px] lg:top-[100px] z-10 w-full h-auto">
  <div className="lg:w-2/3 w-full h-full m-auto">
    <ul className="flex justify-evenly gap-1 w-full lg:w-auto md:gap-9 py-2 lg:px-4 md:py-4 lg:rounded-full bg-green-600 bg-opacity-30 backdrop-blur-md">
      {Object.keys(productsData).map((cat) => (
        <li key={cat} className="flex-1 text-center">
          <NavLink 
            to={`/shop/${cat}`} 
            className={({ isActive }) => 
              isActive ? 'bg-blue-600 text-white font-bold block py-2 rounded-lg' : 'bg-blue-400 text-black block py-2 rounded-lg'
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
        </div>


            {/* <div className="sticky top-[150px] lg:top-[100px] z-10 bg-black">
                <div className='flex items-center justify-center my-4 h-auto'>
                    <ul className='flex justify-evenly gap-1 w-full md:w-auto md:gap-9 py-2 md:py-4 bg-green-600'>
                        {Object.keys(productsData).map((cat) => (
                        <li key={cat}>
                            <NavLink 
                                to={`/shop/${cat}`} 
                                className={({ isActive }) => 
                                  isActive ? 'bg-blue-600 text-white p-4' : 'bg-blue-400 p-4'
                              }
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            </div> */}

        {/* <div className="sticky top-[150px] z-10 bg-white">
            <div className='flex items-center justify-center my-4  border-2 border-black'>
                <ul className='flex justify-evenly gap-1 w-full md:w-auto md:gap-9 py-2 md:py-4  border-2 border-black'>
                        <li>
                            <NavLink 
                                className={({ isActive }) => 
                                  isActive ? 'bg-blue-600 text-white p-2 md:p-4' : 'bg-blue-400 p-2 md:p-4'
                              }>
                               Hello
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) => 
                                  isActive ? 'bg-blue-600 text-white p-2 md:p-4' : 'bg-blue-400 p-2 md:p-4'
                              }>
                               Hello
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) => 
                                  isActive ? 'bg-blue-600 text-white p-2 md:p-4' : 'bg-blue-400 p-2 md:p-4'
                              }>
                               Hello
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) => 
                                  isActive ? 'bg-blue-600 text-white p-2 md:p-4' : 'bg-blue-400 p-2 md:p-4'
                              }>
                               Hello
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) => 
                                  isActive ? 'bg-blue-600 text-white p-2 md:p-4' : 'bg-blue-400 p-2 md:p-4'
                              }>
                               Hello
                            </NavLink>
                        </li>
                </ul>
            </div>
        </div> */}

            <div className='px-0.5 py-5 md:p-10'>
                <h1 className='text-3xl font-bold px-4'>Shop from Category</h1>
                <SearchFilter 
                    products={currentProducts} 
                    setFilteredProducts={setFilteredProducts} 
                    setCurrentPage={setCurrentPage} 
                    setTotalPages={setTotalPages} 
                    productsPerPage={productsPerPage}
                    setSelectedSubcategory={setSelectedSubcategory}
                />
            <div className="bg-gray-400 md:p-4">
  <div className="flex flex-col md:flex-row">
    {/* Subcategory section */}
    <div className="hidden md:block md:w-1/4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {subcategories.map((subcategory) => (
          <li
            key={subcategory}
            className="mb-2 cursor-pointer"
            onClick={() => setSelectedSubcategory(subcategory)}
          >
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
          </li>
        ))}
      </ul>
    </div>

    {/* Product section */}
    <div className="w-full md:w-3/4 p-2 md:p-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-green-800 transition-shadow duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-36 object-cover mb-4 transition-transform duration-1000 transform group-hover:scale-125"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <div className="flex items-center text-lg mb-4">
                <FaRupeeSign className="font-bold" />
                {product.price}
              </div>
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
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ${
              currentPage === 1 ? 'cursor-not-allowed' : ''
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handleClick(page + 1)}
              className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ${
                currentPage === page + 1 ? 'bg-gray-400 text-white' : ''
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() => handleClick(currentPage + 1)}
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ${
              currentPage === totalPages ? 'cursor-not-allowed' : ''
            }`}
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
    );
}

export default Shop;
