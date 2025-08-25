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
    <div className="max-w-5xl mx-auto px-4 mt-20 text-white">
      <h2 className="text-2xl font-semibold mb-8">Trailer</h2>
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
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
