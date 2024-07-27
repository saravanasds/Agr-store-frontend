import React from 'react'
import { BrowserRouter,Router, Route, Routes,Link, NavLink } from 'react-router-dom'

import Layout from './Components/Layout'

import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Pages from "./Pages/Pages"
import Contact from "./Pages/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
             <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/pages" element={<Pages/>}/>
                <Route path="/contact" element={<Contact/>}/>
             </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App