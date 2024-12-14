import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setMovie } from "../../features/movie/movieSlice";

const Card = ({ movie }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-60 flex flex-col justify-start items-center gap-4 cursor-pointer shadow-xl shadow-[#00000057] rounded-xl"
    >
      <div className="">
        <img
          className="h-full w-full opacity duration-700 rounded-xl"
          src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          loading="lazy"
          // fetchPriority="high"
          alt="can't load"
        />
      </div>
      <div className="flex flex-col justify-center items-center border-black w-full rounded-xl p-2 bg-white">
        <h2 className="text-3xl uppercase font-semibold text-center">
          {movie.original_title}
        </h2>
        <p className="flex gap-1 justify-center items-center flex-col">
          Average Vote:
          <span className="flex justify-center items-center gap-0.5 font-semibold">
            {movie.vote_average} out of 10
          </span>
        </p>
        <Link target="_blank"
          to={`/details/${movie.original_title.replace(/[ ]/g, "+")}/${
            movie.id
          }`}
          className="mt-4 transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-3 py-2.5 border rounded-lg uppercase font-semibold text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
