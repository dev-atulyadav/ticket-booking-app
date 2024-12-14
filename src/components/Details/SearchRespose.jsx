import React from "react";
import { Link } from "react-router-dom";
import DefaultPoster from "../../assets/default_poster.svg";
import Pagination from "./Pagination";

const SearchRespose = ({ data }) => {
  console.log(data);
  return (
    <article className=" flex bg-white flex-col justify-start items-center p-5 gap-5">
      <span className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-semibold">Search Results</h1>
        <p className="text-xl">Total results: {data.total_results}</p>
        {/* <Pagination pages={data.total_pages} /> */}
      </span>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {data != null &&
          data.results.map((movie, index) => (
            // movie.overview!==undefined &&
            <li
              className="flex flex-col justify-center items-center text-center"
              key={index}
            >
              <Link target="_blank"
                to={`/details/${movie.original_title.replace(/[ ]/g, "+")}/${
                  movie.id
                }`}
                className=" flex justify-start h-[26rem] items-center gap-4 m-2 flex-col"
              >
                <div>
                  <img
                    className="h-[23rem] w-60 border rounded-lg"
                    src={
                      movie.poster_path != null
                        ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : DefaultPoster
                    }
                    loading="lazy"
                    fetchPriority="high"
                  />
                </div>
                <div className="font-semibold">
                  {movie.title === undefined ? (
                    <h2>{movie.original_name}</h2>
                  ) : (
                    <h2>{movie.title}</h2>
                  )}
                  {/* <p>{movie.overview}</p> */}
                </div>
              </Link>
            </li>
          ))}
      </ul>
      {/* <Pagination pages={data.total_pages} /> */}
    </article>
  );
};

export default SearchRespose;
