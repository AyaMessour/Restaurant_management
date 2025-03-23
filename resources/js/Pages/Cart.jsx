import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'; // Import Inertia
import Navbar from './Navbar';
import Footer from './Footer';

const Cart = ({ cartItems }) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);

  const validPromoCodes = {
    "PROMO10": 10, // 10%
    "PROMO20": 20  // 20%
  };

  const handleRemove = (id) => {
    Inertia.delete(`/cart/${id}`, {
      onSuccess: () => console.log('Item removed successfully'),
      onError: (error) => console.error('Failed to remove item', error),
    });
  };

  const handleApplyPromo = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
    } else {
      setDiscount(0);
      alert("Code promo invalide !");
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.product.newPrice * item.quantity, 0);
  const discountedTotal = total - (total * discount) / 100;

  const handleCheckout = () => {
    Inertia.visit('/checkout', {
      method: 'get',
      data: {
        cartItems: cartItems,
        total: discountedTotal,
        promoCode: promoCode,
        discount: discount
      },
    });
  };

  return (
    <div className="cart bg-black min-h-screen text-white">
      <Navbar shopRoute="/menu" offreRoute="/about" mapRoute="/store" />

      <div className="container  mx-auto p-6">
        <h1 className="text-5xl text-center mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1 ml-4">
                  <p className="text-lg font-semibold">{item.product.name}</p>
                  <p className="text-sm text-gray-400">{item.product.description}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg font-semibold">${item.product.newPrice}</span>
                  <span className="text-gray-400 ml-4">x{item.quantity}</span>
                  <button onClick={() => handleRemove(item.id)} className="ml-4 text-red-500">Remove</button>
                </div>
              </div>
            ))}

            {/* Total et Code Promo */}
            <div className="bg-gray-900 p-6 rounded-lg mt-6">
              <h2 className="text-xl font-semibold">Total: <span className="text-yellow-400">${discountedTotal.toFixed(2)}</span></h2>
              {discount > 0 && <p className="text-green-400">Remise appliquée: {discount}%</p>}

              <div className="mt-4 flex">
                <input 
                  type="text" 
                  value={promoCode} 
                  onChange={(e) => setPromoCode(e.target.value)} 
                  placeholder="Enter promo code" 
                  className="p-2 rounded-l bg-gray-800 text-white"
                />
                <button 
                  onClick={handleApplyPromo} 
                  className="bg-yellow-500 text-black px-4 py-2 rounded-r">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 flex justify-center">
              <button 
                onClick={handleCheckout} 
                className={`bg-green-500 text-white py-2 px-6 rounded-lg ${loading ? 'opacity-50' : ''}`} 
                disabled={loading}>
                {loading ? 'Processing...' : 'confirmer'}
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
