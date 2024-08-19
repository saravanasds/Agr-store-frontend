import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoWallet, IoCart, IoPerson, IoLogOut } from 'react-icons/io5';
import { IoHome, IoStatsChart } from 'react-icons/io5';
import { SlClose } from "react-icons/sl";


const Sidebar = ({ isSidebarOpen, toggleSidebar, sidebarRef }) => {
  const [user, setUser] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSignOut = (event) => {
    event.preventDefault(); // Prevent default link behavior
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    // Redirect the user using react-router's navigate
    navigate('/login');
    window.location.reload();
  };

  useEffect(() => {
    const data = localStorage.getItem('userName');
    console.log(data);
    setUser(data);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[75%] sm:w-[50%] md:w-[20%] h-full z-50 bg-[rgb(69,89,91)] backdrop-blur-lg shadow-xl transition-transform duration-500 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        ref={sidebarRef}
      >
        <div className="absolute top-2 right-2">
          <SlClose
            onClick={toggleSidebar}
            className="text-2xl text-white cursor-pointer rounded-full"
          />
        </div>

        {/* Sidebar content */}
        <div className="py-8 ">
          <div className="text-center border-b-2 border-[rgb(255,181,36)] p-2 text-white mb-8 pb-8">
            <h2 className="text-xl font-bold my-2">Hi, {user}</h2>
            <h2 className="my-2">
              FR408004 <span> {/* Dummy id */} </span>
            </h2>
          </div>
          <nav className="space-y-2 text-white px-4">
            <NavLink
              to="/overview"
              className="flex items-center p-2 text-md hover:bg-gradient-to-r from-[rgb(57,73,75)] to-transparent rounded-full transition-colors px-4 tracking-wider"
              onClick={toggleSidebar}
            >
              <IoHome className="mr-2 text-xl text-[rgb(129,196,8)]" />
              Overview
            </NavLink>
            <NavLink
              to="/wallet"
              className="flex items-center p-2 text-md hover:bg-gradient-to-r from-[rgb(57,73,75)] to-transparent rounded-full transition-colors px-4 tracking-wider"
              onClick={toggleSidebar}
            >
              <IoWallet className="mr-2 text-xl text-[rgb(129,196,8)]" />
              Wallet
            </NavLink>
            <NavLink
              to="/purchases"
              className="flex items-center p-2 text-md hover:bg-gradient-to-r from-[rgb(57,73,75)] to-transparent rounded-full transition-colors px-4 tracking-wider"
              onClick={toggleSidebar}
            >
              <IoCart className="mr-2 text-xl text-[rgb(129,196,8)]" />
              My Purchases
            </NavLink>
            <NavLink
              to="/order-status"
              className="flex items-center p-2 text-md hover:bg-gradient-to-r from-[rgb(57,73,75)] to-transparent rounded-full transition-colors px-4 tracking-wider"
              onClick={toggleSidebar}
            >
              <IoStatsChart className="mr-2 text-xl text-[rgb(129,196,8)]" />
              Order Status
            </NavLink>
            <NavLink
              to="/profile"
              className="flex items-center p-2 text-md hover:bg-gradient-to-r from-[rgb(57,73,75)] to-transparent rounded-full transition-colors px-4 tracking-wider"
              onClick={toggleSidebar}
            >
              <IoPerson className="mr-2 text-xl text-[rgb(129,196,8)]" />
              Profile
            </NavLink>
            <div>
              <button
                onClick={(event) => {
                  handleSignOut(event);
                  toggleSidebar();
                }}
                className="flex items-center p-2 text-md hover:bg-gradient-to-r from-[rgb(57,73,75)] to-transparent rounded-full transition-colors px-4 tracking-wider"
              >
                <IoLogOut className="mr-2 text-xl text-[rgb(129,196,8)]" />
                Sign Out
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
