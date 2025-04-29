import React from "react";
import { useSelector } from "react-redux";

const HelpSupport = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="2xl:max-w-5xl w-full mx-auto p-8 bg-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 border-b pb-4">
        Help & Support
      </h1>

      <div className="space-y-8">
        <section className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
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
        </section>

        <section className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
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
            <p className="mt-4 text-red-600 bg-red-50 p-3 rounded-md font-medium">
              Please login to access your tickets and booking history
            </p>
          )}
        </section>

        <section className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
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
        </section>
      </div>
    </div>
  );
};

export default HelpSupport;
