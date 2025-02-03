import { ThreeDots } from "react-loader-spinner";
import c from "./Loader.module.css";

const Loder = () => {
  return (
    <div className={c.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#cd65d9"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
export default Loder;
