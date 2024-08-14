import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout'
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Pages from "./Pages/Pages"
import Contact from "./Pages/Contact"

import Level from "./Pages/SidebarPages/Level"
import OrderStatus from "./Pages/SidebarPages/OrderStatus"
import Overview from "./Pages/SidebarPages/Overview"
import Profile from "./Pages/SidebarPages/Profile"
import PurchaseHistory from "./Pages/SidebarPages/PurchaseHistory"
import Wallet from "./Pages/SidebarPages/Wallet"

import Login from "./Pages/Login"
import Cart from "./Components/NavbarComponents/Cart"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
             <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop/:category" element={<Shop/>}/>
                <Route path="/pages" element={<Pages/>}/>
                <Route path="/contact" element={<Contact/>}/>

                {/*  */}

                <Route path='/level' element={<Level/>}/>
                
                <Route path='/order-status' element={<OrderStatus/>}/>
                <Route path='/overview' element={<Overview/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/purchases' element={<PurchaseHistory/>}/>
                <Route path='/wallet' element={<Wallet/>}/>

                <Route path='/cart' element={<Cart/>}/>
             </Route>
             <Route path='/login' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
      {/* 




 */}
    </>
  )
}

export default App
