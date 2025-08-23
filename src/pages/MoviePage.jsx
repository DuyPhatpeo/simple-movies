import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "@components/movie/MovieCard";
import { FiSearch } from "react-icons/fi";
const MoviesPage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=c636315d4d2f58e0941242e787a663fb`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-5">
        <div className="flex-1 flex">
          <input
            type="text"
            className="flex-1 bg-slate-800 text-white border border-gray-600 rounded-l-full py-2 px-4 
                 focus:outline-none focus:border-pink-500 transition-colors duration-200"
            placeholder="Search movies..."
          />
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white rounded-r-full px-5 flex items-center justify-center
                 transition-colors duration-200"
          >
            <FiSearch className="text-lg" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 ? (
          movies.map((item) => <MovieCard key={item.id} item={item} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
