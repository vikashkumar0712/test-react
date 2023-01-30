import React, { useState, useEffect } from "react";
import Dropup from "../assets/svgs/dropup.svg";
import Dropdown from "../assets/svgs/dropdown.svg";
import Pagination from "./Pagination";
function Favourites() {
  const genresIds = {
    0: "All Genres",
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const [currGenre, setCurrGenre] = useState(genresIds[0]);
  let [favourites, setFavourites] = useState([]);
  let [genres, setGenres] = useState([]);
  let [rating, setRating] = useState(0);
  let [popularity, setPopularity] = useState(0);
  let [search, setSearch] = useState("");
  let [limit, setLimit] = useState(5);
  let [page, setPage] = useState(1);

  // for getting saved favourites movies from the browser local storage
  useEffect(() => {
    const savedFavourites =
      JSON.parse(localStorage.getItem("localfFavourites")) || [];
    setFavourites([...savedFavourites]);
  }, []);

  // for getting saved favourites movies genres from the browser local storage
  useEffect(() => {
    const availableGenres = favourites.map(
      (movie) => genresIds[movie.genre_ids[0]]
    );
    setGenres([genresIds[0], ...new Set(availableGenres)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourites]);

  const removeFavourite = (movie) => {
    const removedFavourite = favourites.filter(
      (isMovie) => isMovie.id !== movie.id
    );
    setFavourites([...removedFavourite]);
    localStorage.setItem("localfFavourites", JSON.stringify(removedFavourite));
  };

  // Movies filtered by the current movie genre
  let filteredMovies =
    currGenre === genresIds[0]
      ? favourites
      : favourites.filter(
          (movie) => genresIds[movie.genre_ids[0]] === currGenre
        );

  // Sorting on rating
  if (rating === 1) {
    filteredMovies = filteredMovies.sort(
      (A, B) => A.vote_average - B.vote_average
    );
  }
  if (rating === -1) {
    filteredMovies = filteredMovies.sort(
      (A, B) => B.vote_average - A.vote_average
    );
  }

  // Sorting on popularity
  if (popularity === 1) {
    filteredMovies = filteredMovies.sort((A, B) => A.popularity - B.popularity);
  }
  if (popularity === -1) {
    filteredMovies = filteredMovies.sort((A, B) => B.popularity - A.popularity);
  }

  // searching for movies
  filteredMovies = filteredMovies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const query = search.toLowerCase();
    return movieTitle.includes(query);
  });

  // pagination
  let totalPages = Math.ceil(filteredMovies.length / limit);
  let startPage = (page - 1) * limit;
  let endPage = Number(startPage) + Number(limit);
  filteredMovies = filteredMovies.slice(startPage, endPage);

  const prev = () => {
    page > 1 ? setPage(page - 1) : (page = 1);
  };

  const next = () => {
    if (page < totalPages) setPage(page + 1);
  };
  return (
    <>
      <div className="mt-24">
        <div className="flex justify-center flex-wrap space-x-5">
          {genres.map((genre) => {
            return (
              <button
                className={
                  currGenre === genre
                    ? "text-lg p-1 px-2 bg-blue-400 text-white rounded-full font-bold mb-2"
                    : "text-lg p-1 px-2 bg-gray-400 text-white rounded-full font-bold mb-2 hover:bg-blue-400"
                }
                onClick={() => {
                  setPage(1);
                  setCurrGenre(genre);
                }}
              >
                {genre}
              </button>
            );
          })}
        </div>
        <div className={`text-center`}>
          <input
            type={"text"}
            placeholder="Search"
            className={`border-2 rounded-full hover:border-blue-400 text-center p-1 m-2`}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <input
            type={"number"}
            placeholder="Rows"
            className={`border-2 rounded-full hover:border-blue-400 text-center p-1 m-2`}
            value={limit}
            onChange={(event) => setLimit(event.target.value)}
          />
        </div>
        <div className="flex flex-col m-4">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex">
                          <img
                            src={Dropup}
                            className="h-5 cursor-pointer"
                            alt="up-button"
                            onClick={() => {
                              setPopularity(0);
                              setRating(-1);
                            }}
                          />
                          Rating
                          <img
                            src={Dropdown}
                            className="h-5 cursor-pointer"
                            alt="down-button"
                            onClick={() => {
                              setPopularity(0);
                              setRating(1);
                            }}
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex">
                          <img
                            src={Dropup}
                            className="h-5 cursor-pointer"
                            alt="up-button"
                            onClick={() => {
                              setRating(0);
                              setPopularity(-1);
                            }}
                          />
                          Popularity
                          <img
                            src={Dropdown}
                            className="h-5 cursor-pointer"
                            alt="down-button"
                            onClick={() => {
                              setRating(0);
                              setPopularity(1);
                            }}
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Genre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMovies.map((movie) => (
                      <tr key={movie.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={`${process.env.REACT_APP_BASE_IMG_URL_CARD}${movie.poster_path}`}
                                alt="movie_poster"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {movie.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-14 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {movie.vote_average.toFixed(1)}
                          </div>
                        </td>
                        <td className="px-16 py-4 whitespace-nowrap">
                          {Math.floor(movie.popularity)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            {genresIds[movie.genre_ids[0]]}
                          </span>
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          onClick={() => removeFavourite(movie)}
                        >
                          <span
                            className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-red-100 text-red-800 cursor-pointer hover:bg-red-800 hover:text-white"
                          >
                            Remove
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Pagination propPrev={prev} propPage={page} propNext={next} />
        </div>
      </div>
    </>
  );
}

export default Favourites;
