import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const HelpSupport = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="2xl:max-w-5xl w-full mx-auto p-8 bg-white"
    >
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-center text-gray-800 border-b pb-4"
      >
        Help & Support
      </motion.h1>

      <div className="space-y-8">
        <motion.section 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4 text-sky-500">
            Booking Tickets
          </h2>
          <p className="mb-4 text-gray-700">To book movie tickets:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Browse movies on the homepage
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Click on a movie to view details
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Select "Book Tickets" and choose your seats
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Complete the payment process
            </li>
          </ol>
        </motion.section>

        <motion.section 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4 text-sky-500">
            Managing Your Tickets
          </h2>
          <p className="mb-4 text-gray-700">
            You can view and manage your booked tickets by:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Going to the "E-tickets" section in the navigation menu
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Viewing your ticket details and booking information
            </li>
          </ul>
          {!isLoggedIn && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-red-600 bg-red-50 p-3 rounded-md font-medium"
            >
              Please login to access your tickets and booking history
            </motion.p>
          )}
        </motion.section>

        <motion.section 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4 text-sky-500">
            Contact Support
          </h2>
          <p className="text-gray-700 mb-4">For additional assistance:</p>
          <div className="space-y-2">
            <p className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <span className="font-medium mr-2">Email:</span>{" "}
              support@ezyticket.com
            </p>
            <p className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <span className="font-medium mr-2">Phone:</span> 1-800-000-000
            </p>
            <p className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <span className="font-medium mr-2">Hours:</span> Monday - Sunday,
              9 AM - 9 PM
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default HelpSupport;
