import React from "react";
import LL from "../../assets/posters/laapta_ladies.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LastestRelease from "../Latest/LastestRelease";
import Popular from "../Popular/Popular";
import Reel from "../../assets/reel.svg"
import CB from "../../assets/clapperboard.svg"
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
  return (
    <>
      <section className=" pt-4 border-b h-screen flex justify-start items-center flex-col w-full">
        <article className=" h-[85%] w-full flex justify-center overflow-hidden items-center relative">
          <main className="relative h-full w-full px-14 flex flex-col justify-center items-start z-10">
          <img src={CB} className="h-20 -rotate-12 relative -left-8" alt="" />
            <h3 className="text-4xl sm:text-6xl uppercase font-bold">
              Welcome to Ezy Ticket
            </h3>
            <p className="text-xl sm:text-2xl">
              Book your tickets now and enjoy the show!
            </p>
            <p>Get ready to experience the magic of cinema!</p>
            <AnchorLink
              href="#latestMovies"
              className="mt-4 transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-6 py-2.5 border rounded-lg uppercase font-semibold text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-white"
            >
              Explore
            </AnchorLink>
          <img src={Reel} className="h-96 absolute left-[42rem] rotate-[70deg] top-48" alt="" />
          </main>
          <Upcoming/>
        </article>
      </section>
      {/* <LastestRelease /> */}
      <Popular/>
    </>
  );
};

export default Home;
