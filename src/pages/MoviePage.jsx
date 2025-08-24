import React from "react";
import useSWR from "swr";
import { fetcher, apiKey } from "../config";
import MovieCard from "@components/movie/MovieCard";
import { FiSearch } from "react-icons/fi";
import useDebounce from "@hooks/useDebounce";
// https://api.themoviedb.org/3/search/movie
const MoviesPage = () => {
  const [filter, setFilter] = React.useState("");
  const [url, setUrl] = React.useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  React.useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}`
      );
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    }
  }, [filterDebounce]);
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-5">
        <div className="flex-1 flex">
          <input
            type="text"
            className="flex-1 bg-slate-800 text-white border border-gray-600 rounded-l-full py-2 px-4 
                 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
            placeholder="Search movies..."
            onChange={handleFilterChange}
          />
          <button
            className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-r-full px-5 flex items-center justify-center
                 transition-colors duration-200"
          >
            <FiSearch className="text-lg" />
          </button>
        </div>
      </div>
      {loading && (
        <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-emerald-500 mx-auto"></div>
      )}
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
