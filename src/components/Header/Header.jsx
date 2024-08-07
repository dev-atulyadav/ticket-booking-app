import React from "react";
import Logo from "../../assets/logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-full bg-white p-4 border-b border-black flex justify-between items-center">
      <Link to="/" className="h-10 sm:h-12">
        <img src={Logo} className="h-full" alt="can't load image" />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
