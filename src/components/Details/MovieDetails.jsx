import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import { setMovie } from "../../features/movie/movieSlice";
import { MagnifyingGlass } from "react-loader-spinner";
import { db, auth } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Alert } from "@mui/material";

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(true);
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const { id } = useParams();
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
  console.log(auth.currentUser);

  const handleBookTicket = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      setIsLogged(false);
      setTimeout(() => {
        setIsLogged(true);
      }, 3000);
      return;
    }
    const movie = {
      movieId: id,
      movieName: details.title,
      moviePoster: details.poster_path,
    };
    const user = auth.currentUser.email;
    const booking = {
      movie,
      user,
    };
    const docRef = await addDoc(collection(db, "bookings"), booking);
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <>
      {!isLogged && (
        <div className="w-screen top-14 absolute flex justify-center items-center z-20">
          <Alert
            className=" bg-[#ff1f1f]"
            sx={{
              bgcolor: "red",
              borderRadius: "30px",
            }}
            variant="filled"
            severity="error"
          >
            Please login to book a ticket!
          </Alert>
        </div>
      )}
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
              <div className=" py-4 overflow-hidden flex-col sm:flex-row relative flex justify-start gap-6 items-center w-[96vw] bg-black rounded-lg">
                <img
                  className="h-56 w- rounded-lg relative z-10 sm:ml-12"
                  src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  alt={details.title}
                />
                <div className="text-3xl flex flex-col justify-center items-center gap-4 uppercase font-bold text-center text-white z-10 sm:items-start">
                  <h1>{details.title}</h1>
                  <div className="flex justify-center items-center sm:flex-row flex-col gap-4">
                    <span className="text-2xl font-semibold text-yellow-400">
                      {details.vote_average}/10
                    </span>
                    <button
                      onClick={handleBookTicket}
                      className="transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-3 py-2.5 border rounded-lg uppercase font-semibold text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <div
                  className="w-screen top-0 h-screen absolute bg-cover bg-no-repeat opacity-50"
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
                    <p className="font-semibold">{Math.ceil(details.vote_average)}</p>
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
