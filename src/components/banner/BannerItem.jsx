import React from "react";
import { useNavigate } from "react-router-dom";

const BannerItem = ({ item, genreMap }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-full rounded-lg relative"
      onClick={() => navigate(`/movies/${item.id}`)}
    >
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt={item.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-3">{item.title}</h2>

        {/* genres real */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {item.genre_ids?.slice(0, 3).map((id) => (
            <span
              key={id}
              className="px-5 py-2 rounded-full border border-white/30 text-white text-sm md:text-base font-medium bg-white/10 hover:bg-white/20 transition"
            >
              {genreMap[id]}
            </span>
          ))}
        </div>

        <button
          onClick={() => navigate(`/movies/${item.id}`)}
          className="py-3 px-6 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
