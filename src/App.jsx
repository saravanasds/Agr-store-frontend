import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
                <Route path="/shop/:category" element={<Shop/>}/>
                <Route path="/pages" element={<Pages/>}/>
                <Route path="/contact" element={<Contact/>}/>
             </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
