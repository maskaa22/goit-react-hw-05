import c from "./HomePage.module.css";
import MovieList from "../../components/movieList/MovieList";
import { useEffect, useState } from "react";
import { trendsMovies } from "../../assets/API";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Loader from "../../components/loader/Loader";

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTrendsMovies = async () => {
      try {
        setLoading(true);
        const data = await trendsMovies();
        setTrends(data);
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendsMovies();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className={c.title}>Trending today</h1>
        {loading && <Loader />}
        <MovieList movies={trends} />
      </div>
      {error && <ErrorMessage errorMessage={errorMessage} />}
    </>
  );
};
export default HomePage;
