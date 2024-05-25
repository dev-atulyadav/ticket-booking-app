import React from "react";
import { Link } from "react-router-dom";

const UserBtn = () => {
  return (
    <div className="flex gap-2 sm:gap-4 justify-center items-center text-center">
      <Link className="transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-6 py-2.5 border rounded-lg uppercase font-semibold text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-white">
        Login
      </Link>
      <Link className="transition-all duration-500 text-sm sm:leading-5 sm:text-[16px] px-3 py-2.5 border rounded-lg uppercase font-semibold text-green-400 border-green-400 hover:bg-green-400 hover:text-white">
        Register
      </Link>
    </div>
  );
};

export default UserBtn;
