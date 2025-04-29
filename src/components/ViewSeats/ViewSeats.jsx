import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setMovieSeat } from "../../features/movie/moiveSeatSlice";
import { useDispatch, useSelector } from "react-redux";

const ViewSeats = () => {
  const { movieName, id } = useParams();
  const dispatch = useDispatch();
  const movieSeat = useSelector((state) => state.movieSeat);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
    setIsSelected(!isSelected);
  };
  const isMovieStored = movieSeat.find((movie) => movie.id === id);
  useEffect(() => {
    if (isMovieStored) {
      dispatch(setSelectedSeats(isMovieStored.selectedSeats));
    } else {
      dispatch(setMovieSeat([...movieSeat]));
    }
  }, []);
  console.log(movieSeat);
  return (
    <section className="p-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-2xl font-bold">Available Seats</h2>
            <div className="">
              <ul className="grid grid-cols-2 place-items-start text-sm sm:text-base md:grid-cols-5 gap-8">
                <li className="flex flex-row items-center justify-between w-20 md:w-auto gap-2">
                  <p>Available</p>
                  <span className="sm:h-5 sm:w-5 h-4 w-4 bg-gray-500 rounded-full inline-block"></span>
                </li>
                <li className="flex flex-row items-center justify-between w-20 md:w-auto gap-2">
                  <p>Booked</p>
                  <span className="sm:h-5 sm:w-5 h-4 w-4 bg-red-500 rounded-full inline-block"></span>
                </li>
                <li className="flex flex-row items-center justify-between w-20 md:w-auto gap-2">
                  <p>Front</p>
                  <span className="sm:h-5 sm:w-5 h-4 w-4 bg-green-500 rounded-full inline-block"></span>
                </li>
                <li className="flex flex-row items-center justify-between w-20 md:w-auto gap-2">
                  <p>Middle</p>
                  <span className="sm:h-5 sm:w-5 h-4 w-4 bg-orange-300 rounded-full inline-block"></span>
                </li>
                <li className="flex flex-row items-center justify-between w-20 md:w-auto gap-2">
                  <p>Back</p>
                  <span className="sm:h-5 sm:w-5 h-4 w-4 bg-sky-500 rounded-full inline-block"></span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-10 gap-8">
              {Array.from({ length: 90 }).map((_, index) => (
                <div key={index} className="col-span-1">
                  {index >= 0 && index <= 29 && (
                    <button
                      onClick={() => handleSeatClick(index + 1)}
                      className={`w-12 h-12 bg-gray-200 rounded-md flex justify-center items-center hover:bg-green-300 transition-all duration-300 hover:text-white ${
                        selectedSeats.includes(index + 1)
                          ? "bg-green-300 text-white"
                          : ""
                      }`}
                    >
                      <p>F{index + 1}</p>
                    </button>
                  )}

                  {index >= 30 && index <= 59 && (
                    <button
                      onClick={() => handleSeatClick(index + 1)}
                      className={`w-12 h-12 bg-gray-200 rounded-md flex justify-center items-center hover:bg-orange-300 transition-all duration-300 hover:text-white ${
                        selectedSeats.includes(index + 1)
                          ? "bg-orange-300 text-white"
                          : ""
                      }`}
                    >
                      <p>M{index + 1}</p>
                    </button>
                  )}
                  {index >= 60 && index <= 89 && (
                    <button
                      onClick={() => handleSeatClick(index + 1)}
                      className={`w-12 h-12 bg-gray-200 rounded-md flex justify-center items-center hover:bg-sky-300 transition-all duration-300 hover:text-white ${
                        selectedSeats.includes(index + 1)
                          ? "bg-sky-300 text-white"
                          : ""
                      }`}
                    >
                      <p>B{index + 1}</p>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewSeats;
