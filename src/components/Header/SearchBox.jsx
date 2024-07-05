import React from "react";

const SearchBox = () => {
  return (
    <section className="absolute h-screen w-full bg-[#00000090] backdrop-blur-[3px] z-40">
      <article>
        <div
          className="flex flex-col items-center justify-center h-full w-full bg-white/50
        backdrop-blur-[3px] rounded-b-xl p-4"
        >
          <h1 className="text-2xl font-bold text-gray-800">
            Search for a movie
          </h1>
          <input
            className="w-[50%] h-10 rounded-lg bg-gray-100 p-2 mt
                -4"
            type="text"
            placeholder="Search for a movie"
          />
        </div>
      </article>
    </section>
  );
};

export default SearchBox;
