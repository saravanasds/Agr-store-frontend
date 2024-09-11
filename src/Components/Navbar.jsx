import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import axios from "axios";

// Components
import Sidebar from "./NavbarComponents/Sidebar";
import MobileMenu from "./NavbarComponents/MobileMenu";
import DropdownMenu from "./NavbarComponents/DropDownMenu";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchSlideVisible, setIsSearchSlideVisible] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const searchRef = useRef(null);
  const sidebarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const slideRef = useRef(null);

  const navigate = useNavigate();

  // Fetch user data and token
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('userName');
    setToken(storedToken);
    setUser(storedUser);
  }, []);

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      const email = localStorage.getItem('userEmail');  // Directly access email from localStorage
      console.log('Fetching cart items for:', email);  // Debugging

      if (email) {
        try {
          const response = await axios.post('http://localhost:5000/api/cart/getCartItems', {
            email: email,
          });

          console.log('Cart items response:', response.data);  // Debugging
          setCartItems(response.data.products);
        } catch (error) {
          console.error('Error fetching cart products:', error);
        }
      }
    };

    fetchCartItems();
  }, []);

  console.log('Cart items:', cartItems);  // Debugging

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
    event.preventDefault();
    localStorage.removeItem('token');
    setToken(null);
    navigate("/login");
  };

  return (
    <>
      <div className="sticky top-0 z-50 shadow shadow-[rgb(69,89,91)] bg-white h-16 sm:h-24">
        <div className="flex justify-between items-center h-full w-[100%] py-2 font-semibold px-4 md:px-10 lg:px-20">

          <div className="flex gap-3 items-center">
            <div
              className="md:hidden text-2xl sm:text-3xl  text-[rgb(129,196,8)] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <GiHamburgerMenu />
            </div>

            <div className="">
              <NavLink to="/">
                <img src="/src/Accets/agr-logo.png" alt="Logo" className="w-20 h-6 sm:w-32 sm:h-10 lg:w-40 lg:h-12" />
              </NavLink>
            </div>
          </div>

          <div className="md:w-auto text-lg hidden md:flex justify-center items-center gap-3 text-gray-500 tracking-wider ">
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
            <div className="flex gap-3 sm:gap-4 md:gap-8 text-[rgb(129,196,8)]">

              <NavLink to="/cart" className="flex items-center">
                <div className="relative">
                  <FaShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />
                  <div className="absolute bg-[#3E4095] w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] -top-[2px] -right-[2px] sm:-top-1 sm:-right-1 rounded-full flex justify-center items-center">
                    <span className="text-sm text-white">{cartItems.length}</span>
                  </div>
                </div>
              </NavLink>

              {token ? (
                <div className="sm:flex justify-center items-center gap-2">

                  <div className="flex justify-center items-center gap-2 sm:border border-black sm:rounded-md sm:py-1 sm:px-3 text-xs sm:text-lg">
                    <span className="hidden sm:block">Welcome {user}</span>
                    <a href="#" className="flex items-center" onClick={toggleSidebar}>
                      <MdAccountCircle className="w-8 h-8 text-gray-500" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="hidden sm:flex justify-center items-center gap-1 sm:gap-2">
                  <a
                    href="/register"
                    className="bg-gray-400 text-white px-4 py-2 sm:py-3 rounded-3xl hover:bg-gray-500 text-xs sm:text-[16px]"
                  >
                    Sign Up
                  </a>
                  <a
                    href="/login"
                    className="bg-[#3E4095] text-white px-4 py-2 sm:py-3 rounded-3xl hover:bg-[#4749ae] text-xs sm:text-[16px]"
                  >
                    Sign In
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

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

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        token={token}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        handleSignOut={handleSignOut}
        token={token}
      />
    </>
  );
}

export default Navbar;

