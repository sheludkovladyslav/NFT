import css from "./nav.module.css";

export const Nav = ({ img }) => {
  return (
    <nav className={css.nav}>
      <div className={css.nav - img}>
        <img src={img} alt="MENU" className={css.menu_icon} />
      </div>
      <h2 className={css.title}>Menu</h2>
    </nav>
  );
};
