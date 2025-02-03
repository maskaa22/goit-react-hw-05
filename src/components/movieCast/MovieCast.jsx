import c from "./MovieCast.module.css";
import baseImageUrl from "../../assets/constants";
import { FaUserSecret } from "react-icons/fa6";

const MovieCast = ({ cast }) => {
  return (
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
  );
};
export default MovieCast;
