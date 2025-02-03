import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";
import Header from "./components/header/Header";
import { trendsMovies } from "./assets/API";
import Loader from './components/loader/Loader';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendsMovies = async () => {
      try {
        setLoading(true);
        const data = await trendsMovies();
        setTrends(data);
        
      } catch (err) {
        console.log(err);
        
      } finally {
        setLoading(false);
        
      }
    };
    fetchTrendsMovies()
  }, []);

  return (
    <>
      <Header />
      
      <Suspense fallback={loading && <Loader />}>
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
