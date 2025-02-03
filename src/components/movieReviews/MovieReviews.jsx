import { useParams } from "react-router-dom";
import c from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { selectedReviews } from "../../assets/API";
import MovieReview from "../movieReview/MovieReview";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await selectedReviews(movieId);
        setReviews(data);
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
        {reviews.map((review) => (
          <li key={`${movieId}-${review.author}`} className={c.item}>
            <MovieReview review={review} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieReviews;
