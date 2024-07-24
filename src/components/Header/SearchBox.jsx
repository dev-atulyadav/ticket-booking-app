import React, { useEffect, useState } from "react";
import { MdManageSearch } from "react-icons/md";
import { fetchDataFromApi } from "../../utils/api";
import SearchRespose from "../Details/SearchRespose";
import SearchIllustration from "../../assets/search.svg";
import ErrorIllustration from "../../assets/error.svg";
import { MutatingDots } from "react-loader-spinner";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let url = `/search/movie?query=${search}`;
    if (search != "") {
      fetchDataFromApi(url).then((res) => {
        setData(res.results == undefined ? [] : res);
        if (res.results.length == 0) {
          setError(true);
          setIsLoading(false);
        }
        if (res.results.length > 0) {
          setTimeout(() => {
            setSearchCount(searchCount + 1);
            setIsLoading(false);
            setError(false)
          }, 1500);
        }
      });
    }
  }, [isLoading]);
  const handleSerch = (e) => {
    e.preventDefault();
    if (search != "") {
      setData(null);
      setSearchCount(0);
      setIsLoading(true);
    }
  }
  return (
    <section
      className={` w-full  relative z-40 pt-28 flex flex-col justify-center items-center ${
        searchCount != 0 && "justify-start"
      }`}
    >
      <article>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-28 w-full bg-gray-200 shadow-sm shadow-gray-600 p-4 gap-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Search for a movie
          </h1>
          <form onSubmit={handleSerch} className="flex justify-center items-center w-full gap-4">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="sm:w-[50%] h-10 rounded-lg bg-white p-2 mt
            -4"
              type="text"
              placeholder="Search for a movie"
            />
            <button
              onClick={handleSerch}
              className="text-3xl h-10 w-10 flex justify-center items-center rounded-full bg-white hover:bg-cyan-300 hover:text-white duration-200"
            >
              <MdManageSearch />
            </button>
          </form>
        </div>
      </article>
      {searchCount != 0 && !error ? (
        <SearchRespose data={data} />
      ) : (
        <div className="flex justify-center items-center h-[60vh]">
          {isLoading ? (
            <span className="text-xl font-semibold text-gray-500">
              <MutatingDots
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
          ) : (
            <>
              {!error ? (
                <span className="hi p-20 flex-col justify-center items-center">
                  <img
                    src={SearchIllustration}
                    loading="lazy"
                    fetchPriority="high"
                    alt="can't load"
                  />
                  <p className="text-xl font-semibold">
                    Search Your Favourite movies here!
                  </p>
                </span>
              ) : (
                <span className="flex p-20 flex-col justify-center items-center">
                  <img
                    className="scale-110 h-96"
                    src={ErrorIllustration}
                    loading="lazy"
                    fetchPriority="high"
                    alt="can't load"
                  />
                  <p className="text-xl font-semibold">
                    Unable to find any results...
                  </p>
                </span>
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchBox;
