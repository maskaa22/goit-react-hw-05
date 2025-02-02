import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";
import Header from "./components/header/Header";
import { trendsMovies } from "./assets/API";

const MovieCasts = lazy(() => import("./components/movieCasts/MovieCasts"));
const MovieReviews = lazy(() =>
  import("./components/movieReviews/MovieReviews")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchTrendsMovies = async () => {
      try {
        const data = await trendsMovies();
        setTrends(data);
        
      } catch (err) {
        console.log(err);
        
      } finally {
        // console.log('Loading....');
        
      }
    };
    fetchTrendsMovies()
  }, []);

  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage movies={trends} />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCasts />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
