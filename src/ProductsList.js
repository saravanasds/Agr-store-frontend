// ProductsList.js

import Products1 from './Accets/Prods-1.jpg';
import Products2 from './Accets/Prods-2.jpg';
import Products3 from './Accets/Prods-3.jpg';
import Products4 from './Accets/Prods-4.jpg';
import Products5 from './Accets/Prods-5.jpg';
import Products6 from './Accets/Prods-6.jpg';
import Products7 from './Accets/Prods-7.jpg';
import ShopHero from './Accets/HeroSec.jpg'; // Import banner image

// Example products data
const productsData = {
  grocery: [
    { id: 1, image: Products1, title: 'Product 1', description: 'Description of Product 1', price: '10.00', subcategory: 'snacks' },
    { id: 2, image: Products1, title: 'Product 2', description: 'Description of Product 2', price: '20.00', subcategory: 'beverages' },
    { id: 3, image: Products2, title: 'Product 3', description: 'Description of Product 3', price: '30.00', subcategory: 'dairy' },
    { id: 4, image: Products2, title: 'Product 4', description: 'Description of Product 4', price: '40.00', subcategory: 'snacks' },
    { id: 5, image: Products3, title: 'Product 5', description: 'Description of Product 5', price: '50.00', subcategory: 'dairy' },
    { id: 6, image: Products3, title: 'Product 6', description: 'Description of Product 6', price: '60.00', subcategory: 'beverages' },
    { id: 7, image: Products4, title: 'Product 7', description: 'Description of Product 7', price: '70.00', subcategory: 'snacks' }
  ],
  vegetables: [
    { id: 1, image: Products6, title: 'Product 1', description: 'Description of Product 1', price: '10.00', subcategory: 'leafy' },
    { id: 2, image: Products6, title: 'Product 2', description: 'Description of Product 2', price: '20.00', subcategory: 'root' },
    { id: 3, image: Products7, title: 'Product 3', description: 'Description of Product 3', price: '30.00', subcategory: 'fruits' },
    { id: 4, image: Products7, title: 'Product 4', description: 'Description of Product 4', price: '40.00', subcategory: 'leafy' },
    { id: 5, image: Products1, title: 'Product 5', description: 'Description of Product 5', price: '50.00', subcategory: 'root' },
    { id: 6, image: Products1, title: 'Product 6', description: 'Description of Product 6', price: '60.00', subcategory: 'fruits' },
    { id: 7, image: Products2, title: 'Product 7', description: 'Description of Product 7', price: '70.00', subcategory: 'leafy' }
  ],
  cosmetics: [
    { id: 1, image: Products3, title: 'Product 1', description: 'Description of Product 1', price: '10.00', subcategory: 'skincare' },
    { id: 2, image: Products3, title: 'Product 2', description: 'Description of Product 2', price: '20.00', subcategory: 'makeup' },
    { id: 3, image: Products4, title: 'Product 3', description: 'Description of Product 3', price: '30.00', subcategory: 'haircare' },
    { id: 4, image: Products4, title: 'Product 4', description: 'Description of Product 4', price: '40.00', subcategory: 'skincare' },
    { id: 5, image: Products5, title: 'Product 5', description: 'Description of Product 5', price: '50.00', subcategory: 'makeup' },
    { id: 6, image: Products5, title: 'Product 6', description: 'Description of Product 6', price: '60.00', subcategory: 'haircare' },
    { id: 7, image: Products6, title: 'Product 7', description: 'Description of Product 7', price: '70.00', subcategory: 'skincare' }
  ],
  furniture: [
    { id: 1, image: Products7, title: 'Product 1', description: 'Description of Product 1', price: '10.00', subcategory: 'living room' },
    { id: 2, image: Products7, title: 'Product 2', description: 'Description of Product 2', price: '20.00', subcategory: 'bedroom' },
    { id: 3, image: Products1, title: 'Product 3', description: 'Description of Product 3', price: '30.00', subcategory: 'dining room' },
    { id: 4, image: Products1, title: 'Product 4', description: 'Description of Product 4', price: '40.00', subcategory: 'living room' },
    { id: 5, image: Products2, title: 'Product 5', description: 'Description of Product 5', price: '50.00', subcategory: 'bedroom' },
    { id: 6, image: Products2, title: 'Product 6', description: 'Description of Product 6', price: '60.00', subcategory: 'dining room' },
    { id: 7, image: Products3, title: 'Product 7', description: 'Description of Product 7', price: '70.00', subcategory: 'living room' }
  ],
  cloths: [
    { id: 1, image: Products4, title: 'Product 1', description: 'Description of Product 1', price: '10.00', subcategory: 'men' },
    { id: 2, image: Products4, title: 'Product 2', description: 'Description of Product 2', price: '20.00', subcategory: 'women' },
    { id: 3, image: Products5, title: 'Product 3', description: 'Description of Product 3', price: '30.00', subcategory: 'kids' },
    { id: 4, image: Products5, title: 'Product 4', description: 'Description of Product 4', price: '40.00', subcategory: 'men' },
    { id: 5, image: Products6, title: 'Product 5', description: 'Description of Product 5', price: '50.00', subcategory: 'women' },
    { id: 6, image: Products6, title: 'Product 6', description: 'Description of Product 6', price: '60.00', subcategory: 'kids' },
    { id: 7, image: Products7, title: 'Product 7', description: 'Description of Product 7', price: '70.00', subcategory: 'men' }
  ],
  // Add other categories similarly
};

export default productsData;


// Banner data
const banners = {
  grocery: { image: ShopHero, title: 'Grocery' },
  vegetables: { image: ShopHero, title: 'Vegetables' },
  cosmetics: { image: ShopHero, title: 'Cosmetics' },
  furniture: { image: ShopHero, title: 'Furniture' },
  cloths: { image: ShopHero, title: 'Cloths' },
  // Add other categories similarly
};

export { productsData, banners };
