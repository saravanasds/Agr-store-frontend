import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

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

  if (!product) return <div>Loading...</div>;

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
            <h2 className="text-3xl font-bold mb-4">{product.productName}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="text-2xl font-semibold text-green-600 mb-4">
              &#x20B9; {product.price} <span className='text-sm text-gray-500'>({product.unit})</span>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
