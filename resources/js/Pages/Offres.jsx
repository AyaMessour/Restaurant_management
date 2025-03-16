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
export default function Offres() {
  const offres = [
  
    {
      id: 2,
      titre: "Pizza Familiale",
      description: "Grande pizza 4 saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre2, // ✅ Correction ici
    },
    {
      id: 3,
      titre: "Dessert Gourmand",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre3, // ✅ Correction ici
    },
    {
      id: 1,
      titre: "Menu Spécial Burger",
      description: "Un délicieux burger avec frites et boisson offerte.",
      prixOriginal: "120 DH",
      prixPromo: "99 DH",
      image: offre4, // ✅ Correction ici
    },
    {
      id: 2,
      titre: "Pizza Familiale",
      description: "Grande pizza 4 saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre5, // ✅ Correction ici
    },
    {
      id: 3,
      titre: "Dessert Gourmand",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre6, // ✅ Correction ici
    },
    {
      id: 2,
      titre: "Pizza Familiale",
      description: "Grande pizza 4 saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre7, // ✅ Correction ici
    },
    {
      id: 3,
      titre: "Dessert Gourmand",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre8, // ✅ Correction ici
    },
    {
      id: 1,
      titre: "Menu Spécial Burger",
      description: "Un délicieux burger avec frites et boisson offerte.",
      prixOriginal: "120 DH",
      prixPromo: "99 DH",
      image: offre9, // ✅ Correction ici
    },
    {
      id: 2,
      titre: "Pizza Familiale",
      description: "Grande pizza 4 saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre10, // ✅ Correction ici
    },
    {
      id: 3,
      titre: "Dessert Gourmand",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre11, // ✅ Correction ici
    },
    {
      id: 2,
      titre: "Pizza Familiale",
      description: "Grande pizza 4 saisons + 1 boisson offerte.",
      prixOriginal: "150 DH",
      prixPromo: "129 DH",
      image: offre12, // ✅ Correction ici
    },
   
    {
      id: 3,
      titre: "Dessert Gourmand",
      description: "Tarte au chocolat + café offert.",
      prixOriginal: "50 DH",
      prixPromo: "39 DH",
      image: offre17, // ✅ Correction ici
    },
  ];
  return (
    <>
    <Manner></Manner>
      <Navbar />
      <div className=""></div> {/* Ajout d'un espace sous la navbar */}
      <div className="bg-black text-white py-12">
        <h2 className="text-3xl font-bold  text-center mb-8">🔥 Offres Spéciales 🔥</h2>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}