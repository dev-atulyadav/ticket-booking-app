import React from "react";
import KGF from "../../assets/posters/KGF-ch2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-screen pt-4 flex justify-center items-center flex-col w-full">
      <article className="h-[80%] w-full flex justify-center overflow-hidden items-center relative">
        <img src={KGF} className="w-full h-full absolute" alt="" />
        <main className="h-full w-full bg-[#00000059] px-14 flex flex-col justify-center items-start text-white relative z-10">
          <h3 className="text-6xl uppercase font-bold text-yellow-200">
            Welcome to Ezy Ticket
          </h3>
          <p className="text-2xl">Book your tickets now and enjoy the show!</p>
          <p>Get ready to experience the magic of cinema!</p>
          <Link className="mt-4 transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-6 py-2.5 border rounded-lg uppercase font-semibold text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-white">
            Explore
          </Link>
        </main>
      </article>
    </section>
  );
};

export default Home;
