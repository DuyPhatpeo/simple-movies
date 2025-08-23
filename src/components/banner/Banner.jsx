import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=c636315d4d2f58e0941242e787a663fb`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[600px] page-container mb-10">
      <Swiper grabCursor={"true"} slidesPerView={"auto"} spaceBetween={30}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-3">{item.title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounde-md">
            Action
          </span>
          <span className="py-2 px-4 border border-white rounde-md">
            Adventure
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-pink-600 text-white font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
