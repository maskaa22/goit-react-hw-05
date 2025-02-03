import { useEffect, useState } from "react";
import c from "./movieCasts.module.css";
import { selectedMovieCasts } from "../../assets/API";
import { useParams } from "react-router-dom";
import MovieCast from "../movieCast/MovieCast";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

const MovieCasts = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await selectedMovieCasts(movieId);
        setCasts(data);
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={errorMessage} />}
      <ul className={c.list}>
        {casts.map((cast) => (
          <li key={`${movieId}-${cast.name}`} className={c.item}>
            <MovieCast cast={cast} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieCasts;
