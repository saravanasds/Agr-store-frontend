// MobileMenu.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu, mobileMenuRef, token }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getAllDepartments');
        console.log('Departments:', response.data);
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-[50%] h-full bg-[rgb(0,0,0,0.6)] bg-opacity-30 border border-white border-opacity-30 backdrop-blur-[2px] flex flex-col items-center justify-center transition-transform duration-500 z-50  ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      ref={mobileMenuRef}
    >
      <button className="absolute top-4 right-4 text-2xl text-white" onClick={toggleMobileMenu}>
        &#10005; {/* Close icon */}
      </button>
      <div className='w-full'>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "block p-2 px-4 md:p-4 text-white text-xl" : " text-white block p-4 text-xl hover:text-[rgb(129,196,8)]"
          }
          onClick={toggleMobileMenu}
        >
          Home
        </NavLink>
        {departments.map((department) => (
          <NavLink
            key={department._id}
            to={`/shop/${department.department}`}
            className="block p-1 px-4 hover:bg-gray-100 hover:text-black rounded text-white capitalize"
            onClick={() => toggleDropdown(false)}
          >
            {department.department}
          </NavLink>
        ))}
      </div>
      {token ? "" :
        (
          <div className="w-[90%] flex flex-col justify-center items-center gap-2 mt-4">
            <a
              href="/register"
              className="w-full bg-gray-400 text-white px-4 py-2 sm:py-3 rounded hover:bg-gray-500 text-xs sm:text-[16px] text-center"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="w-full bg-[#3E4095] text-white px-4 py-2 sm:py-3 rounded hover:bg-[#4749ae] text-xs sm:text-[16px] text-center"
            >
              Sign In
            </a>
          </div>
        )}
    </div>
  );
};

export default MobileMenu;
