import React from "react";
import useSWR from "swr";
import { fetcher, apiKey, tmdbAPI } from "@api/config";
import { useNavigate } from "react-router-dom";

const MovieSimilar = ({ movieId }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  const navigate = useNavigate();
  if (!data?.results?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Similar Movies</h2>
      <div className="flex flex-col gap-4">
        {data.results.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="flex gap-3 items-center cursor-pointer hover:bg-gray-800/40 p-2 rounded-lg transition"
            onClick={() => navigate(`/movies/${item.id}`)}
          >
            <img
              src={tmdbAPI.getImage(item.poster_path, "w200")}
              alt={item.title}
              className="w-16 h-24 object-cover rounded-md flex-shrink-0"
            />
            <div className="flex flex-col">
              <h3 className="text-sm font-medium leading-tight line-clamp-2">
                {item.title}
              </h3>
              <span className="text-xs text-gray-400">
                {item.release_date?.slice(0, 4) || "N/A"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSimilar;
