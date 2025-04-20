import css from "./HotbidsItem.module.css";
import { HotbidAuthor } from "./HotbidsAuthor";

export const HotbidsItem = ({ Hotbid }) => {
  return (
    <li className={css.item}>
      <div className={css.img_container}>
        <img src={Hotbid.img} alt={Hotbid.name} className={css.img} />
      </div>

      <h2 className={css.name}>{Hotbid.name}</h2>
      <p className={css.bid}>
        Current bid: <span className={css.bold}>{Hotbid.bid}</span>
      </p>

      <HotbidAuthor author={Hotbid.author} />
    </li>
  );
};
