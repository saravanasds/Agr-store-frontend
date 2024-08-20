import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

// Components
import Sidebar from "./NavbarComponents/Sidebar";
import MobileMenu from "./NavbarComponents/MobileMenu";
import DropdownMenu from "./NavbarComponents/DropDownMenu";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu
  const [isSearchSlideVisible, setIsSearchSlideVisible] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const searchRef = useRef(null);
  const sidebarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const slideRef = useRef(null);

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    const data = localStorage.getItem('userName');
    console.log(data);
    setUser(data);
  }, []);

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
    if (slideRef.current && !slideRef.current.contains(event.target)) {
      setIsSearchSlideVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = (event) => {
    event.preventDefault(); // Prevent default link behavior
    localStorage.removeItem('token');
    setToken(null);
    // Redirect the user using react-router's navigate
    navigate("/login");
  };

  return (
    <>
      <div className="sticky top-0 z-50 shadow shadow-[rgb(69,89,91)] bg-white h-24">
        <div className="flex justify-between items-center h-full w-[100%] py-2 font-semibold px-20">
          <div
            className="lg:hidden text-2xl md:text-4xl text-[rgb(129,196,8)] cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <GiHamburgerMenu />
          </div>

          <div className="">
            <NavLink to="/">
              <img src="/src/Accets/agr-logo.png" alt="Logo" className="w-40 h-12" />
            </NavLink>
          </div>

          <div className="md:w-auto text-lg hidden lg:flex justify-center items-center gap-3 text-gray-500 tracking-wider ">
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
          </div>

          <div className="flex items-center justify-end">
            <div className="flex gap-2 md:gap-5 text-[rgb(129,196,8)]">
              <div className="relative lg:flex hidden items-center" ref={searchRef}>
                <button
                  className={`border-[#3E4095] border-[2px] text-xl rounded-full p-2 bg-white transition-transform duration-500 ${isExpanded ? "translate-x-0" : ""
                    }`}
                  onClick={toggleSearchBar}
                >
                  <IoSearch />
                </button>
                <input
                  type="text"
                  className={`absolute right-0 border-2 border-[#3E4095] text-xl rounded-full p-2 bg-white transition-all duration-500 ${isExpanded ? "opacity-100 w-64 px-4" : "opacity-0 w-0"
                    }`}
                  style={{ zIndex: isExpanded ? 100 : -100 }}
                  placeholder="Search..."
                />
              </div>

              {/* Search icon for mobile */}
              <div className="lg:hidden flex items-center">
                <div
                  className="border-[rgb(255,181,36)] border-[1px] rounded-full p-1 md:p-2 bg-white transition-transform duration-500"
                  onClick={toggleSlidebar}
                >
                  <IoSearch />
                </div>
              </div>

              <NavLink to="/cart" className="flex items-center">
                <div className="relative">
                  <FaShoppingCart className="w-8 h-8" />
                  <div className="absolute bg-[#3E4095] w-[20px] h-[20px] -top-1 -right-1 rounded-full flex justify-center items-center">
                    <span className="text-sm text-white">3</span>
                  </div>
                </div>
              </NavLink>

              {token ? (
                <div className="flex justify-center items-center gap-2">

                  <div className="flex justify-center items-center gap-2 border border-black rounded-md py-1 px-3">
                    <span>Welcome {user}</span>
                    <a href="#" className="flex items-center" onClick={toggleSidebar}>
                      <MdAccountCircle className="w-8 h-8 text-gray-500" />
                    </a>
                  </div>

                  {/* <div>
                    <a
                      href="/login" // Ensure this is correct or use NavLink if needed
                      onClick={handleSignOut}
                      className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 "
                    >
                      Sign Out
                    </a>
                  </div> */}

                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <a
                    href="/register"
                    className="bg-gray-400 text-white px-4 py-2 rounded-3xl hover:bg-gray-500"
                  >
                    Sign Up
                  </a>
                  <a
                    href="/login"
                    className="bg-[#3E4095] text-white px-4 py-2 rounded-3xl hover:bg-[#4749ae]"
                  >
                    Sign In
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search bar for small screens */}
        <div
          className={`relative sm:flex md:hidden items-center h-auto w-[80%] mx-auto my-2 rounded-full p-2 bg-white transition-transform duration-500 ${isSearchSlideVisible ? "translate-y-0" : "-translate-y-48"
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
