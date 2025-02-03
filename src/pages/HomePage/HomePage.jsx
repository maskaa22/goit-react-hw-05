import c from "./HomePage.module.css";
import Movies from "../../components/movies/Movies";

const HomePage = ({ movies }) => {
  return (
    <div className="container">
      <h1 className={c.title}>Trending today</h1>
      <Movies movies={movies} />
    </div>
  );
};
export default HomePage;
