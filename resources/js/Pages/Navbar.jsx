import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa"; // Icons for the mobile menu and user/cart
import Logo from "./photos/L.png"; // Ensure this path is correct

function Navbar({ shopRoute, offreRoute, mapRoute }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect scrolling to apply background and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-sm py-2 text-center font-sans">
        Free Shipping On All MOROCCO Orders 500dh+
      </div>

      {/* Navigation Menu */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-black shadow-lg py-3" // Dark background with shadow when scrolled
            : "bg-transparent py-4"
        } w-full fixed top-10 z-50`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img src={Logo} alt="Logo" className="h-13 w-24" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-red-600 font-medium transition duration-300">
              Acceuil
            </Link>
            <Link href="#menu" className="text-white hover:text-red-600 font-medium transition duration-300">
              Menu
            </Link>
            <Link href={shopRoute} className="text-white hover:text-red-600 font-medium transition duration-300">
              Booking Table
            </Link>
            <Link href={offreRoute} className="text-white hover:text-red-600 font-medium transition duration-300">
              About
            </Link>
            <Link href={mapRoute} className="text-white hover:text-red-600 font-medium transition duration-300">
              Store
            </Link>
            <Link href="/Contact" className="text-white hover:text-red-600 font-medium transition duration-300">
              Contact
            </Link>

            {/* Cart and User Icons */}
            <div className="flex space-x-6 ml-8">
              <Link href="/cart" className="text-white hover:text-red-600 transition duration-300">
                <FaShoppingCart size={20} />
              </Link>
              <Link href="/profile" className="text-white hover:text-red-600 transition duration-300">
                <FaUser size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-6 lg:hidden">
            <Link href="/cart" className="text-white hover:text-red-600 transition duration-300">
              <FaShoppingCart size={20} />
            </Link>
            <Link href="/profile" className="text-white hover:text-red-600 transition duration-300">
              <FaUser size={20} />
            </Link>
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 bg-opacity-95 backdrop-blur-md">
            <div className="flex flex-col space-y-4 py-4 px-6">
              <Link href="/" className="text-white hover:text-red-600 font-medium transition duration-300" onClick={toggleMobileMenu}>
                Acceuil
              </Link>
              <Link href="#menu" className="text-white hover:text-red-600 font-medium transition duration-300" onClick={toggleMobileMenu}>
                Menu
              </Link>
              <Link href={shopRoute} className="text-white hover:text-red-600 font-medium transition duration-300" onClick={toggleMobileMenu}>
                Booking Table
              </Link>
              <Link href={offreRoute} className="text-white hover:text-red-600 font-medium transition duration-300" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link href={mapRoute} className="text-white hover:text-red-600 font-medium transition duration-300" onClick={toggleMobileMenu}>
                Store
              </Link>
              <Link href="/Contact" className="text-white hover:text-red-600 font-medium transition duration-300" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
