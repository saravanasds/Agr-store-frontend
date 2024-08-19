// DropdownMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const DropdownMenu = ({ isDropdownOpen, toggleDropdown }) => {
  return (
    <div className="relative group dropdown">
      <button
        className="flex items-center p-2 px-4 text-xl hover:text-[rgb(129,196,8)] focus:outline-none rounded-full"
        onClick={toggleDropdown}
      >
        Shop
        {isDropdownOpen ? (
          <IoIosArrowUp className="ml-2 transition-transform duration-300 mt-2" />
        ) : (
          <IoIosArrowDown className="ml-2 transition-transform duration-300 mt-2" />
        )}
      </button>
      <div className={`absolute top-full left-0 bg-white border rounded-lg shadow-lg z-50 mt-2 w-48 opacity-0 ${isDropdownOpen ? 'translate-y-0 opacity-100' : 'hidden opacity-0'} transition-opacity duration-300`}>
        <NavLink to="/shop/grocery" className="block p-2 px-4 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
          Grocery
        </NavLink>
        <NavLink to="/shop/vegetables" className="block p-2 px-4 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
          Vegetables
        </NavLink>
        <NavLink to="/shop/cosmetics" className="block p-2 px-4 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
          Cosmetics
        </NavLink>
        <NavLink to="/shop/furniture" className="block p-2 px-4 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
          Furniture
        </NavLink>
        <NavLink to="/shop/cloths" className="block p-2 px-4 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
          Clothes
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownMenu;
