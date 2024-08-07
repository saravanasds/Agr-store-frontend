import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import { MdLocationPin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="flex  justify-center items-center ">
      <div className="flex w-[85%] h-[100px] justify-between items-center bg-white">
        <h1 className="  text-[rgb(129,196,8)] font-sen text-4xl font-bold py-2 text-bg-[rgb(129,196,8)]">
          AGR STORE
        </h1>
        <div className="  md:w-1/2 text-lg flex justify-center items-center gap-3 text-gray-500 tracking-wider">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block p-2 px-4 text-[rgb(129,196,8)]  text-xl"
                : "block p-2 px-4 hover:text-[rgb(129,196,8)]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "block p-2 px-4 text-[rgb(129,196,8)]  text-xl"
                : "block p-2 px-4 hover:text-[rgb(129,196,8)]"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              isActive
                ? "block p-2 px-4 text-[rgb(129,196,8)]  text-xl"
                : "block p-2 px-4 hover:text-[rgb(129,196,8)]"
            }
          >
            Pages
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block p-2 px-4text-[rgb(129,196,8)] text-xl"
                : "block p-2 px-4 hover:text-[rgb(129,196,8)]"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex justify-end">
          <div className=" flex gap-5 text-4xl text-[rgb(129,196,8)] ">
            <button className="border-[rgb(255,181,36)] border-[1px] text-2xl rounded-full p-2 bg-white ">
              <IoSearch />
            </button>
            <a href="#" className="relative">
              <FaShoppingBag />
              {/* <span className="absolute rounded-circle  flex justify-center items-center">3</span> */}
            </a>
            <a href="#" className="">
              <IoPerson />
            </a>
          </div>
        </div>
                </div>
            </div>

    </>
  );
}

export default Navbar;


