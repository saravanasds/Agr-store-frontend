{/*Second try */}


// import React, { useState } from "react";
// import heroslideimg1 from "./HomeImages/heroslideimg1.png";
// import heroslideimg2 from "./HomeImages/heroslideimg2.jpg";

// const Skin = () => {
//   const [isActive, setActiveTab] = useState(1);

//   const changePara = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   const data = [
//     {
//       id: 1,
//       img: heroslideimg1,
//       h1: "Vegtables",
//       h: "This is a vegetable store",
//       p: "Hello! A vegetable store",
//     },
//     {
//       id: 2,
//       img: heroslideimg2,
//       h1: "Groceries",
//       h: "This is a grocery store",
//       p: "Hello! This is a grocery store",
//     },
//     {
//       id: 3,
//       img: heroslideimg1,
//       h1: "Cosmetics",
//       h: "This is a cosmetics store",
//       p: "Hello! This is a cosmetics store",
//     },
//     {
//       id: 4,
//       img: heroslideimg2,
//       h1: "Electronics",
//       h: "This is an electronics store",
//       p: "Hello! This is an electronics store",
//     },
//     {
//       id: 5,
//       img: heroslideimg1,
//       h1: "Fruits",
//       h: "This is a fruit store",
//       p: "Hello! This is a fruit store",
//     },
//   ];
//   const data1 = [
//     {
//       id: 1,
//       img: heroslideimg1,
//       h1: "Vegtables",
//       h: "This is a vegetable store",
//       p: "Hello! A vegetable store",
//     },
//     {
//       id: 2,
//       img: heroslideimg2,
//       h1: "Groceries",
//       h: "This is a grocery store",
//       p: "Hello! This is a grocery store",
//     },
//     {
//       id: 3,
//       img: heroslideimg1,
//       h1: "Cosmetics",
//       h: "This is a cosmetics store",
//       p: "Hello! This is a cosmetics store",
//     },
//     {
//       id: 4,
//       img: heroslideimg2,
//       h1: "Electronics",
//       h: "This is an electronics store",
//       p: "Hello! This is an electronics store",
//     },
//     {
//       id: 5,
//       img: heroslideimg1,
//       h1: "Fruits",
//       h: "This is a fruit store",
//       p: "Hello! This is a fruit store",
//     },
//   ];

//   const activeData = data.find((d) => d.id === isActive);

//   return (
//     <div className="lg:w-full m-auto min-h-[500px]">
//       <h2 className="text-center font-semibold text-4xl pb-10 tracking-wider text-pink-600">
//         OUR PRODUCTS
//       </h2>
//       <div className="flex gap-20 text-xl justify-center items-center border-2 bg-white tracking-wider">
//         {data.map((d1) => (
//           <h2
//             key={d1.id}
//             className={
//               isActive === d1.id
//                 ? "cursor-pointer text-blue-500 border-b-2 border-blue-500 p-5 font-md"
//                 : "cursor-pointer"
//             }
//             onClick={() => changePara(d1.id)}
//           >
//             {d1.h1}
//           </h2>
//         ))}
//       </div>
//       <div className="w-full min-h-[450px] flex flex-col justify-center items-center gap-4 py-5 tracking-wider leading-relaxed">
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {data.map((d) => (
//             <div key={d.id} className={`w-full ${isActive === d.id ? "block" : "hidden"}`}>
//               <img
//                 className="w-full h-auto rounded-xl"
//                 src={d.img}
//                 alt={d.h1}
//               />
//               <h1 className="font-semibold mt-2 grid grid-col-4 bg-green-300">{d.h}</h1>
//               <p>{d.p}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skin;

{/*finish*/}


import React from 'react';
import heroslideimg1 from "./HomeImages/heroslideimg1.png";
import heroslideimg2 from "./HomeImages/heroslideimg2.jpg";

const products = {
  Groseries: [
    { id:1,name: 'Grapes', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:3,name: 'Apricots', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:2,name: 'Raspberries', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:3,name: 'Apricots', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
  ],
  Vegetables: [
    { id:1,name: 'Grapes', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:2,name: 'Raspberries', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:3,name: 'Apricots', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
  ],
  Fruits: [
    { id:1,name: 'Grapes', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:2,name: 'Raspberries', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:3,name: 'Apricots', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
  ],
  Electronics: [
    { id:1,name: 'Grapes', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:2,name: 'Raspberries', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:3,name: 'Apricots', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
  ],
  Cosmatics: [
    { id:1,name: 'Grapes', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:2,name: 'Raspberries', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:3,name: 'Apricots', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
    { id:4,name: 'Banana', price: '$4.99 / kg', img: heroslideimg2, category: 'Fruits' },
    { id:5,name: 'Oranges', price: '$4.99 / kg', img: heroslideimg1, category: 'Fruits' },
  ],
};

const TabContent = ({ products }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
    {products.map((product, index) => (
      <div key={2} className="relative rounded overflow-hidden shadow-lg border-[1px] border-[rgb(255,181,36)]">
        <img className="w-full h-48 object-cover" src={product.img} alt={product.name} />
        <div className="p-4">
          <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded">
            {product.category}
          </div>
          <h4 className="text-lg font-semibold">{product.name}</h4>
          <p className="text-gray-600">{product.price}</p>
          <p className="mt-2 text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-gray-900 font-bold">{product.price}</p>
            <a href="#" className="border-[rgb(255,181,36)] border-[1px] bg-[rgb(129,196,8)] text-white px-4 py-2 rounded-full text-center hover:bg-blue-600">
              <i className="fas fa-shopping-bag mr-2"></i> Add to cart
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProductTabs = () => {
  const [activeTab, setActiveTab] = React.useState('Groseries');

  return (
    <div className="container mx-auto py-10 w-[100%] min-h-[500px] px-10">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-center lg:text-left mb-4 lg:mb-0">Our Products</h1>
        <ul className="flex flex-wrap justify-center lg:justify-end">
          {Object.keys(products).map((tab) => (
            <li key={tab} className="m-2">
              <button
                className={`px-4 py-2 rounded-full text-gray-600 ${activeTab === tab ? 'bg-[rgb(255,181,36)]' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        <TabContent products={products[activeTab] || []} /> {/* Provide fallback for undefined */}
      </div>
    </div>
  );
};

export default ProductTabs;

