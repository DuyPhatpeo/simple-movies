import { tmdbAPI } from "@/config";
import React from "react";
import { FaStar, FaPlay } from "react-icons/fa";
import { MdCalendarToday, MdAccessTime } from "react-icons/md";

const MovieInfo = ({ movie }) => {
  const {
    title,
    overview,
    release_date,
    vote_average,
    poster_path,
    genres = [],
    runtime,
    production_countries = [],
    production_companies = [],
    credits,
  } = movie;

  const directors =
    credits?.crew?.filter((c) => c.job === "Director")?.map((d) => d.name) ||
    [];
  const countries = production_countries.map((c) => c.name).join(", ");
  const companies = production_companies.map((c) => c.name).join(", ");

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Poster */}
        <div className="flex-shrink-0 w-[260px] lg:w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src={tmdbAPI.getImage(poster_path)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col text-white">
          {/* Title & Rating */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
            <div className="flex items-center gap-2 text-yellow-400 text-lg">
              <FaStar /> {vote_average?.toFixed?.(1) ?? vote_average}
            </div>
          </div>

          {/* Year & Runtime */}
          <div className="flex flex-wrap gap-4 mt-2 text-gray-300 text-sm lg:text-base">
            <span className="flex items-center gap-2">
              <MdCalendarToday />{" "}
              {release_date ? new Date(release_date).getFullYear() : "N/A"}
            </span>
            {runtime && (
              <span className="flex items-center gap-2">
                <MdAccessTime /> {Math.floor(runtime / 60)}h {runtime % 60}min
              </span>
            )}
          </div>

          {/* Genres */}
          {genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-1 text-sm rounded-full border border-purple-500 text-purple-300 bg-purple-500/20 font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Overview */}
          {overview && (
            <p className="text-gray-300 leading-relaxed mt-4 text-sm lg:text-base">
              {overview}
            </p>
          )}

          {/* Other Info */}
          <div className="mt-4 flex flex-col gap-2 text-gray-300 text-sm lg:text-base">
            {countries && (
              <span>
                <strong>Country:</strong> {countries}
              </span>
            )}
            {companies && (
              <span>
                <strong>Production:</strong> {companies}
              </span>
            )}
            {directors.length > 0 && (
              <span>
                <strong>Director:</strong> {directors.join(", ")}
              </span>
            )}
          </div>

          {/* Watch Now Button */}
          <button className="mt-6 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold text-white inline-flex items-center gap-3 shadow-lg">
            <FaPlay size={16} /> Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
