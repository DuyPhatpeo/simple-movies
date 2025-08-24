import React from "react";

const MovieBackdrop = ({ backdropPath, height = "600px" }) => {
  return (
    <div className="w-full relative" style={{ height }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropPath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
    </div>
  );
};

export default MovieBackdrop;
