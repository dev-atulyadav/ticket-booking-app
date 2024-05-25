import React from "react";
import Logo from "../../../public/logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 z-20 w-full bg-white p-4 border-b border-black flex justify-between items-center">
      <Link to="/" className="h-10 sm:h-12">
        <img src={Logo} className="h-full" alt="can't load image" />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
