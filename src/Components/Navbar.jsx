import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

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

{
  /* <div class="container px-0">
                <nav class="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="index.html" class="navbar-brand"><h1 class="text-primary display-6">Fruitables</h1></a>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">
                            <a href="index.html" class="nav-item nav-link active">Home</a>
                            <a href="shop.html" class="nav-item nav-link">Shop</a>
                            <a href="shop-detail.html" class="nav-item nav-link">Shop Detail</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="cart.html" class="dropdown-item">Cart</a>
                                    <a href="chackout.html" class="dropdown-item">Chackout</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <div class="d-flex m-3 me-0">
                            <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search text-primary"></i></button>
                            <a href="#" class="position-relative me-4 my-auto">
                                <i class="fa fa-shopping-bag fa-2x"></i>
                                <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style="top: -5px; left: 15px; height: 20px; min-width: 20px;">3</span>
                            </a>
                            <a href="#" class="my-auto">
                                <i class="fas fa-user fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div> */
}
