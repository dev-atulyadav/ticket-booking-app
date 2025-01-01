import React from "react";
import UserBtn from "./UserBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./Logout";
import { IoSearch } from "react-icons/io5";
import User from "./User/User";

const Nav = () => {
  const navLinks = useSelector((state) => state.navLinks);
  const { user, isLoggedIn } = useSelector((state) => state.user);
  return (
    <nav
      className={`flex justify-center items-center ${
        isLoggedIn ? "gap-6" : "gap-2 md:gap-14 "
      }`}
    >
      <ul className="hidden md:flex justify-center items-center gap-6 font-semibold uppercase relative">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="hover:text-sky-400 transition-all duration-500"
              to={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="">
          <Link
          to="search"
          className="p-2 hover:bg-sky-400 duration-200 hover:text-white rounded-full border border-black hover:border-sky-400 flex justify-center items-center gap-1 ">
            <p>Search</p>
            <IoSearch className="text-xl" />
          </Link>
        </li>
      </ul>
          <Link
          to="search"
          className="p-2 hover:bg-sky-400 duration-200 hover:text-white rounded-full border border-black hover:border-sky-400 md:hidden">
            <IoSearch className="text-xl" />
          </Link>
      {isLoggedIn ? <User /> : <UserBtn />}
    </nav>
  );
};

export default Nav;
