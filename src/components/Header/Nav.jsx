import React from "react";
import UserBtn from "./UserBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const navLinks = useSelector((state) => state.navLinks);
  return (
    <nav className="flex justify-center items-center gap-14">
      <ul className="hidden md:flex justify-center items-center gap-6 font-semibold uppercase">
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
      </ul>
      <UserBtn />
    </nav>
  );
};

export default Nav;
