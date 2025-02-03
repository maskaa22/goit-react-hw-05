import { Link, useLocation } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import c from "./movieDatails.module.css";
import { useEffect, useState } from "react";
import { selectedMovie } from "../../assets/API";
import GenresMovie from "../genresMovie/GenresMovie";
import Progress from "../progress/Progress";
import baseImageUrl from "../../assets/constants";
import { IoMdArrowBack } from "react-icons/io";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const back = location.state ?? "/";

  useEffect(() => {
    const fetchselectedMovie = async () => {
      try {
        setLoading(true);
        const data = await selectedMovie(movieId);
        setMovie(data);
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchselectedMovie();
  }, [movieId]);

  const average = movie && Math.trunc(movie.vote_average) * 10;
  const data = new Date(movie.release_date).getFullYear();

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={errorMessage} />}

      <div
        className={c.box}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${baseImageUrl}${movie.backdrop_path})`,
        }}
      >
        <Link to={back}>
          <IoMdArrowBack className={c.back} />
        </Link>
        <img
          src={`${baseImageUrl}${movie.poster_path}`}
          className={c.img}
          alt={movie.title}
        />
        <div className={c.info}>
          <h2 className={c.title}>
            {movie.original_title} ({movie && data})
          </h2>
          <Progress average={average} />
          <h3 className={c.overview}>Overview</h3>
          <p className={c.textOverview}>{movie.overview}</p>
          <h3 className={c.genres}>Genres</h3>
          <GenresMovie genres={movie.genres} id={movieId} />
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
