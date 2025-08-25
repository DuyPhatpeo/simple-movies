import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@api/config";

import MovieBackdrop from "@components/movie/MovieBackdrop";
import MovieInfo from "@components/movie/MovieInfo";
import MovieCredit from "@components/movie/MovieCredit";
import MovieVideo from "@components/movie/MovieVideo";
import MovieSimilar from "@components/movie/MovieSimilar";
import MovieComments from "@components/movie/MovieComments";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);

  if (!data) return null;

  return (
    <Fragment>
      {/* Background */}
      <MovieBackdrop backdropPath={data.backdrop_path} />

      <div className="max-w-7xl mx-auto px-4 text-white grid grid-cols-1 lg:grid-cols-4 gap-10 mt-8">
        {/* LEFT SIDE: main content */}
        <div className="lg:col-span-3 flex flex-col gap-10">
          {/* Movie Info */}
          <MovieInfo movie={data} />
          <h2 className="text-4xl font-bold mb-8 text-center mt-10">Trailer</h2>

          {/* Trailer */}
          <MovieVideo movieId={movieId} />

          {/* Casts */}
          <MovieCredit credits={data.credits} />

          {/* Comments */}
          <MovieComments />
        </div>

        {/* RIGHT SIDE: similar movies */}
        <aside className="lg:col-span-1">
          <MovieSimilar movieId={movieId} />
        </aside>
      </div>
    </Fragment>
  );
};

export default MovieDetailPage;
