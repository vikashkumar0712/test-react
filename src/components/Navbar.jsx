import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
function Navbar() {

  // Component Handler
  return (
    <>
      <div className={`border pl-8 flex space-x-8 items-center py-4 justify-center bg-white fixed w-full z-10 top-0`}>
        <Link to={'/'}>
        <img src={Logo} alt={`Logo`} className={`object-fill w-12 md:w-15`} />
        </Link>
        <Link to={`/`} className={`text-blue-400 font-bold text-xl md:text-2xl`}>Home</Link>
        <Link to={'/favourites'} className={`text-blue-400 font-bold text-xl md:text-2xl`}>My List</Link>
      </div>
    </>
  );
}

export default Navbar;
