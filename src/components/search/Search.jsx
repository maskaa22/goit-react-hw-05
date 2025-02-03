import { CiSearch } from "react-icons/ci";
import c from "./Search.module.css";

const Search = ({ onSubmit, err, flag }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const search = form.elements.search.value;
    if (form.elements.search.value.trim() === "") {
      err("Please enter search term!");
      return;
    }
    onSubmit(search);
    flag(true);
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
