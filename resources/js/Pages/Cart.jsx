import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = ({ cartItems }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);

  const validPromoCodes = {
    PROMO10: 10, // 10% discount
    PROMO20: 20, // 20% discount
  };

  const handleRemove = (id) => {
    Inertia.delete(`/cart/${id}`);
  };

  const handleIncrease = (id) => {
    Inertia.patch(`/cart/increase/${id}`);
  };

  const handleDecrease = (id) => {
    Inertia.patch(`/cart/decrease/${id}`);
  };

  const handleApplyPromo = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
    } else {
      setDiscount(0);
      alert("Invalid promo code!");
    }
  };

  const handleCheckout = () => {
    setLoading(true);
    Inertia.visit('/checkout', {
      onFinish: () => setLoading(false)
    });
  };

  const total = cartItems.reduce((sum, item) => sum + item.product.newPrice * item.quantity, 0);
  const discountedTotal = total - (total * discount) / 100;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar shopRoute="/menu" offreRoute="/about" mapRoute="/store" />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Your Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-gray-800 rounded-xl shadow-md p-8 text-center">
              <p className="text-gray-300 mb-4">Your cart is currently empty.</p>
              <a 
                href="/menu" 
                className="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
              >
                Browse Products
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-gray-800 rounded-xl shadow-sm overflow-hidden flex flex-col sm:flex-row border border-gray-700"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full sm:w-32 h-32 object-cover"
                    />
                    <div className="flex-grow p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-lg font-semibold text-white">{item.product.name}</h2>
                          <p className="text-sm text-gray-400 line-clamp-2">{item.product.description}</p>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-500 hover:text-red-400"
                          aria-label="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-gray-600 rounded-lg">
                          <button
                            onClick={() => handleDecrease(item.id)}
                            className="px-3 py-1 text-white hover:bg-gray-700 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-3 text-gray-300">{item.quantity}</span>
                          <button
                            onClick={() => handleIncrease(item.id)}
                            className="px-3 py-1 text-white hover:bg-gray-700 transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-semibold text-yellow-400">
                          ${(item.product.newPrice * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-gray-800 rounded-xl shadow-sm p-6 h-fit sticky top-4 border border-gray-700">
                <h2 className="text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-300 bg-clip-text text-transparent mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({discount}%)</span>
                      <span>-${(total * discount / 100).toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-yellow-400">${discountedTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="promo-code" className="block text-sm font-medium text-gray-300 mb-2">
                    Promo Code
                  </label>
                  <div className="flex">
                    <input
                      id="promo-code"
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-grow w-40 bg-gray-700 border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-r-lg transition-colors font-medium"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className={`w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center ${
                    loading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;