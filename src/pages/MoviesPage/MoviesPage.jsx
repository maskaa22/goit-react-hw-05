import Search from "../../components/search/Search";
import { useEffect, useState } from "react";
import { serchMovie } from "../../assets/API";
import { useSearchParams } from "react-router-dom";
import Movies from "../../components/movies/Movies";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSearchFlag, setSearchFlag] = useState(false);
  const [errorSearchMessage, setErrorSearchMessage] = useState("");

  const query = searchParams.get("query");

  useEffect(() => {
    const fetchTrendsMovies = async () => {
      try {
        if (!query) return;
        setLoading(true);
        const data = await serchMovie(query);
        setMovies(data);
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendsMovies();
  }, [query]);

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div className="container">
      <Search
        onSubmit={updateQueryString}
        err={setErrorSearchMessage}
        flag={setSearchFlag}
      />
      {error ||
        (errorSearchFlag && (
          <ErrorMessage
            errorMessage={
              errorSearchMessage !== "" ? errorSearchMessage : errorMessage
            }
          />
        ))}
      {loading && <Loader />}
      <Movies movies={movies} />
    </div>
  );
};
export default MoviesPage;
