import Banner from "@components/banner/Banner";
import MovieList from "@components/movie/MovieList";
import React, { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="movies-layou page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layou page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Top rated
        </h2>
        <MovieList types="top_rated"></MovieList>
      </section>
      <section className="movies-layou page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Trending
        </h2>
        <MovieList types="popular"></MovieList>
      </section>
      <section className="movies-layou page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Up Coming
        </h2>
        <MovieList types="upcoming"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
