import React, { useState, useEffect } from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
function Movies() {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=a222d7aaa31f205703620f5a31bf0121"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  });

  return (
    <>
      <div className="mb-8 text-center">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">
          Trending Movies
        </div>
        {movies.length === 0 ? (
          <div className="flex justify-center">
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
          <div className="flex flex-wrap justify-center">
            {movies.map((movie) => {
              return (
                <div
                  className={`bg-[url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})] h-[25vh] w-[170px] md:h-[30vh] md:w-[200px] text-white bg-cover bg-no-repeat bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
                >
                  <div className="w-full bg-gray-900 py-2 text-center rounded-b-xl">
                    {movie.title}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Movies;
