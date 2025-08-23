import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieList from "@components/movie/MovieList";
import Banner from "@components/banner/Banner";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white">
        <span className="text-pink-600">Home</span>
        <span>Movies</span>
      </header>
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
    </Fragment>
  );
}

export default App;
