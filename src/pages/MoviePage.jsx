import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@api/config";
import MovieCard from "@components/movie/MovieCard";
import { FiSearch } from "react-icons/fi";
import useDebounce from "@hooks/useDebounce";
import Pagination from "@components/common/Pagination";

const MAX_TMDB_PAGES = 500;

const MoviesPage = () => {
  const [filter, setFilter] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [url, setUrl] = React.useState(tmdbAPI.getMovieList());

  const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1); // reset về trang 1 khi search
  };

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  React.useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.searchMovie(filterDebounce, page));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", page));
    }
  }, [filterDebounce, page]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const movies = data?.results || [];
  const totalPagesRaw = data?.total_pages || 1;
  const totalPages = Math.min(totalPagesRaw, MAX_TMDB_PAGES);

  return (
    <div className="py-10 page-container">
      {/* Search */}
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

      {/* List */}
      <div className="grid grid-cols-4 gap-10">
        {loading ? (
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-emerald-500 mx-auto col-span-4"></div>
        ) : movies.length > 0 ? (
          movies.map((item) => <MovieCard key={item.id} item={item} />)
        ) : filterDebounce ? (
          <p className="text-center col-span-4 text-white">No movies found.</p>
        ) : null}
      </div>

      {/* Pagination */}
      {movies.length > 0 && totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default MoviesPage;
