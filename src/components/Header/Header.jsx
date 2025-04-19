import css from "./Header.module.css";
import { Login } from "../Log-In/Login";
import { Nav } from "../Navigation/Nav";
import navIcon from "/src/assets/nav-menu.svg";

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={`${css.header__container} container`}>
        <Nav img={navIcon}></Nav>
        <a href="">
          <h1 className={css.title}>Supernft.</h1>
        </a>
        <Login></Login>
      </div>
    </header>
  );
};
