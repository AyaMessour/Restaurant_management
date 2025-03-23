import Navbar from './Navbar';
import offre1 from './photos/Categories/offre-1.jpg';
import offre2 from './photos/Categories/offre-2.jpg';
import offre3 from './photos/Categories/offre-3.jpg';

import offre4 from './photos/Categories/offre-4.jpg';
import offre5 from './photos/Categories/offre-5.jpg';
import offre6 from './photos/Categories/offre-6.jpg';
import offre7 from './photos/Categories/offre-7.jpg';
import offre8 from './photos/Categories/offre-8.jpg';
import offre9 from './photos/Categories/offre-9.jpg';
import offre10 from './photos/Categories/offre-10.jpg';
import offre11 from './photos/Categories/offre-11.jpg';
import offre12 from './photos/Categories/offre-12.jpg';
import offre17 from './photos/Categories/offre-17.jpg';

import Manner from "./Manner.jsx";
import Footer from './Footer';

import { useEffect, useState } from "react";


export default function Offres() {
  const [globalTime, setGlobalTime] = useState(24 * 60 * 60); // 24h countdown

  const offres = [
    {
      id: 2,
      titre: "Burger Dessert",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre3,
    },
    {
      id: 3,
      titre: "Burger Royal Combo",
      description: "Un délicieux burger avec frites et boisson offerte.",
      prixOriginal: "120 DH",
      prixPromo: "99 DH",
      image: offre4,
    },
    {
      id: 4,
      titre: "Burger Spécial Chef",
      description: "Grande pizza 4 saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre5,
    },
    {
      id: 5,
      titre: "Burger Gourmand Sucré",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre6,
    },
    {
      id: 6,
      titre: "Shawarma Familiale",
      description: "Grande schawrma 3 saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre7,
    },
    {
      id: 7,
      titre: "Chicken Pizza",
      description: "Chiken pizza with cheese and olives + soda offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre8,
    },
    {
      id: 8,
      titre: "Menu Spécial pizza",
      description: "Un délicieux pizza avec frites et boisson offerte.",
      prixOriginal: "120 DH",
      prixPromo: "99 DH",
      image: offre9,
    },
    {
      id: 9,
      titre: "Beef Shawarma",
      description: "Grande beef shawarma saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre12,
    },
    {
      id: 10,
      titre: "Pizza Familiale",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre17,
    },
    // ... other offers
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
              <img src={offre.image} alt={offre.titre} className="w-66 h-auto object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{offre.titre}</h3>
                <p className="text-gray-300 text-sm mt-2">{offre.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="line-through text-gray-400">{offre.prixOriginal}</span>
                  <span className="text-green-400 text-lg font-bold">{offre.prixPromo}</span>
                </div>
                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300">
                  Ajouter au panier
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
