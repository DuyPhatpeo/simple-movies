import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@api/config";
const MovieVideo = ({ movieId }) => {
  const { data } = useSWR(tmdbAPI.getMovieVideos(movieId), fetcher);
  if (!data?.results?.length) return null;

  const trailer = data.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  if (!trailer) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-20 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Trailer</h2>
      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src={tmdbAPI.getMovieTrailer(trailer.key)}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieVideo;
