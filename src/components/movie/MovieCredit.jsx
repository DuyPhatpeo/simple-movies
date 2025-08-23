import React from "react";

const MovieCredit = ({ credits }) => {
  const casts = credits?.cast?.slice(0, 6) || [];
  if (casts.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 text-white">
      <h2 className="text-2xl font-semibold mb-8">Casts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {casts.map((actor) => (
          <div key={actor.cast_id} className="flex flex-col items-center">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={actor.name}
              className="w-full h-[220px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 font-medium">{actor.name}</p>
            <p className="text-sm text-gray-400">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredit;
