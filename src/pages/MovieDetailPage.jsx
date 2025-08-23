import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config";
import { FaStar, FaPlay } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import MovieCredit from "@components/movie/MovieCredit";
import MovieVideo from "@components/movie/MovieVideo";
import MovieSimilar from "@components/movie/MovieSimilar";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`,
    fetcher
  );

  if (!data) return null;

  const {
    title,
    overview,
    release_date,
    vote_average,
    backdrop_path,
    poster_path,
    genres = [],
    credits,
  } = data;

  return (
    <Fragment>
      {/* Background */}
      <div className="w-full h-[600px] relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-96 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Poster */}
          <div className="mx-auto lg:mx-0 w-[260px] lg:w-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col text-center lg:text-left text-white">
            <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>

            {genres.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-5 py-2 text-sm lg:text-base rounded-full border border-purple-500 text-purple-300 bg-purple-500/20 font-medium"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <p className="text-gray-300 leading-relaxed mt-6">{overview}</p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-lg text-gray-300 mt-6">
              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-400" size={20} />{" "}
                {vote_average?.toFixed?.(1) ?? vote_average}
              </span>
              <span className="flex items-center gap-2">
                <MdCalendarToday size={18} />{" "}
                {release_date ? new Date(release_date).getFullYear() : "N/A"}
              </span>
            </div>

            <button className="mt-6 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold text-white inline-flex items-center gap-2 mx-auto lg:mx-0">
              <FaPlay size={16} /> Watch Now
            </button>
          </div>
        </div>
      </div>

      {/* Casts */}
      <MovieCredit credits={credits} />

      {/* Trailer */}
      <MovieVideo movieId={movieId} />

      {/* Similar Movies */}
      <MovieSimilar movieId={movieId} />
    </Fragment>
  );
};

export default MovieDetailPage;
