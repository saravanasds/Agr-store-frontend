import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout'
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Pages from "./Pages/Pages"
import Contact from "./Pages/Contact"
import OrderStatus from "./Pages/SidebarPages/OrderStatus"
import Overview from "./Pages/SidebarPages/Overview"
import Profile from "./Pages/SidebarPages/Profile"
import PurchaseHistory from "./Pages/SidebarPages/PurchaseHistory"
import Wallet from "./Pages/SidebarPages/Wallet"

import Login from "./Pages/Login"
import Cart from "./Components/NavbarComponents/Cart"
import Register from './Pages/Register'
import ProductDetail from './Pages/ProductDetails'
import ForgotPassword from './Pages/forgotPassword'
import ResetPassword from './Pages/ResetPassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:department" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/verifyRandomString/:randomString" element={<ResetPassword />} />


            <Route path='/order-status' element={<OrderStatus />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/purchases' element={<PurchaseHistory />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/cart' element={<Cart />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
