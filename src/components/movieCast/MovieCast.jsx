import { useEffect, useState } from "react";
import c from "./movieCast.module.css";
import { selectedMovieCasts } from "../../assets/API";
import { useParams } from "react-router-dom";

import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { FaUserSecret } from "react-icons/fa6";
import baseImageUrl from "../../assets/constants";

const MovieCast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await selectedMovieCasts(movieId);
        setCasts(data);
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
        {casts.map((cast) => (
          <li key={`${movieId}-${cast.name}`} className={c.item}>
            <div className={c.card}>
              <div className={!cast.profile_path ? c.imgContainer : ""}>
                {cast.profile_path ? (
                  <img
                    src={`${baseImageUrl}${cast.profile_path}`}
                    className={c.img}
                    alt={cast.name}
                  />
                ) : (
                  <FaUserSecret className={c.icon} />
                )}
              </div>
              <div className={c.info}>
                <p className={c.name}>{cast.name}</p>
                <p className={c.role}>Character:</p>
                <p className={c.role}>{cast.character}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieCast;
