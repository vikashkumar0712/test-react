import React from "react";
import Image from "../banner.png"
function Banner() {
  return (
    <>
      <div>
        <div className={`bg-[url(${Image})] h-[60vh] text-white bg-cover bg-center flex items-end`}>
        <div className={`text-3xl p-4 bg-gray-900  bg-opacity-50 w-full flex justify-center`}>Spider Man : No Way Home</div>
        </div>
      </div>
    </>
  );
}

export default Banner;