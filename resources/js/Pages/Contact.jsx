import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Navbar from "./Navbar";

function Contact() {
  const [state, handleSubmit] = useForm("xanqjppg");

  const showSuccessToast = () => {
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event); 
    if (state.succeeded) {
      showSuccessToast();
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
    


      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-stone-900 to-stone-900 min-h-screen flex flex-col items-center justify-center"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 p-6 bg-white shadow-lg rounded-lg mx-auto w-full max-w-lg"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Contactez-nous</h1>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Name Input */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-amber-500"
                required
                aria-describedby="name-error"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </motion.div>

            {/* Phone Input */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label htmlFor="phone" className="block font-semibold text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-amber-500"
                required
                aria-describedby="phone-error"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </motion.div>

            {/* Email Input */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label htmlFor="email" className="block font-semibold text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-amber-500"
                required
                aria-describedby="email-error"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </motion.div>

            {/* Message Textarea */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <label htmlFor="message" className="block font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-amber-500"
                rows="4"
                required
                aria-describedby="message-error"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <button 
                type="submit" 
                disabled={state.submitting} 
                className="w-full bg-red-600 text-white py-3 rounded hover:bg-gradient-to-r from-stone-900 to-stone-900 focus:outline-none transition duration-300"
              >
                {state.submitting ? (
                  <span className="spinner-border animate-spin border-4 border-t-4 border-white rounded-full w-6 h-6 mr-2"></span>
                ) : null}
                {state.submitting ? 'Submitting...' : 'Submit'}
              </button>
            </motion.div>
          </form>
        </motion.div>

        <ToastContainer />
      </motion.div>
    </>
  );
}

export default Contact;