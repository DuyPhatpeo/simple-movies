import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Main from "@components/layout/Main";
import "swiper/css";
import Loading from "@components/common/Loading"; // import loading

// Lazy load pages
const HomePage = lazy(() => import("@pages/HomePage"));
const MoviePage = lazy(() => import("@pages/MoviePage"));
const MovieDetailPage = lazy(() => import("@pages/MovieDetailPage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));

function App() {
  const [introLoading, setIntroLoading] = useState(true);

  useEffect(() => {
    // giữ màn hình intro 2s trước khi vào app
    const timer = setTimeout(() => setIntroLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (introLoading) {
    // màn hình intro
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
