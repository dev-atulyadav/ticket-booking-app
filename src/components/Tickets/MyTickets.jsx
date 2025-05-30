import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTickets } from "../../utils/action";
import { removeTicket } from "../../utils/action";
import { toast } from "react-toastify";

const MyTickets = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [tickets, setTickets] = useState([]);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchTickets = async () => {
    const response = await getTickets(user.id);
    setTickets(response.data.tickets);
    setMovies(response.data.movies);
  };
  const handleRemoveTicket = async (ticketId) => {
    const response = await removeTicket(ticketId);
    if (response.status === 200) {
      toast.success("Ticket removed successfully", {
        position: "top-center",
        autoClose: 3000,
      });
      setTickets(tickets.filter((ticket) => ticket._id !== ticketId));
    } else {
      toast.error("Failed to remove ticket", {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(response);
    }
  };
  useEffect(() => {
    if (user) {
      fetchTickets();
    } else {
      navigate("/login");
    }
  }, []);
  if (tickets && tickets.length === 0) {
    return (
      <div className="p-10 flex w-full flex-col items-center justify-center gap-10 h-screen">
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
          <p className="text-2xl text-center font-bold">No tickets found</p>
          <p className="text-center font-bold">
            Book a ticket to see them here
          </p>
          {user ? (
            <Link to="/">
              <button className="hover:bg-blue-500 transition-all duration-300 border border-blue-400 text-blue-400 px-4 py-2 rounded-md hover:text-white font-semibold">
                Book a ticket
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className=" transition-all duration-300 hover:underline text-blue-400 px-4 py-2 rounded-md hover:text-blue-500 font-semibold">
                Please login to book a ticket
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="p-10 flex w-full flex-col items-center justify-center gap-10">
      <h1 className="text-4xl text-center font-bold">My Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {tickets &&
          tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movies[index].image}`}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-col gap-2 items-start justify-center p-4 w-full">
                <h3 className="text-lg font-bold">{movies[index].title}</h3>
                <p>
                  <span className="font-bold">Date:</span>{" "}
                  {new Date(ticket.createdAt).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-bold">Time:</span>{" "}
                  {new Date(ticket.createdAt).toLocaleTimeString()}
                </p>
                <p>
                  <span className="font-bold">Seats:</span>{" "}
                  {ticket.seats.join(", ")}
                </p>
                <p>
                  <span className="font-bold">Total Price:</span> ₹
                  {ticket.totalAmount}
                </p>
                <button
                  onClick={() => handleRemoveTicket(ticket._id)}
                  className="bg-red-500 mt-10 text-white px-4 py-2 rounded-md self-end"
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
