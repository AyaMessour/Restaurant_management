import React from "react";
import PropTypes from "prop-types";
import {
  FaUtensils,
  FaConciergeBell,
  FaBiking,
  FaLaptop,
  FaChild,
  FaMugHot,
} from "react-icons/fa";

// Services data with unique IDs
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

// Reusable styles
const cardStyles =
  "bg-gradient-to-r from-neutral-200 to-slate-200 p-6 shadow-lg rounded-2xl flex flex-col items-center text-white hover:scale-105 hover:shadow-2xl hover:from-red-800 hover:to-red-600 transition-transform duration-300";

const RestaurantServices = () => {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-12 text-center">
      <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent font-bold font-dancing-script text-center mb-12">
        Nos Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={cardStyles}
            role="article"
            aria-label={`Service: ${service.title}`}
          >
            <div className="text-yellow-400 text-5xl mb-4" aria-hidden="true">
              {service.icon}
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-black text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes for better type checking
RestaurantServices.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default RestaurantServices;