// API config
export const apiKey = "c636315d4d2f58e0941242e787a663fb";
export const tmdbEndpoint = "https://api.themoviedb.org/3";

// Fetcher helper
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// TMDB API
export const tmdbAPI = {
  // Movie lists (popular, top_rated, upcoming, now_playing...)
  getMovieList: (type = "popular", page = 1) =>
    `${tmdbEndpoint}/movie/${type}?api_key=${apiKey}&page=${page}`,

  // Genres
  getGenreList: () => `${tmdbEndpoint}/genre/movie/list?api_key=${apiKey}`,

  // Details (append credits)
  getMovieDetails: (movieId) =>
    `${tmdbEndpoint}/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`,

  // Videos & Similar
  getMovieVideos: (movieId) =>
    `${tmdbEndpoint}/movie/${movieId}/videos?api_key=${apiKey}`,
  getSimilarMovies: (movieId) =>
    `${tmdbEndpoint}/movie/${movieId}/similar?api_key=${apiKey}`,

  // Search
  searchMovie: (query, page = 1) =>
    `${tmdbEndpoint}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}&page=${page}`,

  // Image helper (dynamic size: w300, w500, original...)
  getImage: (path, size = "original") =>
    `https://image.tmdb.org/t/p/${size}/${path}`,

  // Trailer (YouTube)
  getMovieTrailer: (youtubeKey) =>
    `https://www.youtube.com/embed/${youtubeKey}`,
};
