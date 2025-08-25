import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@api/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data: movieData } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
  const { data: genreData } = useSWR(tmdbAPI.getGenreList(), fetcher);

  const movies = movieData?.results || [];
  const genreList = genreData?.genres || [];

  const genreMap = {};
  genreList.forEach((g) => (genreMap[g.id] = g.name));

  return (
    <section className="banner h-[800px] page-container mb-10">
      <Swiper
        modules={[Autoplay]} // 👈 add module
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 4000, // 4s chuyển slide
          disableOnInteraction: false, // không tắt khi user kéo
        }}
        loop={true} // 👈 để lặp vô tận
      >
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
