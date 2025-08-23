import { Routes, Route } from "react-router-dom";
import Main from "@components/layout/Main";
import HomePage from "@pages/HomePage";
import "swiper/css";
import MoviePage from "@pages/MoviePage";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Route>
    </Routes>
  );
}

export default App;
