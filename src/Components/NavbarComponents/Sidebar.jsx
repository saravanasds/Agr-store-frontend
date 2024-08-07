import React from 'react';
import { NavLink } from "react-router-dom";
import { IoArrowBack, IoArrowBackCircle, IoCloseCircleSharp, IoLogoVercel } from 'react-icons/io5';
import { IoWallet, IoCart, IoPerson, IoLogOut } from 'react-icons/io5';
import { IoHome, IoStatsChart } from 'react-icons/io5';

const Sidebar = ({ isSidebarOpen, toggleSidebar, sidebarRef }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[75%] sm:w-[50%] md:w-[30%] h-full z-50 bg-white bg-opacity-10 backdrop-blur-lg shadow-xl transition-transform duration-500 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={sidebarRef}
      >
        <div className="absolute top-2 left-2">
          <IoArrowBackCircle
            onClick={toggleSidebar}
            className="text-2xl text-green-800 hover:text-green-500 cursor-pointer"
          />
        </div>

        {/* Sidebar content */}
        <div className="p-4 py-8">
          <div className=" mb-4 text-center bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-4">
            <h2 className="text-xl font-bold my-2">User Profile</h2>
            <h2 className="my-2">Member ID: <span> {/* Dummy id */} </span></h2>
          </div>
          <nav className="space-y-2">

            <NavLink
              to="/overview"
              className="flex items-center p-2 text-lg hover:bg-gray-200 rounded transition-colors"
              onClick={toggleSidebar}
            >
              <IoHome className="mr-2 text-xl" />
              Overview
            </NavLink>
            <NavLink
              to="/level"
              className="flex items-center p-2 text-lg hover:bg-gray-200 rounded transition-colors"
              onClick={toggleSidebar}
            >
              <IoLogoVercel className="mr-2 text-xl" />
              Level
            </NavLink>
            <NavLink
              to="/wallet"
              className="flex items-center p-2 text-lg hover:bg-gray-200 rounded transition-colors"
              onClick={toggleSidebar}
            >
              <IoWallet className="mr-2 text-xl" />
              Wallet
            </NavLink>
            <NavLink
              to="/purchases"
              className="flex items-center p-2 text-lg hover:bg-gray-200 rounded transition-colors"
              onClick={toggleSidebar}
            >
              <IoCart className="mr-2 text-xl" />
              My Purchases
            </NavLink>
            <NavLink
              to="/order-status"
              className="flex items-center p-2 text-lg hover:bg-gray-200 rounded transition-colors"
              onClick={toggleSidebar}
            >
              <IoStatsChart className="mr-2 text-xl" />
             Order Status
            </NavLink>
            <NavLink
              to="/profile"
              className="flex items-center p-2 text-lg hover:bg-gray-200 rounded transition-colors"
              onClick={toggleSidebar}
            >
              <IoPerson className="mr-2 text-xl" />
              Profile
            </NavLink>
            <NavLink
              to="/logout"
              className="flex items-center p-2 text-lg hover:bg-gray-200 rounded transition-colors"
              onClick={toggleSidebar}
            >
              <IoLogOut className="mr-2 text-xl" />
              Logout
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
