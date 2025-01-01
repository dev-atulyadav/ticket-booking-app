import React from "react";
import { CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <Link
      to="/my-profile"
      className="border-2 rounded-full p-1 hover:bg-sky-500 hover:text-white text-sky-500 duration-200 hover: border-sky-500"
    >
      <CiUser className="text-3xl" />
    </Link>
  );
};

export default User;
