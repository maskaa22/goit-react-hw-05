import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import c from "./Header.module.css";

const activeLink = ({ isActive }) => {
  return clsx(c.link, isActive && c.active);
};

const Header = () => {
  return (
    <header className={c.header}>
      <nav className={c.nav}>
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
