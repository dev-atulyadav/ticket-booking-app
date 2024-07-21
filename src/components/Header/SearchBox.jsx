import React, { useEffect, useState } from "react";
import { MdManageSearch } from "react-icons/md";
import { fetchDataFromApi } from "../../utils/api";
import SearchRespose from "../Details/SearchRespose";
import SearchIllustration from "../../assets/search.svg";
import { MutatingDots } from "react-loader-spinner";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let url = `/search/multi?query=${search}`;
    if (search != "") {
      fetchDataFromApi(url).then((res) =>
        console.log(
          res.results,
          setData(res.results == undefined ? [] : res.results)
        )
      );
    }
  }, [searchCount]);
  return (
    <section className={` w-full  relative z-40 pt-28 flex flex-col justify-center items-center ${
     searchCount!=0 &&
      "justify-start"}`}>
      <article>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-28 w-full bg-gray-200 shadow-sm shadow-gray-600 p-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Search for a movie
          </h1>
          <div className="flex justify-center items-center w-full gap-4">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-[50%] h-10 rounded-lg bg-gray-100 p-2 mt
            -4"
              type="text"
              placeholder="Search for a movie"
            />
            <button
              onClick={() => {
                if (search != "") {
                  setSearchCount(searchCount + 1);
                  setIsLoading(true);
                }
              }}
              className="text-3xl h-10 w-10 flex justify-center items-center rounded-full bg-white hover:bg-cyan-300 hover:text-white duration-200"
            >
              <MdManageSearch />
            </button>
          </div>
        </div>
      </article>
      {searchCount != 0 ? (
        
          <SearchRespose data={data} />
          
       
      ) : (
        <span className="flex p-20 flex-col justify-center items-center">
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
      )}
    </section>
  );
};

export default SearchBox;
