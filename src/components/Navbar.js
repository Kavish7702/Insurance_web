import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Form from "./Form";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
              ClickGuard Insurance
            </h1>
          </div>
          <ul className="hidden md:flex">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-190}
                duration={500}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="support"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="claim"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Claim
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="px-8 py-3">Sign In</button>
        </div>
        <div className="md:hidden" onClick={navHandleClick}>
          {!nav ? (
            <MenuIcon className="w-5 m-3" />
          ) : (
            <XIcon className="w-5 m-3" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="home" spy={true} smooth={true} offset={1} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-190}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="support"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">Claim</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
