import c from "./MovieReview.module.css";
import { FaUser } from "react-icons/fa";
import baseImageUrl from "../../assets/constants";

const MovieReview = ({ review }) => {
  console.log(review);
const data = new Date(review.created_at).toLocaleDateString()
  return (
    <>
      <div className={c.user}>
        {review.author_details.avatar_path ? (
          <img
            src={`${baseImageUrl}${review.author_details.avatar_path}`}
            className={c.img}
          />
        ) : (
          <div className={c.iconContainer}><FaUser className={c.icon} /></div>
        )}
      
        <p className={c.author}>{review.author}</p>
      </div>
      <p className={c.content}>{review.content}</p>
      <p className={c.data}>{data}</p>
    </>
  );
};
export default MovieReview;
