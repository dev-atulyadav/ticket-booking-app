import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MovieDetails = () => {
  const details = useSelector((state) => state.movie);
  return (
    <>
      <section>
        <article>
          <main>
            <h1>{details.title}</h1>
            <img
              className="h-full w-full opacity duration-700 rounded-xl"
              src={`http://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
              loading="lazy"
              // fetchPriority="high"
              alt="can't load"
            />
            <p>{details.overview}</p>
            <p>{details.release_date}</p>
          </main>
        </article>
      </section>
      {details.title === undefined && <Navigate to="/" />}
    </>
  );
};

export default MovieDetails;
