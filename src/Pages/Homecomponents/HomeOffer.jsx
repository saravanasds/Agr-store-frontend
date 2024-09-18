import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowRight, } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import QuantityPopup from '../QuantityPopup';

const HomeOffer = () => {
    const [email, setEmail] = useState('');
    const [offerProducts, setOfferProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current set of displayed products
    const [maxProductsToShow, setMaxProductsToShow] = useState(5); // Default is 5 for larger screens
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('userEmail');
        console.log(data);
        setEmail(data);
    }, []);

    useEffect(() => {
        const fetchVendorProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/getAllOfferProducts');
                setOfferProducts(response.data || []);
            } catch (err) {
                console.error('Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchVendorProducts();

        // Adjust number of products to display based on screen size
        const handleResize = () => {
            if (window.innerWidth >= 1440) {
                setMaxProductsToShow(5);
            }
            else if (window.innerWidth >= 770) {
                setMaxProductsToShow(4);
            }
            else if (window.innerWidth >= 420) {
                setMaxProductsToShow(3);
            }
            else {
                setMaxProductsToShow(2); // 5 products on larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Run initially to set the correct product count

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle Next and Previous buttons
    const handleNext = () => {
        if (currentIndex + 1 < offerProducts.length - (maxProductsToShow - 1)) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Get the current set of products to display based on screen size
    const displayedProducts = offerProducts.slice(currentIndex, currentIndex + maxProductsToShow);

    const addToCart = async (quantity, unit, actualPrice, price, balance, productImage, shopName, productCode, productName, vendorEmail, vendorCommission, offered) => {
        try {
            setLoading(true);
            // Calculate the total balance based on the quantity
            const totalBalance = balance * quantity;

            const response = await axios.post('http://localhost:5000/api/cart/addToCart', {
                email,
                productCode,
                productName,
                vendorEmail: vendorEmail,
                vendorCommission: vendorCommission,
                shopName,
                quantity,
                unit,
                actualPrice,
                price,
                balance: totalBalance, // Send the correct balance
                productImage,
                offered: offered || " "
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

    return (
        <div className='w-[95%] mx-auto sm:py-10'>
            <div className='w-[100%]'>
                <h1 className='sm:text-2xl font-bold tracking-wider bg-gradient-to-r from-slate-200 to-white p-1 sm:p-2 px-4 uppercase rounded text-[#3E4095] text-center '>Top Offers</h1>
            </div>

            <div className='w-full my-4 sm:my-10 flex flex-col gap-2 sm:gap-8 bg-slate-200 p-4 sm:p-6 rounded-md justify-center items-center'>
                {/* Display Products */}
                <div className="flex justify-center gap-2 sm:gap-4 items-center w-full relative ">

                    {/* Backward Arrow */}
                    {currentIndex > 0 && (
                        <button
                            className="absolute -left-5 top-1/2 transform -translate-y-1/2 sm:text-3xl p-1 sm:p-2  rounded-full transition-colors duration-300 z-30"
                            onClick={handlePrev}
                        >
                            <IoIosArrowBack />
                        </button>
                    )}

                    <div className="w-full grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-5 gap-2 place-items-center">
                        {displayedProducts.map(product => (
                            <div
                                key={product._id}
                                className="w-[130px] sm:w-[160px] lg:w-[220px] h-[200px] sm:h-[250px] lg:h-[320px] bg-white rounded shadow-md hover:shadow-lg hover:shadow-gray-400 border border-[#3E4095] transition-transform duration-1000 transform"
                            >

                                <div className="w-full h-[120px] sm:h-[150px] lg:h-[200px] overflow-hidden rounded-t p-1 sm:p-2 shadow-md">
                                    <img
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="w-full h-[110px] sm:h-[260px] lg:h-[182px] object-cover transition-transform duration-1000 transform hover:scale-105 rounded-t border border-gray-300 overflow-hidden"
                                    />
                                    {/* Calculate and display offer percentage */}
                                    {product.actualPrice && product.price && product.actualPrice > product.price && (
                                        <span className='absolute top-1 left-1 sm:top-2 sm:left-2 text-xs bg-red-600 text-white font-semibold px-1 py-0.5 rounded-ss'>
                                            {`${Math.round(((product.actualPrice - product.price) / product.actualPrice) * 100)}% OFF`}
                                        </span>
                                    )}
                                </div>

                                <div className="p-2 flex text-left sm:text-center flex-col">
                                    <h3 className="text-xs lg:text-[16px] font-semibold capitalize">{product.productName}</h3>
                                    <p className="hidden lg:block text-xs md:text-gray-700 mb-1 capitalize"> {product.description} </p>
                                    <div className="flex items-center text-xs lg:text-lg justify-start sm:justify-center">
                                        <span className="text-gray-500 text-[10px] sm:text-sm lg:text-lg">
                                            <del>&#x20B9;{product.actualPrice}</del>
                                        </span>
                                        <span className="ml-1 font-semibold text-xs sm:text-sm lg:text-lg">&#x20B9; {product.price}</span>{' '}
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

                    {/* Forward Arrow */}
                    {currentIndex + maxProductsToShow < offerProducts.length && (
                        <button
                            className="absolute -right-5 top-1/2 transform -translate-y-1/2  sm:text-3xl  p-1 sm:p-2 rounded-full transition-colors duration-300 z-30"
                            onClick={handleNext}
                        >
                            <IoIosArrowForward />
                        </button>
                    )}
                </div>

                {/* Show All Button */}
                {offerProducts.length > maxProductsToShow && (
                    <div className="w-[100%] flex flex-col justify-center items-center">
                        <a
                            href="/offerProducts"
                            className="w-full xs:w-auto bg-[#3E4095] text-white hover:bg-slate-800 transition-colors duration-300 rounded text-xs sm:text-sm px-6 py-1 flex justify-center items-center gap-2"
                        >
                            Show All <FaArrowRight />
                        </a>
                    </div>
                )}
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
    );
};

export default HomeOffer;
