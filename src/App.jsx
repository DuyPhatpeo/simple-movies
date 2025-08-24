import { Routes, Route } from "react-router-dom";
import Main from "@components/layout/Main";
import HomePage from "@pages/HomePage";
import "swiper/css";
import MoviePage from "@pages/MoviePage";
import MovieDetailPage from "@pages/MovieDetailPage";
import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
