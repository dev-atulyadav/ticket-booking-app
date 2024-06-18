import React, { useEffect, useState } from "react";
import Card from "../Latest/Card";
import { fetchDataFromApi } from "../../utils/api";

const Popular = () => {
  const [data, setData] = useState([]);
  const [inViewMovies, setInVeiwMovie] = useState(4);
  const handleInViewMovies = () => {
    setInVeiwMovie(inViewMovies + 4);
  };
  useEffect(() => {
    let url = "/movie/popular?language=en-US&page=1&region=IN";
    fetchDataFromApi(url).then((res) =>
      console.log(res.results, setData(res.results))
    );
  }, []);
  return (
    <section id="latestMovies" className="h-screen w-full">
      <article className="p-4 h-full w-full flex justify-start items-center flex-col gap-6 sm:gap-16">
        <h1 className="text-3xl sm:text-5xl font-bold uppercase text-center">
          Popular Movies
        </h1>
        <main className=" grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
          {data.length > 0 &&
            data.map(
              (movie, index) =>
                index < inViewMovies && <Card key={index} movie={movie} />
            )}
        </main>
            <button className="border-y border-black w-full p-2 text-sky-500 hover:text-violet-700 hover:underline">
              See More
            </button>
      </article>
    </section>
  );
};

export default Popular;
