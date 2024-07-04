import React, { useEffect, useState } from "react";
import Card from "../Home/Card";
import { fetchDataFromApi } from "../../utils/api";
import { setMovie } from "../../features/movie/movieSlice";
import { useDispatch } from "react-redux";

const Popular = () => {
  const [data, setData] = useState([]);
  const [inViewMovies, setInVeiwMovie] = useState(4);
  useEffect(() => {
    let url = "/movie/popular?language=en-US&page=1&region=IN";
    fetchDataFromApi(url).then((res) =>
      console.log(
        res.results,
        setData(!res.results == undefined ? [] : res.results)
      )
    );
  }, []);
  const dispatch = useDispatch();

  return (
    <section id="popularMovies" className="w-full">
      <article className="p-4 h-full w-full flex justify-start items-center flex-col gap-6 sm:gap-16">
        <h1 className="text-3xl sm:text-5xl font-bold uppercase text-center">
          Popular Movies
        </h1>
        <main className="grid gap-10 xl:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
          {data.length > 0 &&
            data.map(
              (movie, index) =>
                index < inViewMovies && (
                  <div
                    onClick={() => {
                      dispatch(setMovie(movie));
                      console.log(movie);
                      console.log("hi");
                    }}
                    key={index}
                    to={"details"}
                    className="grid"
                  >
                    <Card movie={movie} />
                  </div>
                )
            )}
        </main>
        <div className="border-y border-black w-full text-center">
          <button
            onClick={
              inViewMovies === 20
                ? () => {
                    setInVeiwMovie(4);
                  }
                : () => {
                    setInVeiwMovie(inViewMovies + 4);
                  }
            }
            className=" p-2 text-sky-500 hover:text-violet-700 hover:underline"
          >
            {inViewMovies === 20 ? "Show Less" : "See More"}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Popular;
