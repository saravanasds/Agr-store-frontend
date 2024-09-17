import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const QuantityPopup = ({ product, onClose, onAddToCart, loading }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 sm:px-10 rounded shadow-lg">
                <h2 className="text-lg sm:text-xl mb-8">Select Quantity</h2>
                <div className="flex items-center justify-between">
                    <button onClick={decreaseQuantity} className="sm:px-3 sm:py-1  py-0 px-2 bg-red-500 rounded text-white sm:text-xl font-bold">-</button>
                    <span className="px-4 text-sm sm:text-xl">{quantity} {product.unit}</span>
                    <button onClick={increaseQuantity} className="sm:px-3 sm:py-1  py-0 px-2 bg-green-500 rounded text-white sm:text-xl font-bold">+</button>
                </div>
                <div className="mt-6 flex justify-end">
                    <button onClick={onClose} className="mr-4 bg-gray-300 px-5 py-1 rounded text-sm sm:text-lg">Cancel</button>
                    <button
                        onClick={() => onAddToCart(
                            quantity,
                            product.unit,
                            product.actualPrice,
                            product.price,
                            product.balance,
                            product.productImage,
                            product.shopName,
                            product.productCode,
                            product.productName,
                            product.vendorEmail,
                            product.vendorCommission
                        )}
                        className="bg-[#3E4095] text-white px-5 py-1 rounded text-sm sm:text-lg"
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
    );
};

export default QuantityPopup;
