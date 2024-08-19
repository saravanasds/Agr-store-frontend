import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import axios from 'axios';

const DropdownMenu = ({ isDropdownOpen, toggleDropdown }) => {
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
      <div className={`absolute top-full left-0 bg-white border rounded-lg shadow-lg z-50 mt-2 w-48 ${isDropdownOpen ? 'translate-y-0 opacity-100' : 'hidden opacity-0'} transition-opacity duration-300`}>
        {departments.map((department) => (
          <NavLink
            key={department._id}
            to={`/shop/${department.department}`}
            className="block p-2 px-4 hover:bg-gray-100"
            onClick={() => toggleDropdown(false)}
          >
            {department.department}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
