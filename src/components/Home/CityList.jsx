import React from "react";
import {motion} from "framer-motion"

const CityList = ({states, userCity, handleCity }) => {
  
  return (
    <motion.ul 
    initial={{
      y: -100,
      opacity: 0
    }}
    animate={{
      y: 0,
      opacity: 1
      }}
      transition={{duration: 0.5}}
    className="bg-white w-[50vw] self-start h-[50vh] overflow-y-scroll rounded-xl mt-4 shadow-xl">
      {states.map((state, index) =>
        state.city.includes(userCity) || state.state.includes(userCity) ? (
          <li
            key={index}
            onClick={() => {
              handleCity(`${state.city}, ${state.state}`);
            }}
            className="px-4 capitalize rounded-lg cursor-pointer py-4 border-b border-gray-200 duration-150 hover:bg-gray-100"
          >
            {state.city}, {state.state}
          </li>
        ) : (
          ""
        )
      )}
    </motion.ul>
  );
};

export default CityList;
