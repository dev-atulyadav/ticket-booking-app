import React, { useEffect, useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import CityList from "./CityList";
import axios from "axios";

const SelectCity = ({ handleShowLocOption }) => {
  const [userCity, setUserCity] = useState("");
  const [showList, setShowList] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [states, setStates] = useState([]);
  useEffect(() => {
    let url =
      "https://raw.githubusercontent.com/thatisuday/indian-cities-database/master/cities.json";
    axios.get(url).then((response) => {
      setStates(response.data);
    });
  }, []);
  const handleCity = (city) => {
    setUserCity(city);
    setShowList(false);
    localStorage.setItem("userLocation", city);
    states.map((state) => {
      if (state.city === city) {
        !handleShowLocOption(state.city) && setShowErr(false);
      }
    });
  };
  const handleInput = (e) => {
    setUserCity(e.target.value);
    setShowList(true);
  };
  return (
    <section className="flex pt-10 justify-start items-center flex-col w-full h-full absolute z-50 bg-[#b8b8b856] backdrop-blur-[3px]">
      <article className="w-[55vw] flex justify-center items-center flex-col gap-6">
        <h2 className="self-start font-bold text-3xl">Select Your City</h2>
        <div className="relative flex justify-center items-center gap-4">
          <input
            className="p-3.5 w-[50vw] rounded-full shadow-xl"
            type="text"
            placeholder="Search Your City"
            value={userCity}
            onChange={handleInput}
          />
          {showErr && (
            <p className="absolute -bottom-6 left-5 capitalize  text-sm text-red-600 font-semibold">
              select vaild location
            </p>
          )}
          <button
            onClick={() => {
              userCity !== "" && handleShowLocOption(userCity);
            }}
            className="p-2.5 text-4xl bg-white rounded-full"
          >
            <RiArrowRightDoubleLine />
          </button>
        </div>
        {showList && (
          <CityList
            states={states}
            userCity={userCity}
            handleCity={handleCity}
          />
        )}
      </article>
    </section>
  );
};

export default SelectCity;
