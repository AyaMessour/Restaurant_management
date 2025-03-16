import React, { useState } from 'react';
import Navbar from './Navbar';
import bgImage from './photos/Restaux/Res.jpg';
import Manner from './Manner';

import WaitlistAccess from './Article';

const BookingTable = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    guests: 1,
    date: '',
    time: '',
    birthday: '',
    reservationType: '',
    specialRequest: '',
    textUpdates: false,
    emailOffers: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("You must accept the restaurant’s terms and conditions.");
      return;
    }
    alert(`Reservation confirmed for ${formData.firstName} ${formData.lastName}`);
  };

  return (
    <div
    className="relative h-auto flex flex-col items-center justify-start bg-cover bg-center mt-12 pt-32" // Increased pt-20 to pt-32
    style={{ backgroundImage: `url(${bgImage})` }} 
  >
    {/* Overlay pour améliorer la lisibilité */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
    {/* Navbar */}
    <Navbar />
  

      {/* Formulaire */}
      <div className="relative bg-white bg-opacity-90 shadow-2xl rounded-xl p-6 max-w-lg w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl text-center font-bold text-transparent bg-gradient-to-r from-amber-700 to-orange-900 bg-clip-text font-dancing-script mb-6">
          Reserve Your Table
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Prénom & Nom */}
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-amber-700"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-amber-700"
              required
            />
          </div>

          {/* Numéro de téléphone */}
          <div className="flex space-x-2">
            <span className="p-3 bg-gray-200 rounded-md">🇲🇦 +212</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-amber-700"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-700"
            required
          />

          {/* Nombre de personnes */}
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-700"
            required
          />

          {/* Date & Heure */}
          <div className="flex space-x-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-amber-700"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-amber-700"
              required
            />
          </div>

          {/* Anniversaire & Type de réservation */}
        
          <select
            name="reservationType"
            value={formData.reservationType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-700"
          >
            <option value="">Select Reservation Type</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="date">Date</option>
            <option value="proposal">Proposal</option>
            <option value="other">Other</option>
          </select>

          {/* Demande spéciale */}
          <textarea
            name="specialRequest"
            placeholder="Add a special request (optional)"
            value={formData.specialRequest}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-700"
          ></textarea>

          {/* Cases à cocher */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="textUpdates"
                checked={formData.textUpdates}
                onChange={handleChange}
                className="h-5 w-5 text-amber-700"
              />
              <span className="text-gray-700">
                Yes, I want to get text updates and reminders about my reservations.
              </span>
            </label>

          </div>

          {/* Bouton de confirmation */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-700 to-orange-900 text-white p-3 rounded-md shadow-lg hover:scale-105 transition-transform"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
      {/* <Manner></Manner> */}

    </div>
  );
};

export default BookingTable;
