import React from 'react'
import Homehero from './Homecomponents/Homehero'
import Homecatagory from './Homecomponents/Homecatagory'
import Homeproducts from './Homecomponents/Homeproducts'
import HomeDiscount from './Homecomponents/HomeDiscount'

function Home() {
  return (
  
    <div>
      <Homehero/>
      <Homecatagory/>
      <Homeproducts/>
      <HomeDiscount/>
    </div>
  )
}

export default Home