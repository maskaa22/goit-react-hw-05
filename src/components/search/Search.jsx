import { CiSearch } from "react-icons/ci";
import c from "./Search.module.css";

const Search = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const search = form.elements.search.value;
    if (form.elements.search.value.trim() === "") {
      return;
    }
    onSubmit(search);
    form.reset();
  };

  return (
    <>
      <form className={c.form} onSubmit={handleSubmit}>
        <input name="search" className={c.input} />
        <button className={c.submit} type="submit">
          <CiSearch />
        </button>
      </form>
    </>
  );
};
export default Search;
