import React, { useState, useEffect } from 'react';
import Homehero from './Homecomponents/Homehero';
import Homecatagory from './Homecomponents/Homecatagory';
import Homeproducts from './Homecomponents/Homeproducts';
import HomeOffer from './Homecomponents/HomeOffer';
import ClipLoader from 'react-spinners/ClipLoader'; // Import a spinner for loading

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate a 3-second loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        // Display the loading spinner while loading is true
        <div className='flex justify-center items-center h-screen'>
          <ClipLoader
            color='#3498db'  // Blue color
            size={50}        // Size of the spinner
            speedMultiplier={1} // Optional: To control speed
            cssOverride={{
              borderWidth: '5px'  // Adjust thickness of the circle line
            }}
          />
        </div>
      ) : (
        // Display the actual content when loading is false
        <>
          <Homehero />
          <HomeOffer />
          <Homecatagory />
          <Homeproducts />
        </>
      )}
    </div>
  );
}

export default Home;
