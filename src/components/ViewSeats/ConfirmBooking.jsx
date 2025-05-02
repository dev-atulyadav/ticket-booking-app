import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { bookTicket } from "../../utils/action";
import { getSingleMovie } from "../../utils/api";
import { toast } from "react-toastify";

const ConfirmBooking = ({ selectedSeats, onClose, movieId }) => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  const handleBooking = async (e) => {
    e.preventDefault();
    const movie = await getSingleMovie(movieId);
    const data = {
      userId: user._id,
      seats: selectedSeats,
      movie: {
        movieId: movieId,
        title: movie.title,
        description: movie.overview,
        image: movie.poster_path,
        price: 100,
      },
    };
    console.log(data);
    // const data = {
    //   movieId: id,
    //   seats: selectedSeats,
    // };
    const response = await bookTicket(data);
    console.log(response);
    if (response.status === 200) {
      toast.success("Please pay the amount to confirm the booking!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/payment");
    }
    if (response.status === 400) {
      toast.error(response.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
      });
    }
    if (response.status === 500) {
      toast.error(response.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
      });
    }
  };

  return (
    <section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#b8b8b856] backdrop-blur-[3px] z-40">
      <div className="relative bg-white p-8 rounded-2xl shadow-xl shadow-[#0000005d] max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute right-4 text-3xl text-red-600 top-4"
        >
          <IoCloseCircleOutline />
        </button>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Confirm Your Booking</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Selected Seats:</span>
              <span>{selectedSeats.join(", ")}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Total Seats:</span>
              <span>{selectedSeats.length}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Price per Seat:</span>
              <span>₹200</span>
            </div>

            <div className="flex justify-between border-t pt-4">
              <span className="font-bold">Total Amount:</span>
              <span className="font-bold">₹{selectedSeats.length * 200}</span>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleBooking}
              className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmBooking;
