// MobileMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu, mobileMenuRef }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[75%] h-full bg-[rgb(255,181,36)] bg-opacity-10 border border-white border-opacity-30 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-500 z-50 ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={mobileMenuRef}
    >
      <button className="absolute top-4 right-4 text-2xl" onClick={toggleMobileMenu}>
        &#10005; {/* Close icon */}
      </button>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "block p-4 text-[rgb(129,196,8)] text-xl" : "block p-4 text-xl hover:text-[rgb(129,196,8)]"
        }
        onClick={toggleMobileMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/shop/grocery"
        className={({ isActive }) =>
          isActive ? "block p-4 text-[rgb(129,196,8)] text-xl" : "block p-4 text-xl hover:text-[rgb(129,196,8)]"
        }
        onClick={toggleMobileMenu}
      >
        Shop
      </NavLink>
      <NavLink
        to="/pages"
        className={({ isActive }) =>
          isActive ? "block p-4 text-[rgb(129,196,8)] text-xl" : "block p-4 text-xl hover:text-[rgb(129,196,8)]"
        }
        onClick={toggleMobileMenu}
      >
        Pages
      </NavLink>
    </div>
  );
};

export default MobileMenu;
