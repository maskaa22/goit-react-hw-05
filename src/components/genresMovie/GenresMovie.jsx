import c from "./GenresMovie.module.css";

const GenresMovie = ({ genres, id }) => {
  return (
    <ul className={c.genres}>
      {genres &&
        genres.map((genre) => (
          <li key={`${genre.name}-${id}`} className={c.genre}>
            {genre.name}
          </li>
        ))}
    </ul>
  );
};
export default GenresMovie;
