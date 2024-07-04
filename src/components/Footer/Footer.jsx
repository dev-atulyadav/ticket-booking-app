import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const footerLinks = useSelector((state) => state.footerLinks);
  console.log(footerLinks);
  return (
    <footer className="my-8 border-t-2 border-dashed border-black p-5">
      <article className="flex w-[90vw] sm:w-auto flex-col justify-center items-center gap-5">
        <AnchorLink href="/home" className="self-start">
          <img className="h-10" src={Logo} alt="can't load" />
        </AnchorLink>
        <main>
          <ul className="flex w-full flex-wrap gap-8 justify-center items-center font-semibold uppercase">
            {footerLinks.map((link, index) => (
              <li key={index} className="hover:underline duration-200 hover:text-sky-500">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </main>
      </article>
    </footer>
  );
};

export default Footer;
