import React from "react";
import { Link } from "react-router-dom";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ movie }) => {
  return (
    <Link
      target="_blank"
      to={`/details/${movie.original_title.replace(/[ ]/g, "+")}/${movie.id}`}
      className="w-60 flex flex-col justify-start items-center gap-4 cursor-pointer shadow-xl shadow-[#00000057] rounded-xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
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
          <h2 className="text-2xl uppercase font-semibold text-center">
            {movie.original_title}
          </h2>
          <p className="flex gap-1 justify-center items-center flex-col">
            Average Vote:
            <span className="flex justify-center items-center gap-0.5 font-semibold">
              {Math.ceil(movie.vote_average)} out of 10
            </span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
