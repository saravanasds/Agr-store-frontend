import React from 'react'
import Homehero from './Homecomponents/Homehero'
import Homecatagory from './Homecomponents/Homecatagory'
import Homeproducts from './Homecomponents/Homeproducts'
import HomeOffer from './Homecomponents/HomeOffer'
// import HomeDiscount from './Homecomponents/HomeDiscount'
// import HomeBanner from './Homecomponents/HomeBanner'
// import HomeBenefits from './Homecomponents/HomeBenefits'

function Home() {
  return (
  
    <div>
      <Homehero/>
      <HomeOffer/>
      <Homecatagory/>
      <Homeproducts/>
      {/* <HomeDiscount/>
      <HomeBanner/>
      <HomeBenefits/> */}
    </div>
  )
}

export default Home