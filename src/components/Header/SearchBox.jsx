import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdManageSearch } from "react-icons/md";
import { fetchDataFromApi } from "../../utils/api";
import SearchRespose from "../Details/SearchRespose";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchError, setSearchError] = useState(false);

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
  console.log(searchCount);
  return (
    <section className="absolute h-screen w-full bg-[#00000090] backdrop-blur-[3px] z-40">
      <article>
        <div
          className="flex flex-col items-center justify-center h-full w-full bg-white/50
        backdrop-blur-[3px] rounded-b-xl p-4"
        >
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
                search != "" && setSearchCount(searchCount + 1);
              }}
              className="text-3xl h-10 w-10 flex justify-center items-center rounded-full bg-white hover:bg-cyan-300 hover:text-white duration-200"
            >
              <MdManageSearch />
            </button>
          </div>
        </div>
      </article>
      {searchCount != 0 && <SearchRespose data={data} />}
    </section>
  );
};

export default SearchBox;
