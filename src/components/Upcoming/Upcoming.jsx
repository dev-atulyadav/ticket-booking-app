import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setMovie } from "../../features/movie/movieSlice";

const Upcoming = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let url = "/movie/upcoming?language=en-US&page=1&region=IN";
    fetchDataFromApi(url).then((res) =>
      console.log(
        res.results,
        setData(res.results == undefined ? [] : res.results)
      )
    );
  }, []);
  return (
    <main className="hidden lg:inline-block p-3 h-full w-[50%] overflow-scroll shadow-inner shadow-[#00000079] rounded-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold capitalize">Upcoming movies</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.length > 0 &&
            data.map((movie, index) => (
              <Link
              to={`details`}
              onClick={() => {
                dispatch(setMovie(movie));
                console.log(movie);
                console.log("hi");
              }}
                key={index}
                className="flex gap-2 flex-col justify- items-center rounded-lg relative cursor-pointer shadow-xl shadow-[#00000044] pb-4"
              >
                <img
                  src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="h-40 w-full rounded-t"
                  alt="can't load"
                />
                <h3 className="text-xs uppercase font-semibold text-center">
                  {movie.title}
                </h3>
              </Link>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Upcoming;
