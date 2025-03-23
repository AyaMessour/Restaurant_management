import React, { useState } from 'react';
import Navbar from './Navbar';
import bgImage from './photos/Restaux/Res.jpg';
import Footer from './Footer';
import WaitlistAccess from './Article';
import Manner from './Manner';
import Contact from './Contact';
import { useForm } from "@inertiajs/react";
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import styles

const BookingTable = () => {
  const { data, setData, post, processing, errors } = useForm({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    guests: 1,
    date: "",
    time: "",
    reservation_type: "",
    special_request: "",
    text_updates: false,
    termsAccepted: false, // This is only for frontend validation
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.termsAccepted) {
      toast.error("You must accept the restaurant’s terms and conditions."); // Use toast for error
      return;
    }

    post(route("reservations.store"), {
      onSuccess: () => {
        toast.success("Reservation confirmed successfully!"); // Use toast for success
        setData({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          guests: 1,
          date: "",
          time: "",
          reservation_type: "",
          special_request: "",
          text_updates: false,
          termsAccepted: false,
        });
      },
      onError: (errors) => {
        console.log("Validation Errors:", errors);
        toast.error("Something went wrong. Please check the form and try again."); // Use toast for error
      },
    });
  };

  return (
    <>
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
                name="first_name"
                placeholder="First Name"
                value={data.first_name}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-amber-700"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={data.last_name}
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
                value={data.phone}
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
              value={data.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-700"
              required
            />

            {/* Nombre de personnes */}
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              value={data.guests}
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
                value={data.date}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-amber-700"
                required
              />
              <input
                type="time"
                name="time"
                value={data.time}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-amber-700"
                required
              />
            </div>

            {/* Type de réservation */}
            <select
              name="reservation_type"
              value={data.reservation_type}
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
              name="special_request"
              placeholder="Add a special request (optional)"
              value={data.special_request}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-700"
            ></textarea>

            {/* Cases à cocher */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="text_updates"
                  checked={data.text_updates}
                  onChange={handleChange}
                  className="h-5 w-5 text-amber-700"
                />
                <span className="text-gray-700">
                  Yes, I want to get text updates and reminders about my reservations.
                </span>
              </label>

              {/* Terms and Conditions */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={data.termsAccepted}
                  onChange={handleChange}
                  className="h-5 w-5 text-amber-700"
                />
                <span className="text-gray-700">
                  I agree to the <span className="text-blue-500">Terms and Conditions</span>
                </span>
              </label>
            </div>

            {/* Error handling */}
            {errors && (
              <div className="text-red-500 text-sm">
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}

            {/* Bouton de confirmation */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-700 to-orange-900 text-white p-3 rounded-md shadow-lg hover:scale-105 transition-transform"
              disabled={processing}
            >
              {processing ? "Processing..." : "Confirm Reservation"}
            </button>
          </form>
        </div>

        {/* Additional Components */}
   
      </div>

      {/* Toast Container for notifications */}
    
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <WaitlistAccess />
        <Manner />
        <Contact />
        <Footer />
    </>
  );
};

export default BookingTable;
