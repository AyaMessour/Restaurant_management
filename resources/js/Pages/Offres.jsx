import Navbar from './Navbar';
import Manner from "./Manner.jsx";
import Footer from './Footer';
import { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';

import offre3 from './photos/Categories/offre-3.jpg';
import offre4 from './photos/Categories/offre-4.jpg';
import offre5 from './photos/Categories/offre-5.jpg';
import offre6 from './photos/Categories/offre-6.jpg';
import offre7 from './photos/Categories/offre-7.jpg';
import offre8 from './photos/Categories/offre-8.jpg';
import offre9 from './photos/Categories/offre-9.jpg';
import offre12 from './photos/Categories/offre-12.jpg';
import offre17 from './photos/Categories/offre-17.jpg';

export default function Offres() {
  const [globalTime, setGlobalTime] = useState(24 * 60 * 60); // 24h countdown
  const [loading, setLoading] = useState(false); // Gestion de l'état de chargement

  const offres = [
    { id: 22, titre: "XXL Burger", description: "XXL double chesse burger.", prixOriginal: "86 DH", prixPromo: "79 DH", image: offre3 },
    { id: 23, titre: "Burger Royal Combo", description: "Un délicieux burger avec frites et boisson offerte.", prixOriginal: "120 DH", prixPromo: "99 DH", image: offre4 },
    { id: 24, titre: "Burger Spécial Chef", description: "Grande pizza 4 saisons + 1 boisson offerte.", prixOriginal: "150 DH", prixPromo: "129 DH", image: offre5 },
    { id: 25, titre: "Burger Gourmand Sucré", description: "Tarte au chocolat + café offert.", prixOriginal: "99 DH", prixPromo: "89 DH", image: offre6 },
    { id: 26, titre: "Shawarma Familiale", description: "Grande schawrma 3 saisons + 1 boisson offerte.", prixOriginal: "150 DH", prixPromo: "129 DH", image: offre7 },
    { id: 27, titre: "Chicken Pizza", description: "Chicken pizza with cheese and olives + soda offert.", prixOriginal: "50 DH", prixPromo: "39 DH", image: offre8 },
    { id: 28, titre: "Menu Spécial pizza", description: "Un délicieux pizza avec frites et boisson offerte.", prixOriginal: "120 DH", prixPromo: "99 DH", image: offre9 },
    { id: 29, titre: "Beef Shawarma", description: "Grande beef shawarma saisons + 1 boisson offerte.", prixOriginal: "150 DH", prixPromo: "129 DH", image: offre12 },
    { id: 30, titre: "Pizza Familiale", description: "Tarte au chocolat + café offert.", prixOriginal: "50 DH", prixPromo: "39 DH", image: offre17 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const handleAddToCart = (productId) => {
    setLoading(true);
    Inertia.post('/cart/add', { product_id: productId, quantity: 1 }, {
      onFinish: () => setLoading(false),
      onError: () => {
        setLoading(false);
        alert('Échec de l\'ajout au panier. Veuillez réessayer.');
      },
    });
  };

  return (
    <>
      <Manner />
      <Navbar />

      {/* 🔔 Global Alarme */}
      <div className="bg-red-600 text-white text-center py-4 font-bold">
        {globalTime > 0 
          ? `⚡ Offre Flash : Expire dans ${formatTime(globalTime)} ⚡`
          : "⚠️ Offre Flash Expirée"}
      </div>

      {/* Offers Grid */}
      <div className="bg-black text-white py-12">
        <h2 className="text-3xl font-bold text-center mb-8">🔥 Offres Spéciales 🔥</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4 md:px-12">
          {offres.map((offre) => (
            <div
              key={offre.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img src={offre.image} alt={offre.titre} className="w-full h-66 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{offre.titre}</h3>
                <p className="text-gray-300 text-sm mt-2">{offre.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="line-through text-gray-400">{offre.prixOriginal}</span>
                  <span className="text-green-400 text-lg font-bold">{offre.prixPromo}</span>
                </div>
                <button 
                  onClick={() => handleAddToCart(offre.id)}
                  disabled={loading}
                  className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300"
                >
                  {loading ? 'Ajout en cours...' : 'Ajouter au panier'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
