import React from "react";
import Image from "../banner.png";
function Movies() {
  return (
    <>
      <div className="mb-8">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">
          Trending Movies
        </div>
        <div className="flex flex-wrap justify-center">
          <div
            className={`bg-[url(${Image})] h-[25vh] w-[170px] md:h-[30vh] md:w-[200px] text-white bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
          >
            <div className="w-full bg-gray-900 py-2 text-center rounded-b-xl">
              Spider Man
            </div>
          </div>

          <div
            className={`bg-[url(${Image})] h-[25vh] w-[170px] md:h-[30vh] md:w-[200px] text-white bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
          >
            <div className="w-full bg-gray-900 py-2 text-center rounded-b-xl">
              Spider Man
            </div>
          </div>

          <div
            className={`bg-[url(${Image})] h-[25vh] w-[170px] md:h-[30vh] md:w-[200px] text-white bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
          >
            <div className="w-full bg-gray-900 py-2 text-center rounded-b-xl">
              Spider Man
            </div>
          </div>

          <div
            className={`bg-[url(${Image})] h-[25vh] w-[170px] md:h-[30vh] md:w-[200px] text-white bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
          >
            <div className="w-full bg-gray-900 py-2 text-center rounded-b-xl">
              Spider Man
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
