import React from "react";
import { Link } from "react-router-dom";

const SearchRespose = ({ data }) => {
  console.log(data);
  return (
    <article className=" flex bg-white flex-col justify-start items-center p-5 gap-5">
      <h1 className="text-4xl">Search Results</h1>
      <ul className="grid grid-cols-4 gap-5 ">
        {data != null &&
          data.map((movie, index) => (
            movie.overview!==undefined &&
            <li
            className="flex h-52 flex-col justify-center items-center text-center"
            key={index}>
              <Link className=" flex justify-center items-center gap-4 flex-col">
                <div className="">
                  <img
                    className="w-64 h-36"
                    src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.original_name}
                  />
                </div>
                <div>
                  {movie.original_title===undefined?
                    <h2>{movie.original_name}</h2>:
                    <h2>{movie.original_title}</h2>
                  
                  }
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
