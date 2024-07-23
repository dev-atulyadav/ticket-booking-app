import React from "react";
import { Link } from "react-router-dom";

const SearchRespose = ({ data }) => {
  console.log(data);
  return (
    <article className=" flex bg-white flex-col justify-start items-center p-5 gap-5">
      <h1 className="text-4xl">Search Results</h1>
      <ul className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 ">
        {data != null &&
          data.map((movie, index) => (
            // movie.overview!==undefined &&
            <li
              className="flex flex-col justify-center items-center text-center"
              key={index}
            >
              <Link className=" flex justify-center h-96 items-center gap-4 flex-col">
                <div className="h-[90%]">
                  <img
                    className="h-full w-60 bg-black"
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    loading="lazy"
                    fetchPriority="high"
                  />
                </div>
                <div>
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
    </article>
  );
};

export default SearchRespose;
