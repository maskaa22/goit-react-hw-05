import { useEffect, useState } from "react";
import c from "./movieCasts.module.css";
import { selectedMovieCasts } from "../../assets/API";
import { useParams } from "react-router-dom";
import MovieCast from "../movieCast/MovieCast";

const MovieCasts = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await selectedMovieCasts(movieId);
        setCasts(data);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("Loading....");
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <ul className={c.list}>
      {casts.map((cast) => (
        <li key={`${movieId}-${cast.name}`} className={c.item}>
          <MovieCast cast={cast}/>
        </li>
      ))}
    </ul>
  );
};
export default MovieCasts;
