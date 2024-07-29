import React from 'react'
import { NavLink } from 'react-router-dom'

import { MdLocationPin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className='relative'>
            <div className=''>
            <div className='container w-[75%] h-[50px] p-4 m-auto rounded-2xl flex justify-between items-center bg-[#81C408]'>
                <div className='flex  gap-4'>
                <div className='flex items-center gap-2'>
                  <MdLocationPin className='text-white'/>
                    <div>hello</div>
                </div>
                <div className='flex items-center gap-2'>
                  <MdLocationPin className='text-white'/>
                    <div>hello</div>
                </div>
                </div>
                {/*  */}
                <div className='flex items-center gap-2 text-white'>
                    <div>hello /</div>
                    <div>hello /</div>
                    <div>hello </div>
                </div>
            </div>
            </div>
            {/*  */}
            <div className='flex h-[100px] bg-gray-200 sticky top-[50px]'>
                <div className='flex justify-between items-center w-[75%] m-auto'>
                <h1 className=' ml-5 text-2xl font-bold px-5 py-2'>Logo</h1>
        <div className='  md:w-1/2 flex justify-evenly'>

          <NavLink to="/" className={({ isActive }) =>
                isActive ? 'block p-2 px-4 text-blue-600 bg-blue-200 rounded-lg font-bold text-xl'
                  : 'block p-2 hover:text-blue-400'}>
          Home</NavLink>
          
          <NavLink to="/shop" className={({ isActive }) =>
                isActive ? 'block p-2 px-4 text-blue-600 bg-blue-200 rounded-lg font-bold text-xl'
                  : 'block p-2 hover:text-blue-400'}
          >Shop</NavLink>
          <NavLink to="/pages" className={({ isActive }) =>
                isActive ? 'block p-2 px-4 text-blue-600 bg-blue-200 rounded-lg font-bold text-xl'
                  : 'block p-2 hover:text-blue-400'}>
          Pages</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
                isActive ? 'block p-2 px-4 text-blue-600 bg-blue-200 rounded-lg font-bold text-xl'
                  : 'block p-2 hover:text-blue-400'}>
          Contact</NavLink>
        </div>

        <div className='flex justify-end'>
          <button className="mr-5 text-2xl font-bold px-5 py-2 bg-white border-2 hover:border-orange-500 text-white rounded-full"><IoSearchOutline className='text-black'/></button>
          <button className="mr-5 text-2xl font-bold px-5 py-2 text-green-400"><FaShoppingCart className=''/></button>
          <button className="mr-5 text-2xl font-bold px-5 py-2 text-green-400 "><CgProfile className=''/></button>
        </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Navbar