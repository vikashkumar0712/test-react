import React from "react";
import Logo from "../logo.png";
function Navbar() {
  return (
    <>
      <div className={`border pl-8 flex space-x-8 items-center py-4`}>
        <img src={Logo} alt={`Logo`} className={`object-fill h-12 w-12`} />
        <div className={`text-blue-400 font-bold text-2xl`}>Movies</div>
        <div className={`text-blue-400 font-bold text-2xl`}>Favourites</div>
      </div>
    </>
  );
}

export default Navbar;
