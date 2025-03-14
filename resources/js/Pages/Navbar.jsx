import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "./photos/L.png"; // Ensure the path is correct

function Navbar({ shopRoute, offreRoute, mapRoute }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerText, setBannerText] = useState("Free Shipping On All MOROCCO Orders 500dh+");
  const mobileMenuRef = useRef(null);

  const banners = [
    "Free Shipping On All MOROCCO Orders 500dh+",
    "20% Off On Your First Order!",
    "Try Our New Seasonal Menu!"
  ];

  // Rotate banners every 2 seconds
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerText((prevText) => {
        const currentIndex = banners.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % banners.length;
        return banners[nextIndex];
      });
    }, 2000);

    return () => clearInterval(bannerInterval);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Get current path for highlighting active link
  const currentPath = window.location.pathname;

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Banner */}
      <div className="bg-red-600 text-white  h-19 text-sm py-2 text-center font-sans">
        {bannerText}
      </div>

      {/* Navigation Menu */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? "bg-black shadow-lg py-3" : "bg-transparent py-4"
        } w-full fixed top-10 z-50`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img src={Logo} alt="Logo" className="h-13 w-24" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {[
              { path: "/", label: "Acceuil" },
              { path: "Menu", label: "Menu" },
              { path: shopRoute, label: "Booking Table" },
              { path: "/Offres", label: "Offre" }
            ].map(({ path, label }) => (
              <Link
                key={label}
                href={path}
                className={`text-white font-medium transition duration-300 ${
                  currentPath === path ? "text-red-600 font-bold" : "hover:text-red-600"
                }`}
              >
                {label}
              </Link>
            ))}

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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden mobile-menu fixed top-16 left-0 w-full bg-black duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 px-6">
            {[
              { path: "/", label: "Acceuil" },
              { path: "Menu", label: "Menu" },
              { path: shopRoute, label: "Booking Table" },
              { path: offreRoute, label: "About" },
              { path: mapRoute, label: "Store" },
              { path: "/Contact", label: "Contact" }
            ].map(({ path, label }) => (
              <Link
                key={label}
                href={path}
                className="text-white hover:text-red-600 font-medium transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
