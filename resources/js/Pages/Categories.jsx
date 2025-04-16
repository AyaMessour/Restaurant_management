import React from 'react';
import { Link } from '@inertiajs/react';
import image1 from "./photos/categories/italian-cuisine/B.jpg";
import image2 from "./photos/categories/asian-cuisine/Z.jpg";
import image3 from "./photos/categories/mexican-food/C.jpg";

const categories = [
  {
    id: 1,
    name: 'Asian Cuisine',
    image: image2,
    description: 'Découvrez les saveurs exotiques de la cuisine asiatique.',
    link: '/Menu',
  },
  {
    id: 2,
    name: 'Italian Cuisine',
    image: image1,
    description: 'Savourez les délices authentiques de la cuisine italienne.',
    link: '/Menu',
  },
  {
    id: 3,
    name: 'Mexican Cuisine',
    image: image3,
    description: 'Plongez dans les saveurs épicées de la cuisine mexicaine.',
    link: '/Menu',
  },
];

const Categories = () => {
  return (
    <section className="w-full bg-black py-20 px-6">
      <h2 className="text-5xl md:text-6xl font-dancing-script font-bold text-center text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text mb-16">
        Explore Our Cuisines
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(239,68,68,0.6)] transform hover:scale-[1.03] transition-all duration-300"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-72 object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white p-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 animate-fade-up">
                {category.name}
              </h3>
              <p className="text-sm md:text-base mb-4">{category.description}</p>
              <Link
                href={category.link}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Discover More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
