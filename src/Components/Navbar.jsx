import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson, IoSearch, IoCloseCircleSharp} from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu
  const searchRef = useRef(null);
  const sidebarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleSearchBar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
    if (!event.target.closest(".dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <>
     <div className="sticky top-0 w-full bg-white z-50 shadow-md">
          <div className="flex-col md:flex justify-center items-center">
        <div className="flex lg:full w-[85%] h-auto md:h-[100px] m-auto justify-between items-center bg-white">
          <div className="md:hidden text-4xl text-[rgb(129,196,8)] cursor-pointer" onClick={toggleMobileMenu}>
            <GiHamburgerMenu />
          </div>

          <h1 className="text-[rgb(129,196,8)] font-sen text-2xl md:text-4xl font-bold py-2">
            AGR STORE
          </h1>

          <div className="md:w-auto text-lg hidden md:flex justify-center items-center gap-3 text-gray-500 tracking-wider">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-[rgb(129,196,8)] text-xl"
                  : "block p-2 px-4 hover:text-[rgb(129,196,8)]"
              }
            >
              Home
            </NavLink>

            <div className="relative group dropdown ">
              <button
                className="flex items-center p-2 px-4 text-xl hover:text-[rgb(129,196,8)] focus:outline-none bg-blue-300 rounded-full "
                onClick={toggleDropdown}
              >
                Shop
                {isDropdownOpen ? (
                  <IoIosArrowUp className="ml-2 transition-transform duration-300" />
                ) : (
                  <IoIosArrowDown className="ml-2 transition-transform duration-300" />
                )}
              </button>
              <div className={`absolute top-full left-0 bg-white border rounded-lg shadow-lg z-50 mt-2 w-48 opacity-0 ${isDropdownOpen ? 'opacity-100 mt-0' : 'opacity-0'} transition-opacity duration-300`}>
                <NavLink
                  to="/shop/grocery"
                  className="block p-2 px-4 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Grocery
                </NavLink>
                <NavLink
                  to="/shop/vegetables"
                  className="block p-2 px-4 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Vegetables
                </NavLink>
                <NavLink
                  to="/shop/cosmetics"
                  className="block p-2 px-4 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Cosmetics
                </NavLink>
                <NavLink
                  to="/shop/furniture"
                  className="block p-2 px-4 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Furniture
                </NavLink>
                <NavLink
                  to="/shop/cloths"
                  className="block p-2 px-4 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Clothes
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-[rgb(129,196,8)] text-xl"
                  : "block p-2 px-4 hover:text-[rgb(129,196,8)]"
              }
            >
              Pages
            </NavLink>
          </div>

          <div className="flex justify-end">
            <div className="flex gap-5 text-4xl text-[rgb(129,196,8)]">
              <div className="relative md:flex hidden items-center" ref={searchRef}>
                <button
                  className={`border-[rgb(255,181,36)] border-[1px] text-2xl rounded-full p-2 bg-white transition-transform duration-500 ${
                    isExpanded ? "translate-x-0" : ""
                  }`}
                  onClick={toggleSearchBar}
                >
                  <IoSearch />
                </button>
                <input
                  type="text"
                  className={`absolute right-0 border border-[rgb(255,181,36)] text-2xl rounded-full p-2 bg-white transition-all duration-500 ${
                    isExpanded ? "opacity-100 w-64 px-4" : "opacity-0 w-0"
                  }`}
                  style={{ zIndex: isExpanded ? 100 : -100 }}
                  placeholder="Search..."
                />
              </div>

              <a href="#" className="hidden">
                <FaShoppingBag />
              </a>
              <a href="#" onClick={toggleSidebar}>
                <IoPerson />
              </a>
            </div>
          </div>
        </div>

        {/* Search bar for small screens */}
        <div className="relative sm:flex md:hidden items-center h-auto w-[80%] mx-auto my-4 rounded-full p-2 bg-white" ref={searchRef}>
          <input
            type="text"
            className="w-full border border-[rgb(255,181,36)] text-xl rounded-full p-4 py-2 transition-all duration-500"
            placeholder="Search..."
          />
        </div>
          </div>
      </div>

      {/* Mobile navigation menu */}
      <div
       className={`fixed top-0 left-0 w-[75%] h-full bg-[rgb(255,181,36)] bg-opacity-10 border border-white border-opacity-30 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-500 z-50 ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      
        ref={mobileMenuRef}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMobileMenu}
        >
          &#10005; {/* Close icon */}
        </button>
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block p-4 text-[rgb(129,196,8)] text-xl"
              : "block p-4 text-xl hover:text-[rgb(129,196,8)]"
          }
          onClick={toggleMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop/grocery"
          className={({ isActive }) =>
            isActive
              ? "block p-4 text-[rgb(129,196,8)] text-xl"
              : "block p-4 text-xl hover:text-[rgb(129,196,8)]"
          }
          onClick={toggleMobileMenu}
        >
          Shop
        </NavLink>
        <NavLink
          to="/pages"
          className={({ isActive }) =>
            isActive
              ? "block p-4 text-[rgb(129,196,8)] text-xl"
              : "block p-4 text-xl hover:text-[rgb(129,196,8)]"
          }
          onClick={toggleMobileMenu}
        >
          Pages
        </NavLink>
      </div>

      {/* Sidebar */}
      <div
      className={`fixed top-0 right-0 w-[75%] sm:w-[50%] md:w-[30%] h-full z-50 bg-white shadow-xl transition-transform duration-500 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
      ref={sidebarRef}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-2xl">
          <IoCloseCircleSharp />
        </button>
      </div>
      {/* Sidebar content */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        <nav className="space-y-2">
          <NavLink
            to="/profile"
            className="block p-2 text-lg hover:bg-gray-200 rounded"
            onClick={toggleSidebar}
          >
            Profile
          </NavLink>
          <NavLink
            to="/settings"
            className="block p-2 text-lg hover:bg-gray-200 rounded"
            onClick={toggleSidebar}
          >
            Settings
          </NavLink>
          <NavLink
            to="/notifications"
            className="block p-2 text-lg hover:bg-gray-200 rounded"
            onClick={toggleSidebar}
          >
            Notifications
          </NavLink>
          <NavLink
            to="/help"
            className="block p-2 text-lg hover:bg-gray-200 rounded"
            onClick={toggleSidebar}
          >
            Help
          </NavLink>
          <NavLink
            to="/logout"
            className="block p-2 text-lg hover:bg-gray-200 rounded"
            onClick={toggleSidebar}
          >
            Logout
          </NavLink>
        </nav>
      </div>
    </div>

    </>
  );
}

export default Navbar;
