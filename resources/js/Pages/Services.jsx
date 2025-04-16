import React from "react";
import {
  FaUtensils,
  FaConciergeBell,
  FaBiking,
  FaLaptop,
  FaChild,
  FaMugHot,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaUtensils />,
    title: "Service à table",
    description: "Profitez d'une expérience gastronomique avec un service impeccable.",
  },
  {
    id: 2,
    icon: <FaConciergeBell />,
    title: "Buffet à volonté",
    description: "Un large choix de plats savoureux à déguster librement.",
  },
  {
    id: 3,
    icon: <FaBiking />,
    title: "Livraison à domicile",
    description: "Commandez et recevez votre repas rapidement où que vous soyez.",
  },
  {
    id: 4,
    icon: <FaLaptop />,
    title: "Commande en ligne",
    description: "Commandez facilement via notre site ou notre application mobile.",
  },
  {
    id: 5,
    icon: <FaChild />,
    title: "Espace familial",
    description: "Un cadre agréable pour les familles avec des menus adaptés aux enfants.",
  },
  {
    id: 6,
    icon: <FaMugHot />,
    title: "Dégustation de thés et cafés",
    description: "Découvrez une sélection raffinée de thés et cafés du monde entier.",
  },
];

const RestaurantServices = () => {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-12">
      <h2 className="text-4xl md:text-6xl text-center font-dancing-script font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent mb-20">
        Nos Services
      </h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-white/10 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 text-white text-center"
          >
            <div className="text-5xl text-yellow-400 mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantServices;
