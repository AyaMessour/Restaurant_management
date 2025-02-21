import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/banner.jpg')`, // Remplacez par le chemin de votre image
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu de la bannière */}
      <motion.div
        className="text-center relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Découvrez Nos Saveurs Exquises
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Plongez dans une expérience culinaire unique avec nos plats préparés avec passion.
        </p>
        <Link
          href="/menu"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Voir le Menu
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Banner;