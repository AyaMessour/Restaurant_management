import React from "react";
import { Link } from "@inertiajs/react";
import logo from "./photos/t.png";
import payImage from "./photos/pay.png";

export default function Footer({ home }) {
  return (
    <footer className="bg-gradient-to-r from-stone-900 to-stone-900 text-white">
      <div className="container mx-auto px-5">
        {/* Footer Top */}
        {!home && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-lg font-bold text-white">Company</h2>
              <p className="mt-2 text-white">
                Find a location nearest you. See{" "}
                <Link href="/map" className="underline hover:text-red-600">
                  Our Stores
                </Link>
              </p>
              <p className="font-bold mt-2 text-white">+212-766989130</p>
              <p className="text-white">ayamessour35@gmail.com</p>
            </div>

            {/* Useful Links */}
            <div>
              <h2 className="text-lg font-bold text-white">Useful links</h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    New Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Bundle & Save
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Online Gift Card
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h2 className="text-lg font-bold text-white">Information</h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Start a Return
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Shipping FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-white/50 pt-5">
          <p className="text-white">© 2025 Lily's Coffee. All rights reserved.</p>
          <img src={logo} width="150" alt="Lily's Coffee Logo" />

          {/* Payment Methods */}
          <div className="flex flex-col items-center space-y-5 mt-3 md:mt-0">
            <img src={payImage} width="200" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
}
