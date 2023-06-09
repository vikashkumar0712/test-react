import React, { useState, useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import Pagination from "./Pagination";
import axios from "axios";

function Movies() {
  // State Management
  const [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1);
  let [hover, setHover] = useState(null);
  let [favourites, setFavourites] = useState([]);

  // API management
  useEffect(() => {
    const CURRENT_PAGE = `&page=${page}`;

    axios
      .get(
        `${process.env.REACT_APP_GET_MOVIES}${process.env.REACT_APP_TMDB_API_KEY}${CURRENT_PAGE}`
      )
      .then((res) => {
        const movies = res.data.results;
        setMovies(movies);
        const savedFavourites =
          JSON.parse(localStorage.getItem("localfFavourites")) || [];
        setFavourites([...savedFavourites]);
      });

    // API dependended on the current --> page
  }, [page]);

  // Pagination methods
  const next = () => {
    setPage(page + 1);
  };

  const prev = () => {
    page > 1 && setPage(page - 1);
  };

  const addFavourite = (movie) => {
    const addedFavourite = [...favourites, movie];
    setFavourites([...addedFavourite]);
    localStorage.setItem("localfFavourites", JSON.stringify(addedFavourite));
  };

  const removeFavourite = (movie) => {
    const removedFavourite = favourites.filter(
      (isMovie) => isMovie.id !== movie.id
    );
    setFavourites([...removedFavourite]);
    localStorage.setItem("localfFavourites", JSON.stringify(removedFavourite));
  };

  // Component Handler
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
                  className={`bg-[url(${process.env.REACT_APP_BASE_IMG_URL_CARD}${movie.poster_path})] 
                  h-[30vh] w-[140px] md:h-[35vh] md:w-[200px] text-white bg-cover bg-no-repeat bg-top 
                  rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 relative`}
                  key={movie.id}
                  onMouseEnter={() => setHover(movie.id)}
                  onMouseLeave={() => setHover(null)}
                >
                  {hover === movie.id && (
                    <>
                      {!favourites.find(
                        (isMovie) => isMovie.id === movie.id
                      ) ? (
                        <div
                          className={`absolute top-2 right-2 text-2xl
                     rounded-3xl p-1 backdrop-blur-xl drop-shadow-md cursor-pointer`}
                          onClick={() => addFavourite(movie)}
                        >
                          💗
                        </div>
                      ) : (
                        <div
                          className={`absolute top-2 right-2 text-2xl
                   rounded-3xl p-1 backdrop-blur-xl drop-shadow-md cursor-pointer`}
                          onClick={() => removeFavourite(movie)}
                        >
                          ❌
                        </div>
                      )}
                    </>
                  )}
                  <div
                    className={`w-full bg-gray-900 py-2 text-center rounded-b-xl`}
                    key={movie.id}
                  >
                    {movie.title}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Pagination propPrev={prev} propPage={page} propNext={next} />
    </>
  );
}

export default Movies;
