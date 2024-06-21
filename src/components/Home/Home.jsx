import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Popular from "../Popular/Popular";
import CB from "../../assets/clapperboard.svg"
import Upcoming from "../Upcoming/Upcoming";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Outlet/>
      <section id="home" className=" pt-4 px-6 border-b h-screen flex justify-start items-center flex-col w-full">
        <article className=" h-[85%] w-full flex justify-center items-center relative">
          <main className="relative h-full w-full px-14 flex flex-col justify-center items-start z-10">
          <img src={CB} className="h-20 -rotate-12 relative -left-8" alt="" />
            <h3 className="text-5xl sm:text-6xl uppercase font-bold">
              Welcome to Ezy Ticket
            </h3>
            <p className="text-xl font-semibold sm:text-2xl">
              Book your tickets now and enjoy the show!
            </p>
            <p>Get ready to experience the magic of cinema!</p>
            <AnchorLink
              href="#popularMovies"
              className="mt-4 transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-6 py-2.5 border rounded-lg uppercase font-semibold text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-white"
            >
              Explore
            </AnchorLink>
          </main>
          <Upcoming/>
        </article>
      </section>
      <Popular/>
    </>
  );
};

export default Home;
