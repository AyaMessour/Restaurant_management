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
      theme: "dark",
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
      theme: "dark",
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
        className="bg-black min-h-screen flex flex-col items-center justify-center py-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8  text-white shadow-xl rounded-xl w-full max-w-4xl flex flex-wrap"
        >
          {/* Form Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-amber-500">Contact Us</h1>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <label htmlFor="name" className="block font-semibold">Name</label>
                <input id="name" type="text" name="name" className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-amber-500" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </motion.div>
              
              {/* Email Input */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input id="email" type="email" name="email" className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-amber-500" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </motion.div>

              {/* Message Textarea */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <label htmlFor="message" className="block font-semibold">Message</label>
                <textarea id="message" name="message" className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-amber-500" rows="4" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </motion.div>

              {/* Submit Button */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 }}>
                <button type="submit" disabled={state.submitting} className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded transition duration-300">
                  {state.submitting ? "Submitting..." : "Send Message"}
                </button>
              </motion.div>
            </form>
          </div>
          
          {/* Map Section */}
          <div className="w-full lg:w-1/2 px-4">
            <iframe

           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.894428285363!2d-7.658167424302445!3d33.60804357332748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d372e4ea90f7%3A0x66014bbc27ac1a0b!2sLily&#39;s%20Restaurant!5e0!3m2!1sfr!2sma!4v1740775695608!5m2!1sfr!2sma"
              width="100%"
              height="350"
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
