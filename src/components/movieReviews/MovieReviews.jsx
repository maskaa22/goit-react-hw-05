import { useParams } from 'react-router-dom';
import c from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import {selectedReviews} from '../../assets/API';
import MovieReview from '../movieReview/MovieReview';
import Loader from '../loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
   const [reviews, setReviews] = useState([]);
   const [loading, setLoading] = useState(false);

  useEffect(() => {
      const fetchCast = async () => {
        try {
          setLoading(true);
          const data = await selectedReviews(movieId);
          setReviews(data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      fetchCast();
    }, [movieId]);
  
  return (
    <>
    {loading && <Loader />}
    <ul className={c.list}>
      {reviews.map((review) => (
        <li key={`${movieId}-${review.author}`} className={c.item}>
          <MovieReview review={review}/>
        </li>
      ))}
    </ul>
    </>

  );
};
export default MovieReviews;