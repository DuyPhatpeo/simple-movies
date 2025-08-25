import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@api/config";

import WatchVideo from "@/components/watch/WatchVideo";
import WatchInfo from "@/components/watch/WatchInfo";
import MovieCredit from "@components/movie/MovieCredit";
import MovieSimilar from "@components/movie/MovieSimilar";

const WatchPage = () => {
  const { id } = useParams();
  const { data: movie, error } = useSWR(tmdbAPI.getMovieDetails(id), fetcher);

  if (error)
    return (
      <p className="text-red-500 text-center mt-10">
        Failed to load movie data.
      </p>
    );
  if (!movie)
    return <p className="text-gray-400 text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full">
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[750px] xl:h-[800px]">
          <WatchVideo movieId={id} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Info */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <WatchInfo movie={movie} />

          {/* Credits */}
          {movie.credits && (
            <div>
              <MovieCredit credits={movie.credits} />
            </div>
          )}
        </div>

        {/* Right: Similar */}
        <div className="lg:col-span-4">
          <h2 className="text-xl font-bold mb-4">You may also like</h2>
          <MovieSimilar movieId={id} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
