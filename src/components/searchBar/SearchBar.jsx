import { CiSearch } from "react-icons/ci";
import c from "./SearchBar.module.css";

export default function SearchBar({onSubmit}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const search = form.elements.search.value;
    if(form.elements.search.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}
    onSubmit(search);
    form.reset();
  }
  return (
    <header className={c.header}>
      <form className={c.form} onSubmit={handleSubmit}>
        <input
          className={c.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name='search'
        />
        <button className={c.submit} type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
