import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex h-[100px] justify-between items-center bg-gray-200'>
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
          <button className="mr-5 text-2xl font-bold px-5 py-2 bg-green-600 text-white rounded-md">Profile</button>
        </div>
      </div>
    </>
  )
}

export default Navbar