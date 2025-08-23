import { Routes, Route } from "react-router-dom";
import Main from "@components/layout/Main";
import HomePage from "@pages/HomePage";
import "swiper/css";
import MoviePage from "@pages/MoviePage";
import MovieDetailPage from "@pages/MovieDetailPage";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
