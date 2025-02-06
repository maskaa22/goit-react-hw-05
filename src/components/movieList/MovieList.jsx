import { Link, useLocation } from "react-router-dom";
import c from "./MovieList.module.css";
import Movie from "../movie/Movie";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={c.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={c.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <Movie movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
