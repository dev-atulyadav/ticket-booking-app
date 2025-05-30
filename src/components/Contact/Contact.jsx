import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.", {
      position: "top-center",
      autoClose: 3000,
    });
    e.target.reset();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 md:p-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-sky-600">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="your@email.com"
                />
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="How can we help you?"
                ></textarea>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-sky-600">Contact Information</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-700">
                  123 Movie Street<br />
                  Cinema District<br />
                  Entertainment City, 12345
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-700">support@ezyticket.com</p>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-700">+91 9876543210</p>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
