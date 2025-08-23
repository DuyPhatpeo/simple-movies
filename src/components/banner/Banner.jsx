import React from "react";
import useSWR from "swr";
import { fetcher, apiKey } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data: movieData } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    fetcher
  );
  const { data: genreData } = useSWR(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
    fetcher
  );

  const movies = movieData?.results || [];
  const genreList = genreData?.genres || [];

  // map từ id -> name
  const genreMap = {};
  genreList.forEach((g) => (genreMap[g.id] = g.name));

  return (
    <section className="banner h-[800px] page-container mb-10">
      <Swiper grabCursor={"true"} slidesPerView={"auto"} spaceBetween={30}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} genreMap={genreMap} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
