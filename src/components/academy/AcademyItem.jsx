import css from "./AcademyItem.module.css";

export const AcademyItem = ({ title, author, className }) => {
  return (
    <li className={`${css.item} ${className}`}>
      <h2 className={css.title}>{title}</h2>
      {author && <p className={css.author}>{author}</p>}
    </li>
  );
};
