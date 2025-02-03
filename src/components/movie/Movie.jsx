import c from "./Movie.module.css";
import baseImageUrl from "../../assets/constants";

const HomePage = ({ movie }) => {
  return (
    <>
      <img
        src={`${baseImageUrl}${movie.poster_path}`}
        className={c.img}
        alt={movie.title}
      />
      <div className={c.info}>
        <p className={c.title}>{movie.original_title}</p>
        <p className={c.range}>{Math.trunc(movie.popularity)}</p>
      </div>
    </>
  );
};
export default HomePage;
