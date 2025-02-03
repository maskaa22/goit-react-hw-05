import "react-circular-progressbar/dist/styles.css";
import c from "./Progress.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Progress = ({ average }) => {
  return (
    <div className={c.score}>
      <CircularProgressbar
        value={average}
        text={`${average}%`}
        className={c.progress}
        styles={buildStyles({
          pathColor: "#cd65d9",
          textColor: "#fff",
          textSize: "30px",
        })}
      />
    </div>
  );
};
export default Progress;
