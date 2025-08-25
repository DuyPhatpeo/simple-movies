import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@api/config";
import { useNavigate } from "react-router-dom";

const MovieSimilar = ({ movieId }) => {
  const { data } = useSWR(tmdbAPI.getSimilarMovies(movieId), fetcher);
  const navigate = useNavigate();

  if (!data?.results?.length) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 text-white">
      <h2 className="text-2xl font-semibold mb-8">Similar Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.results.slice(0, 10).map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}`)}
            className="flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={
                movie.poster_path
                  ? tmdbAPI.getImage(movie.poster_path, "w300")
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.title}
              className="w-full h-[250px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 font-medium line-clamp-2">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSimilar;
