import c from "./MovieDetailsPage.module.css";
import MovieDetails from "../../components/movieDatails/movieDatails";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <section className="heroMovie">
      <MovieDetails movieId={movieId} />
      <div className="container">
 
        <Link to={`/movies/${movieId}/cast`} className={c.casts}>Casts</Link>
        <Link to={`/movies/${movieId}/reviews`} className={c.reviews}>Reviews</Link>

        <Outlet />
      </div>
    </section>
  );
};
export default MovieDetailsPage;
