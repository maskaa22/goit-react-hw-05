import { useParams } from 'react-router-dom';
import c from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import {selectedReviews} from '../../assets/API';
import MovieReview from '../movieReview/MovieReview';

const MovieReviews = () => {
  const { movieId } = useParams();
   const [reviews, setReviews] = useState([]);

  useEffect(() => {
      const fetchCast = async () => {
        try {
          const data = await selectedReviews(movieId);
          setReviews(data);
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
      {reviews.map((review) => (
        <li key={`${movieId}-${review.author}`} className={c.item}>
          <MovieReview review={review}/>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;