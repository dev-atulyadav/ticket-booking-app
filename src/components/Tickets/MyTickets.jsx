import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTicket } from "../../features/user/userSlice";
import { Link } from "react-router-dom";

const MyTickets = () => {
  const { tickets } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(tickets);
  if (tickets.length === 0) {
    return (
      <div className="p-10 flex w-full flex-col items-center justify-center gap-10 h-screen">
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
          <p className="text-2xl text-center font-bold">No tickets found</p>
          <p className="text-center font-bold">
            Book a ticket to see your tickets here
          </p>
          <Link to="/">
            <button className="hover:bg-blue-500 transition-all duration-300 border border-blue-400 text-blue-400 px-4 py-2 rounded-md hover:text-white font-semibold">
              Book a ticket
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="p-10 flex w-full flex-col items-center justify-center gap-10">
      <h1 className="text-4xl text-center font-bold">My Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {tickets.map((ticket, index) => (
          <div className="bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500/${ticket.moviePoster}`}
              alt=""
              className="h-44 w-full object-cover"
            />
            <div className="flex flex-col gap-2 items-start justify-center p-4">
              <h3 className="text-lg font-bold">Movie: {ticket.movieName}</h3>
              <p>
                <span className="font-bold">Date:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
              <p>
                <span className="font-bold">Time:</span>{" "}
                {new Date().toLocaleTimeString()}
              </p>
              <button
                onClick={() => dispatch(removeTicket(ticket.movieId))}
                className="bg-red-500 mt-10 text-white self-end px-4 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
