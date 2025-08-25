// WatchInfo.jsx
import { tmdbAPI } from "@api/config";
import React from "react";
import { FaStar, FaPlay } from "react-icons/fa";
import { MdCalendarToday, MdAccessTime } from "react-icons/md";

const WatchInfo = ({ movie }) => {
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
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Poster */}
        <div className="flex-shrink-0 w-[180px] lg:w-[220px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <img
            src={tmdbAPI.getImage(poster_path)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col text-white">
          {/* Title & Rating */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
            <div className="flex items-center gap-1 text-yellow-400 text-base">
              <FaStar /> {vote_average?.toFixed?.(1) ?? vote_average}
            </div>
          </div>

          {/* Year & Runtime */}
          <div className="flex flex-wrap gap-3 mt-1 text-gray-300 text-xs lg:text-sm">
            <span className="flex items-center gap-1">
              <MdCalendarToday />{" "}
              {release_date ? new Date(release_date).getFullYear() : "N/A"}
            </span>
            {runtime && (
              <span className="flex items-center gap-1">
                <MdAccessTime /> {Math.floor(runtime / 60)}h {runtime % 60}m
              </span>
            )}
          </div>

          {/* Genres */}
          {genres.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-2 py-0.5 text-xs rounded-full border border-emerald-500 text-emerald-300 bg-emerald-500/20 font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Overview */}
          {overview && (
            <p className="text-gray-300 leading-relaxed mt-3 text-sm lg:text-base">
              {overview}
            </p>
          )}

          {/* Other Info */}
          <div className="mt-3 flex flex-col gap-1 text-gray-300 text-xs lg:text-sm">
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
        </div>
      </div>
    </div>
  );
};

export default WatchInfo;
