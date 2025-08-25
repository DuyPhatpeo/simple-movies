import MovieBackdrop from "@components/movie/MovieBackdrop";
import MovieInfo from "@components/movie/MovieInfo";
import MovieCredit from "@components/movie/MovieCredit";
import MovieVideo from "@components/movie/MovieVideo";
import MovieSimilar from "@components/movie/MovieSimilar";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);

  if (!data) return null;

  return (
    <Fragment>
      {/* Background */}
      <MovieBackdrop backdropPath={data.backdrop_path} />

      {/* Movie Info */}
      <MovieInfo movie={data} />

      {/* Casts */}
      <MovieCredit credits={data.credits} />

      {/* Trailer */}
      <MovieVideo movieId={movieId} />

      {/* Similar Movies */}
      <MovieSimilar movieId={movieId} />
    </Fragment>
  );
};

export default MovieDetailPage;
