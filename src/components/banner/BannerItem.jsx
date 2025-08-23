import React from "react";
import { useNavigate } from "react-router-dom";

const BannerItem = ({ item, genreMap }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-full rounded-2xl relative cursor-pointer group overflow-hidden"
      onClick={() => navigate(`/movies/${item.id}`)}
    >
      {/* Image */}
      <img
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt={item.title}
        className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl transition-all duration-500"></div>

      {/* Content */}
      <div className="absolute left-6 bottom-6 text-white z-10">
        <h2 className="font-extrabold text-4xl md:text-5xl drop-shadow-lg mb-4">
          {item.title}
        </h2>

        {/* Genres */}
        <div className="flex flex-wrap gap-3 mb-6">
          {item.genre_ids?.slice(0, 3).map((id) => (
            <span
              key={id}
              className="px-4 py-2 rounded-full border border-white/30 text-white text-sm md:text-base font-medium bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all duration-300"
            >
              {genreMap[id]}
            </span>
          ))}
        </div>

        {/* Watch Now button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent parent click
            navigate(`/movies/${item.id}`);
          }}
          className="py-3 px-8 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
