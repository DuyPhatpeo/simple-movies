// API config
export const apiKey = "c636315d4d2f58e0941242e787a663fb";
export const tmdbEndpoint = "https://api.themoviedb.org/3";

// Fetcher helper
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// TMDB API
export const tmdbAPI = {
  getPopularMovies: (page = 1) =>
    `${tmdbEndpoint}/movie/popular?api_key=${apiKey}&page=${page}`,

  getMovieList: (type) => `${tmdbEndpoint}/movie/${type}?api_key=${apiKey}`,

  getGenreList: () => `${tmdbEndpoint}/genre/movie/list?api_key=${apiKey}`,

  getMovieDetails: (movieId) =>
    `${tmdbEndpoint}/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`,

  getMovieVideos: (movieId) =>
    `${tmdbEndpoint}/movie/${movieId}/videos?api_key=${apiKey}`,

  getSimilarMovies: (movieId) =>
    `${tmdbEndpoint}/movie/${movieId}/similar?api_key=${apiKey}`,

  searchMovie: (query, page = 1) =>
    `${tmdbEndpoint}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}&page=${page}`,
  getImage: (path) => `https://image.tmdb.org/t/p/original/${path}`,

  getImageW300: (path) => `https://image.tmdb.org/t/p/w300/${path}`,

  getMovieTrailer: (youtubeKey) =>
    `https://www.youtube.com/embed/${youtubeKey}`,
};
