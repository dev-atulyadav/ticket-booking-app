import React from "react";
import Movie1 from "../../assets/posters/Jawan.jpg";
import Movie2 from "../../assets/posters/j2.png";
import { Link } from "react-router-dom";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
    whileInView={{
        position:"static",
        skewY:0,
      }}
      whileHover={{
        skewZ:20
      }}
      transition={{ duration: 0.5,
       }}
      className=" flex flex-col justify-center items-center gap-4 cursor-pointer"
    >
      <div className="relative bg-">
        <img
          className="h-72 opacity duration-700"
          src={Movie1}
          loading="lazy"
          fetchPriority="high"
          alt="jawan"
        />
        {/* <img className='h-96 absolute top-0 hover:scale-105 transition-all duration-700' src={Movie2} loading='lazy' fetchPriority='high' alt="jawan" /> */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl uppercase font-bold">Jawan</h2>
        <p className="flex gap-1 justify-center items-center">
          Rating:
          <span className="flex justify-center items-center gap-0.5">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarHalf />
            <IoStarOutline />
          </span>
        </p>
        <Link className="mt-4 transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-3 py-2.5 border rounded-lg uppercase font-semibold text-green-400 border-green-400 hover:bg-green-400 hover:text-white">
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
