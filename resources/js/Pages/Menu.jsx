import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'; // Import Inertia
import { debounce } from 'lodash'; // Correct import for debounce
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import "./Menu.css";

// Import images
import Image1 from "./photos/Categories/banner.jpg";
import Image2 from "./photos/Categories/asian-cuisine/Barbecue.jpeg";
import Image3 from "./photos/Categories/italian-cuisine/steck.jpg";
import Image4 from "./photos/Categories/italian-cuisine/B.jpg";
import Image5 from "./photos/Categories/italian-cuisine/C.jpg";
import Image6 from "./photos/Categories/italian-cuisine/carbonara.jpg";
import Image7 from "./photos/Categories/italian-cuisine/chiken-pizza.jpg";
import Image8 from "./photos/Categories/italian-cuisine/chiken.jpg";
import Image9 from "./photos/Categories/italian-cuisine/K.jpg";
import Image10 from "./photos/Categories/italian-cuisine/pasta-noir.jpg";
import Image11 from "./photos/Categories/italian-cuisine/pasta-pesto.jpg";
import Image12 from "./photos/Categories/italian-cuisine/pasta1.jpg";
import Image13 from "./photos/Categories/italian-cuisine/pasta3.jpg";
import Image14 from "./photos/Categories/italian-cuisine/pizza7.jpg";
import Image15 from "./photos/Categories/italian-cuisine/pizza4.jpg";
import Image16 from "./photos/Categories/italian-cuisine/pizza5.jpg";
import Image17 from "./photos/Categories/asian-cuisine/Bibimpap.jpeg";
import Image18 from "./photos/Categories/asian-cuisine/jajameong.jpg";
import Image19 from "./photos/Categories/asian-cuisine/jjajang.jpg";
import Image20 from "./photos/Categories/asian-cuisine/Mandu.jpeg";
import Image21 from "./photos/Categories/asian-cuisine/salmon-suchi.jpeg";

const Menu = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for "Add to Cart"



    const menuItems = [
      { id: 1, name: 'Burger', description: 'Burger classique avec fromage', category: 'fast food', image: Image1, oldPrice: 5, newPrice: 6 },
      { id: 2, name: 'Fried chicken wings', description: 'Fried chicken wings with sauce', category: 'Thai-cuisine', image: Image2, oldPrice: 8, newPrice: 9 },
      { id: 3, name: 'Steak', description: 'A juicy seared steak with sauce and herbs', category: 'Italian cuisine', image: Image3, oldPrice: 15, newPrice: 18 },
      { id: 4, name: 'Lasagna', description: 'Juicy classic Italian lasagna', category: 'Italian-food', image: Image4, oldPrice: 12, newPrice: 13 },
      { id: 5, name: 'Spaghetti Bolognese', description: 'Pasta with meat sauce and parmesan', category: 'Italian-food', image: Image5, oldPrice: 10, newPrice: 12 },
      { id: 6, name: 'Spaghetti Carbonara', description: 'Creamy pasta with mushrooms', category: 'Italian cuisine', image: Image6, oldPrice: 11, newPrice: 13 },
      { id: 7, name: 'Grilled Meat Platter', description: 'Skewered meats served with vegetables', category: 'Asian-food', image: Image7, oldPrice: 14, newPrice: 16 },
      { id: 8, name: 'Grilled chicken with Salad', description: 'Salade César', category: 'Main Course', image: Image8, oldPrice: 7, newPrice: 9 },
      { id: 9, name: 'Pasta Pesto', description: 'Creamy green pasta pesto', category: 'Italian-food', image: Image9, oldPrice: 9, newPrice: 11 },
      { id: 10, name: 'Black Pasta with Salmon', description: 'Seafood black pasta', category: 'Italian-food', image: Image10, oldPrice: 16, newPrice: 18 },
      { id: 11, name: 'Ravioli', description: 'Plat de pâtes à l’italienne', category: 'Italian cuisine', image: Image11, oldPrice: 14, newPrice: 15 },
      { id: 12, name: 'Seafood Noodles', description: 'Hot noodles with shrimp and chili', category: 'Asian-food', image: Image12, oldPrice: 10, newPrice: 12 },
      { id: 13, name: 'Chicken Salad', description: 'Salad with veggies and grilled chicken', category: 'Main-course', image: Image13, oldPrice: 8, newPrice: 10 },
      { id: 14, name: 'Chicken Pizza', description: 'Chicken-californian pizza with chili', category: 'US-food', image: Image14, oldPrice: 12, newPrice: 14 },
      { id: 15, name: 'Veggie Pizza', description: 'Veggie pizza with onions, black olives, and tuna', category: 'Italian-food', image: Image15, oldPrice: 11, newPrice: 13 },
      { id: 16, name: 'Pizza with 4 Cheeses', description: 'Creamy white pizza with cheese', category: 'Italian-food', image: Image16, oldPrice: 13, newPrice: 15 },
      { id: 17, name: 'Bibimbap', description: 'Combination of veggies and rice with eggs', category: 'Korean-food', image: Image17, oldPrice: 9, newPrice: 11 },
      { id: 18, name: 'Extra Hot Chili Red Noodles', description: 'Hot red noodles', category: 'Korean-food', image: Image18, oldPrice: 7, newPrice: 9 },
      { id: 19, name: 'Tteokbokki', description: 'Rice cake with red chili hot sauce', category: 'Korean cuisine', image: Image19, oldPrice: 8, newPrice: 10 },
      { id: 20, name: 'Chinese Dumplings', description: 'Beef dumplings with veggies', category: 'Chinese-food', image: Image20, oldPrice: 10, newPrice: 12 },
      { id: 21, name: 'Sushi', description: 'Fresh sushi', category: 'Asian cuisine', image: Image21, oldPrice: 18, newPrice: 20 },
    ];
 ;

  // Debounced search handler
  const handleSearch = debounce((value) => {
    setSearch(value);
  }, 300);

  // Filter items based on search query
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Handle adding an item to the cart
  const handleAddToCart = (productId) => {
    setLoading(true); // Set loading to true
    Inertia.post('/cart/add', { product_id: productId, quantity: 1 }, {
      onFinish: () => setLoading(false), // Reset loading state
      onError: () => {
        setLoading(false);
        alert('Failed to add item to cart. Please try again.');
      },
    });
  };

  return (
    <div className="menu bg-black min-h-screen relative overflow-hidden text-white">
      <Navbar shopRoute="/booking" offreRoute="/about" mapRoute="/store" />
      <Banner />

      <div className="container mx-auto p-6 md:p-12 pt-20">
        {/* Search Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for a dish or category..."
          className="p-3 w-full md:w-1/2 lg:w-1/3 border border-gray-500 rounded-lg mb-6 mx-auto block bg-gray-900 text-white placeholder-gray-400"
        />

        {/* Menu Title */}
        <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent font-bold font-dancing-script text-center mb-10">
          Our Menu
        </h1>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-400 col-span-full py-10">
              No items found matching your search.
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="bg-gradient-to-r from-gray-900 to-neutral-900 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
                <div className="p-5 flex flex-col">
                  <h3 className="text-xl font-semibold text-yellow-400">{item.name}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                  <p className="text-sm text-gray-400 mt-1 italic">{item.category}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-yellow-400 text-lg font-semibold">${item.newPrice}</p>
                    <p className="line-through text-red-500">${item.oldPrice}</p>
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      disabled={loading}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      {loading ? 'Adding...' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;