import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@api/config";

const WatchVideo = ({ movieId }) => {
  const { data } = useSWR(tmdbAPI.getMovieVideos(movieId), fetcher);

  if (!data?.results?.length) return null;

  const trailer = data.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  if (!trailer) return null;

  return (
    <div className="w-full px-4 text-white">
      <div className="w-full max-w-[1400px] mx-auto aspect-video overflow-hidden shadow-2xl">
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

export default WatchVideo;
