import React from "react";

const MyTickets = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold mt-10">My Tickets</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-white rounded-lg shadow-md w-96 p-8">
          <h2 className="text-lg font-bold mb-4">Ticket 1</h2>
          <p className="text-gray-600">Movie: Movie Name</p>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
