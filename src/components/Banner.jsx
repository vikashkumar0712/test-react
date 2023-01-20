import React, { useState, useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import axios from "axios";
function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_GET_MOVIES}${process.env.REACT_APP_TMDB_API_KEY}`
      )
      .then((res) => {
        const randomMovie = Math.floor(Math.random() * res.data.results.length);
        setMovie(res.data.results[randomMovie]);
      });
  }, []);

  return (
    <>
      <div className="h-[40vh] md:h-[60vh] mt-20">
        {Object.keys(movie).length === 0 ? (
          <div className="flex items-center justify-center mt-40 md:mt-60">
            <MutatingDots
              height="100"
              width="100"
              color="#2192FF"
              secondaryColor="#2192FF"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div
            className={`bg-[url(${process.env.REACT_APP_BASE_IMG_URL_BANNER}${movie.backdrop_path})] h-[40vh] md:h-[60vh] text-white bg-cover bg-top flex items-end mt-20`}
          >
            <div
              className={`text-xl md:text-3xl p-4 bg-gray-900  bg-opacity-50 w-full flex justify-center`}
            >
              {movie.title}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Banner;
