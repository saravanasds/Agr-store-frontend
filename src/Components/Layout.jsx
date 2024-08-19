import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Topbar from '../Pages/Homecomponents/Topbar'

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout