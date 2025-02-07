import c from "./MovieDetailsPage.module.css";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { selectedMovie } from "../../assets/API";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import baseImageUrl from "../../assets/constants";
import { IoMdArrowBack } from "react-icons/io";
import Progress from "../../components/progress/Progress";
import GenresMovie from "../../components/genresMovie/GenresMovie";
import Loader from "../../components/loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const back = location.state ?? "/movies";
  const hrefBack = useRef(back)

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
    <section className="heroMovie">
      <div>
        {loading && <Loader />}
        {error && <ErrorMessage errorMessage={errorMessage} />}

        <div
          className={c.box}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${baseImageUrl}${movie.backdrop_path})`,
          }}
        >
          <Link to={hrefBack.current}>
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
      </div>

      <div className="container">
        <Link to={`/movies/${movieId}/cast`} className={c.casts}>
          Casts
        </Link>
        <Link to={`/movies/${movieId}/reviews`} className={c.reviews}>
          Reviews
        </Link>

        <Outlet />
      </div>
    </section>
  );
};
export default MovieDetailsPage;
