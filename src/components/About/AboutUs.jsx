import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
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
          About EzyTicket
        </motion.h1>
        
        <div className="space-y-8">
          <motion.section 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              MovieTime is dedicated to bringing the magic of cinema directly to you. We strive to provide a seamless and enjoyable movie ticket booking experience, making it easier than ever to catch the latest blockbusters on the big screen.
            </p>
          </motion.section>

          <motion.section 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="space-y-2"
              >
                <h3 className="font-semibold text-lg">Easy Booking</h3>
                <p className="text-gray-700">Simple and quick ticket booking process with seat selection</p>
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="space-y-2"
              >
                <h3 className="font-semibold text-lg">Latest Movies</h3>
                <p className="text-gray-700">Access to the newest releases and popular films</p>
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="space-y-2"
              >
                <h3 className="font-semibold text-lg">Secure Payments</h3>
                <p className="text-gray-700">Safe and reliable payment processing</p>
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="space-y-2"
              >
                <h3 className="font-semibold text-lg">Digital Tickets</h3>
                <p className="text-gray-700">Manage your bookings easily through your account</p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Why Choose Us</h2>
            <p className="text-gray-700 leading-relaxed">
              We understand that your time is valuable. That's why we've created a platform that makes movie ticket booking hassle-free. With our user-friendly interface, secure payment system, and dedicated customer support, we ensure that your movie-going experience starts with a smooth booking process.
            </p>
          </motion.section>
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 italic">
            "Bringing the silver screen experience to your fingertips"
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
