import css from "./HotbidsAuthor.module.css";

export const HotbidAuthor = ({ author }) => {
  const hours = () => {
    if (author.release.hours >= 1) {
      return <li className={css.hours}>{author.release.hours}H</li>;
    }
  };

  return (
    <div className={css.author}>
      <div className={css.descr}>
        <div className={css.img_container}>
          <img src={author.img} alt={author.name} className={css.img} />
        </div>

        <h2 className={css.name}>{author.name}</h2>
      </div>
      <ul className={css.release}>
        {hours()}
        <li className={css.minutes}>{author.release.minutes}M</li>
        <li className={css.seconds}>{author.release.seconds}S</li>
      </ul>
    </div>
  );
};
