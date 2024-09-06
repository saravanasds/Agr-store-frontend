import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import QuantityPopup from './QuantityPopup';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('userEmail');
    console.log(data);
    setEmail(data);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/vendor/getProduct/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const addToCart = async (
    productId,
    quantity,
    unit,
    actualPrice,
    price,
    balance,
    productImage,
    shopName,
    productCode,
    vendorCommission
  ) => {
    setLoading(true);
    try {
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

  if (!product) return <div className='w-full min-h-[50vh]'>Loading...</div>;

  return (
    <div className="p-4 md:p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-2">{product.productName}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex items-center text-sm justify-start mb-4">
              <span className=' text-gray-500'><del>&#x20B9;{product.actualPrice}</del></span>
              <span className="ml-1 font-semibold  text-lg">&#x20B9; {product.price}</span> <span className='font-normal text-gray-800'>({product.unit})</span>
            </div>
            <button
              className=" bg-green-500 border-2 text-white py-2 px-4 rounded hover:bg-transparent hover:border-green-500 transition duration-300 hover:text-black text-lg tracking-wider"
              onClick={email ? () => openPopup(product) : () => alert("Please Sign In Your Account")}
            >
              {loading ? (
                <ClipLoader color={'#ffffff'} loading={loading} size={20} />
              ) : (
                '+ Add to cart'
              )}
            </button>
          </div>
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
  );
};

export default ProductDetail;
