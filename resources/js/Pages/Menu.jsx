import React, { useState } from 'react';
import Navbar from './Navbar';
import Image1 from "./photos/Categories/banner.jpg";
import Image2 from "./photos/Categories/asian-cuisine/Barbecue.jpeg";
import Image3 from "./photos/Categories/italian-cuisine/steck.jpg";
import Banner from './Banner';
import   "./Menu.css";
import veg1 from './photos/Categories/Menu/chili.png';
import veg2 from './photos/Categories/Menu/Garlic.png';
import veg3 from './photos/Categories/Menu/green-pepper.png';
import veg4 from './photos/Categories/Menu/red-pepper.png';
import veg5 from './photos/Categories/Menu/parsely.png';
import veg6 from './photos/Categories/Menu/tomato.png';

import Image4 from "./photos/Categories/italian-cuisine/B.jpg";
import Image5 from "./photos/Categories/italian-cuisine/C.jpg";
import Image6 from "./photos/Categories/italian-cuisine/carbonara.jpg";
import Image7 from "./photos/Categories/italian-cuisine/chiken-pizza.jpg";
import Image8 from "./photos/Categories/italian-cuisine/chiken.jpg";
import Image9 from "./photos/Categories/italian-cuisine/K.jpg";
import Image10 from "./photos/Categories/italian-cuisine/kale-pasta.jpg";
import Image11 from "./photos/Categories/italian-cuisine/lasgna.jpg";
import Image12 from "./photos/Categories/italian-cuisine/pasta-noir.jpg";
import Image13 from "./photos/Categories/italian-cuisine/pasta-pesto.jpg";
import Image14 from "./photos/Categories/italian-cuisine/pasta.jpg";
import Image15 from "./photos/Categories/italian-cuisine/pasta1.jpg";
import Image16 from "./photos/Categories/italian-cuisine/pasta2.jpg";
import Image17 from "./photos/Categories/italian-cuisine/pasta3.jpg";
import Image18 from "./photos/Categories/italian-cuisine/pizza.png";
import Image19 from "./photos/Categories/italian-cuisine/pizza3.jpg";
import Image20 from "./photos/Categories/italian-cuisine/pizza4.jpg";
import Image21 from "./photos/Categories/italian-cuisine/pizza5.jpg";
import Image22 from "./photos/Categories/italian-cuisine/pizza.png";
import Image23 from "./photos/Categories/asian-cuisine/Barbecue.jpeg";
import Image24 from "./photos/Categories/asian-cuisine/Bibimpap.jpeg";
import Image25 from "./photos/Categories/asian-cuisine/Chicken-Pad-Thai.jpeg";
import Image26 from "./photos/Categories/asian-cuisine/jajameong.jpg";
import Image27 from "./photos/Categories/asian-cuisine/jjajang.jpg";
import Image28 from "./photos/Categories/asian-cuisine/Mandu.jpeg";
import Image29 from "./photos/Categories/asian-cuisine/Ramen.jpeg";
import Image30 from "./photos/Categories/asian-cuisine/rice.jpeg";
import Image31 from "./photos/Categories/asian-cuisine/salmon-suchi.jpeg";
import Image32 from "./photos/Categories/asian-cuisine/suchi.jpeg";

const Menu = () => {
  const [search, setSearch] = useState('');

  const menuItems = [
    { id: 1, name: 'Burger', description: 'Burger classique avec fromage', category: 'fast food', image: Image1 },
    { id: 2, name: 'Frites', description: 'Frites croustillantes', category: 'Main Course', image: Image2 },
    { id: 3, name: 'Pasta', description: 'Plat de pâtes à l’italienne', category: 'italian cuisine', image: Image3 },
    { id: 4, name: 'Chocolate Cake', description: 'Gâteau au chocolat', category: 'Desserts', image: Image4 },
    { id: 5, name: 'Ice Cream', description: 'Crème glacée vanille', category: 'Desserts', image: Image5 },
    { id: 6, name: 'Pizza', description: 'Pizza Margherita', category: 'italian cuisine', image: Image6 },
    { id: 7, name: 'Sushi', description: 'Sushi frais', category: 'asian cuisine', image: Image7 },
    { id: 8, name: 'Salad', description: 'Salade César', category: 'Main Course', image: Image8 },
    { id: 9, name: 'Cheesecake', description: 'Cheesecake aux fruits rouges', category: 'Desserts', image: Image9},
    { id: 10, name: 'Steak', description: 'Steak saignant', category: 'Main Course', image: Image10 },
    { id: 11, name: 'Burger', description: 'Burger classique avec fromage', category: 'fast food', image: Image11 },
    { id: 12, name: 'Frites', description: 'Frites croustillantes', category: 'Main Course', image: Image12 },
    { id: 13, name: 'Pasta', description: 'Plat de pâtes à l’italienne', category: 'italian cuisine', image: Image13 },
    { id: 14, name: 'Chocolate Cake', description: 'Gâteau au chocolat', category: 'Desserts', image: Image14 },
    { id: 15, name: 'Ice Cream', description: 'Crème glacée vanille', category: 'Desserts', image: Image15 },
    { id: 16, name: 'Pizza', description: 'Pizza Margherita', category: 'italian cuisine', image: Image16 },
    { id: 17, name: 'Sushi', description: 'Sushi frais', category: 'asian cuisine', image: Image17 },
    { id: 18, name: 'Salad', description: 'Salade César', category: 'Main Course', image: Image18 },
    { id: 19, name: 'Cheesecake', description: 'Cheesecake aux fruits rouges', category: 'Desserts', image: Image19},
    { id: 20, name: 'Steak', description: 'Steak saignant', category: 'Main Course', image: Image20 },
    { id: 21, name: 'Cheesecake', description: 'Cheesecake aux fruits rouges', category: 'Desserts', image: Image21},
    { id: 22, name: 'Steak', description: 'Steak saignant', category: 'Main Course', image: Image22 },
    { id: 23, name: 'Cheesecake', description: 'Cheesecake aux fruits rouges', category: 'Desserts', image: Image23},
    { id: 24, name: 'Steak', description: 'Steak saignant', category: 'Main Course', image: Image24 },
    { id: 25, name: 'Burger', description: 'Burger classique avec fromage', category: 'fast food', image: Image25 },
    { id: 26, name: 'Frites', description: 'Frites croustillantes', category: 'Main Course', image: Image26 },
    { id: 27, name: 'Pasta', description: 'Plat de pâtes à l’italienne', category: 'italian cuisine', image: Image27 },
    { id: 28, name: 'Chocolate Cake', description: 'Gâteau au chocolat', category: 'Desserts', image: Image28 },
    { id: 29, name: 'Ice Cream', description: 'Crème glacée vanille', category: 'Desserts', image: Image29 },
    { id: 30, name: 'Pizza', description: 'Pizza Margherita', category: 'italian cuisine', image: Image30 },
    { id: 31, name: 'Sushi', description: 'Sushi frais', category: 'asian cuisine', image: Image31 },
    { id: 32, name: 'Salad', description: 'Salade César', category: 'Main Course', image: Image32 },
 
  ];

  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu bg-black min-h-screen relative overflow-hidden">
  {/* Floating Vegetables */}

      {/* Navbar */}
      <Navbar shopRoute="/booking" offreRoute="/about" mapRoute="/store" />
      
      {/* Banner */}
      <Banner />

      <div className="container mx-auto p-4 md:p-10 pt-20">
        {/* Search Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a dish or category (e.g., Desserts, Drinks)"
          className="p-2 w-full md:w-1/2 lg:w-1/3 border border-gray-300 rounded-lg mb-6 mx-auto block"
        />
                          <img src={veg1} alt="Veg1" className="animated-veg veg1" />
  <img src={veg2} alt="Veg2" className="animated-veg veg2" />
  <img src={veg3} alt="Spice" className="animated-veg veg3" />
  <img src={veg4} alt="Veg1" className="animated-veg veg4" />
  <img src={veg5} alt="Veg2" className="animated-veg veg5" />
  <img src={veg6} alt="Spice" className="animated-veg veg6" />
  

        {/* Menu Title */}
        <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent font-bold font-dancing-script text-center mb-6">
          Our Menu
        </h1>
 

        {/* Menu Items */}
        <div className="flex flex-wrap justify-center gap-10 p-4"> {/* Flexbox container */}
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col w-48" // Fixed width for cards
          >
            {/* Image */}
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover" // Fixed height for images
            />
            
            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 flex-grow">{item.description}</p>
              <p className="text-sm text-gray-500 italic">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Menu;