import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'; // Inertia.js for form submission
import Navbar from './Navbar';
import Footer from './Footer';

const CheckoutPage = ({ cartItems, total }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // For handling error messages

  const validPromoCodes = {
    "PROMO10": 10, // 10%
    "PROMO20": 20  // 20%
  };

  const handleApplyPromo = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
      setError(null); // Clear error if promo code is valid
    } else {
      setDiscount(0);
      setError("Invalid promo code! Please try again.");
    }
  };

  const discountedTotal = total - (total * discount) / 100;

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    const orderData = {
      cartItems,
      total: discountedTotal,
      promoCode,
      discount,
      name,
      email,
      phone,
      address,
    };

    // Post data to Laravel backend via Inertia
    Inertia.post('/checkout', orderData, {
      onSuccess: () => {
        alert('Your order has been placed successfully. Pay on delivery!');
        setLoading(false);
      },
      onError: (error) => {
        setError(error.response?.data?.message || 'Something went wrong, please try again.');
        setLoading(false);
      }
    });
  };

  return (
    <div className="checkout-page bg-gray-100 min-h-screen">
      <Navbar shopRoute="/menu" offreRoute="/about" mapRoute="/store" />

      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
        <h1 className="text-4xl text-center font-bold mb-6">Checkout</h1>

        {/* Error Message */}
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={handleCheckout} className="checkout-form space-y-6">
          {/* Contact Information */}
          <div className="form-group">
            <label htmlFor="name" className="block text-lg">Prénom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Other form fields for email, phone, etc. */}
          
          <div className="order-summary mt-6">
            <h3 className="text-xl font-semibold">Résumé de la commande</h3>
            <div className="order-items">
              {cartItems.map((item, index) => (
                <div key={index} className="order-item flex justify-between">
                  <div className="flex items-center">
                    <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover" />
                    <p className="ml-4">{item.product.name} - {item.quantity} x {item.product.price} MAD</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4">Sous-total: {total} MAD</p>
            {discount > 0 && <p className="text-green-500">Réduction appliquée: {discount}%</p>}
            <p className="font-bold">Total: {discountedTotal} MAD</p>
          </div>

          {/* Final Submit Button */}
          <button
            type="submit"
            className={`submit-btn bg-green-500 text-white py-3 px-6 rounded-lg w-full ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Traitement...' : 'Confirmer la commande'}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
