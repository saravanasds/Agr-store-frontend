// Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson, IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

// Components
import Sidebar from "./NavbarComponents/Sidebar";
import MobileMenu from "./NavbarComponents/MobileMenu";
import DropdownMenu from "./NavbarComponents/DropDownMenu";

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

  // Search Slide
  const [isSearchSlideVisible, setIsSearchSlideVisible] = useState(false);
  const slideRef = useRef(null);

  const toggleSlidebar = () => {
    setIsSearchSlideVisible(!isSearchSlideVisible);
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
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchSlideVisible(false);
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
        <div className="sticky top-0  z-50 shadow-md bg-white  flex-col md:flex justify-center items-center h-16">
          <div className="flex justify-between items-center h-full w-[85%] py-2 m-auto">
            <div
              className="lg:hidden text-2xl md:text-4xl text-[rgb(129,196,8)] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <GiHamburgerMenu />
            </div>

            <h1 className="text-[rgb(129,196,8)] font-sen text-xl md:text-4xl font-bold py-2">
              AGR STORE
            </h1>

            <div className="md:w-auto text-lg hidden lg:flex justify-center items-center gap-3 text-gray-500 tracking-wider">
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

              <DropdownMenu
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
              />

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

            <div className="flex items-center justify-end ">
              <div className="flex gap-2 md:gap-5 text-xl md:text-4xl text-[rgb(129,196,8)]">
                <div
                  className="relative lg:flex hidden items-center"
                  ref={searchRef}
                >
                  <button
                    className={`border-[rgb(255,181,36)] border-[1px] text-xl rounded-full p-2 bg-white transition-transform duration-500 ${
                      isExpanded ? "translate-x-0" : ""
                    }`}
                    onClick={toggleSearchBar}
                  >
                    <IoSearch />
                  </button>
                  <input
                    type="text"
                    className={`absolute right-0 border border-[rgb(255,181,36)] text-xl rounded-full p-2 bg-white transition-all duration-500 ${
                      isExpanded ? "opacity-100 w-64 px-4" : "opacity-0 w-0"
                    }`}
                    style={{ zIndex: isExpanded ? 100 : -100 }}
                    placeholder="Search..."
                  />
                </div>

                {/* Search icon for mobile */}
                <div className="lg:hidden flex items-center">
                  <div
                    className="border-[rgb(255,181,36)] border-[1px]  rounded-full p-1 md:p-2 bg-white  transition-transform duration-500"
                    onClick={toggleSlidebar}
                  >
                    <IoSearch />
                  </div>
                </div>

                <a href="#" className="hidden">
                  <FaShoppingBag />
                </a>
                <a href="#" className="flex items-center " onClick={toggleSidebar}>
                  <IoPerson />
                </a>
                <NavLink to="/login" className="flex items-center ">
                  <IoPerson />
                </NavLink>
              </div>
            </div>
          </div>

          {/* Search bar for small screens */}
          <div
            className={`relative sm:flex md:hidden items-center h-auto w-[80%] mx-auto my-2 rounded-full p-2 bg-white transition-transform duration-500 ${
              isSearchSlideVisible ? "translate-y-0" : "-translate-y-48"
            }`}
            ref={slideRef}
          >
            <input
              type="text"
              className="absolute w-full border border-[rgb(255,181,36)] text-xl rounded-full p-4 py-2 transition-all duration-500"
              placeholder="Search..."
            />
          </div>
          
        </div>
     

      {/* Mobile navigation menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuRef={mobileMenuRef}
      />

      {/* Sidebar content */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarRef={sidebarRef}
      />
    </>
  );
}

export default Navbar;
