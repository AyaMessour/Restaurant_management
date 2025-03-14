import React from "react";
import { Link } from "@inertiajs/react";
import burger from "./photos/hero-2.png";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component
import Contact from "./Contact";
import Categories from "./Categories";
import Banner from "./Banner";
import Restaurant from "./Restaurant";
import RestaurantServices from "./Services";
import Offres from "./Offres";


function Home({ auth, cartRoute, loginRoute, registerRoute, shopRoute, offreRoute, mapRoute }) {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col bg-black"
    >
      {/* Navbar */}
      <Navbar shopRoute={shopRoute} offreRoute={offreRoute} mapRoute={mapRoute} />

      {/* Hero Section */}
      <section className="py-16 mt-20"> {/* Add margin-top to account for the fixed navbar */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
<img src={burger} className="w-90 rounded-lg shadow-lg animate-rotate-scale-up-normal" alt="Hero" />
{/* Price Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg font-dancing-script"
              >
                <h4 className="text-sm">Only</h4>
                <h4 className="text-xl font-bold">$6.99</h4>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left text-white"
            >
             
              <h4 className="text-7xl font-dancing-script bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent mx-auto">
                New Burger
              </h4>

 
              <h2 className="text-2xl mt-2 font-poppins text-center lg:text-left bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                With Double MEAT
              </h2>
              <p className="mt-4 text-gray-300 font-sans text-center lg:text-left">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in iaculis pretium at magna mauris ipsum primis rhoncus feugiat.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 font-poppins"
              >
                Order Now
              </Link>
            </motion.div>

          </div>
        </div>
        <Categories />
        {/* <Banner /> */}
        <Restaurant/>
    
        <Contact />
        <RestaurantServices></RestaurantServices>
        <Footer />
      </section>
    </motion.div>
    </>
  );
}

export default Home;
