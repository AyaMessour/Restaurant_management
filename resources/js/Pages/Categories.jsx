import React from 'react';
import { Link } from '@inertiajs/react';
import image1 from "./photos/categories/italian-cuisine/B.jpg"; // Assurez-vous que le chemin est correct
import image2 from "./photos/categories/asian-cuisine/A.jpg";  // Assurez-vous que le chemin est correct
import image3 from "./photos/categories/mexican-food/C.jpg"; // Assurez-vous que le chemin est correct

const Categories = () => {
  // Données des catégories
  const categories = [
    {
      id: 1,
      name: 'Asian Cuisine',
      image: image2, // Utilisation de l'image importée
      description: 'Découvrez les saveurs exotiques de la cuisine asiatique.',
      link: '/asian-cuisine', // Lien vers la page de la catégorie
    },
    {
      id: 2,
      name: 'Italian Cuisine',
      image: image1, // Utilisation de l'image importée
      description: 'Savourez les délices authentiques de la cuisine italienne.',
      link: '/italian-cuisine',
    },
    {
      id: 3,
      name: 'Mexican Cuisine',
      image: image3, // Utilisation de l'image importée
      description: 'Plongez dans les saveurs épicées de la cuisine mexicaine.',
      link: '/mexican-cuisine',
    },
  ];

  return (
    <div className="bg-stone-900 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Explore Our Cuisines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative group overflow-hidden rounded-lg flex flex-col">
              {/* Image avec hauteur fixe */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white text-center px-4 mb-4 text-sm md:text-base">{category.description}</p>
                <Link
                  href={category.link}
                  className="inline-block bg-red-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-red-700 transition duration-300 text-sm md:text-base"
                >
                  Discover More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;