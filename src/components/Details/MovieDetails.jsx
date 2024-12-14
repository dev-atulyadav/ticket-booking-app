import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import { setMovie } from "../../features/movie/movieSlice";
import { MagnifyingGlass } from "react-loader-spinner";

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  console.log(details);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    let url = `/movie/${id}`;
    fetchDataFromApi(url).then((res) => {
      dispatch(setMovie(res == undefined ? [] : res));
      setDetails(res);
      if (res != undefined) {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <span className="text-xl font-semibold text-gray-500">
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              color="gray"
              secondaryColor="gray"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Just a sec...</p>
          </span>
        </div>
      ) : (
        <section>
          <article className="flex flex-col gap-4 m-4 justify-center items-center">
            <main className="flex justify-center items-start flex-col gap-6">
              <div className=" py-4 overflow-hidden relative flex justify-start items-center w-[96vw] bg-[#000000d0] rounded-lg">
                <img
                  className="h-56 w- rounded-lg relative z-10 ml-12"
                  src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  alt={details.title}
                />
                <div className="text-3xl flex flex-col gap-4 uppercase font-bold text-white z-10 ml-12">
                  <h1>{details.title}</h1>
                  <div className="flex gap-4">
                    <span className="text-2xl font-semibold text-yellow-400">
                      {details.vote_average}/10
                    </span>
                    <button className="hover:bg-green-500 border border-green-500 text-green-500 hover:text-white duration-150 font-semibold text-xl rounded px-2">
                      Book Now
                    </button>
                  </div>
                </div>
                <div
                  className="w-full absolute h-full bg-cover i bg-no-repeat overflow-hidden opacity-50"
                  style={{
                    backgroundImage: `url(http://image.tmdb.org/t/p/w500/${details.backdrop_path})`,
                    backgroundPosition: "center -12rem",
                  }}
                ></div>
              </div>
              <div className="flex w-full flex-col gap-4 p-4 rounded-lg border border-gray-500">
                <div className="border-b border-gray-500 pb-4">
                  <h2 className="text-2xl font-bold">Overview</h2>
                  <p className="text-sm"> {details.overview}</p>
                </div>
                <div className="flex gap-4">
                  <span>
                    <h2 className="text-xl font-bold">Release Date</h2>
                    <p className="font-semibold">{details.release_date}</p>
                  </span>
                  <span>
                    <h2 className="text-xl font-bold">Average Vote</h2>
                    <p className="font-semibold">{details.vote_average}</p>
                  </span>
                </div>
              </div>
            </main>
          </article>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
