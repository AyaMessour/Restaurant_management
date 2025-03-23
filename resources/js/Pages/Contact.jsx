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
      theme: "light",
    });
  };

  const showErrorToast = () => {
    toast.error("Failed to send message. Please try again.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await handleSubmit(event);
    if (result instanceof Error) {
      showErrorToast();
    } else if (state.succeeded) {
      showSuccessToast();
      event.target.reset(); // Reset the form after successful submission
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black min-h-screen flex flex-col items-center justify-center py-10 px-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 text-white shadow-xl rounded-xl w-full max-w-6xl flex flex-col lg:flex-row "
        >
          {/* Form Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
            <h1 className="text-6xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent font-bold font-dancing-script mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Questions? Comments? Concerns? We want to hear from you! Please fill out the form below, and one of our awesome customer service representatives will get back to you as soon as possible. Thank you!
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block font-semibold text-lg mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-lg"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block font-semibold text-lg mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-lg"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block font-semibold text-lg mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-lg"
                  rows="6"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold py-4 rounded-lg text-lg transition duration-300"
                >
                  {state.submitting ? "Submitting..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-1/2 px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.894428285363!2d-7.658167424302445!3d33.60804357332748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d372e4ea90f7%3A0x66014bbc27ac1a0b!2sLily's%20Restaurant!5e0!3m2!1sfr!2sma!4v1740775695608!5m2!1sfr!2sma"
              width="100%"
              height="600"
              className="rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
        <ToastContainer aria-live="polite" />
      </motion.div>
    </>
  );
}

export default Contact;