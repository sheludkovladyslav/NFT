import { HotbidsItem } from "./HotbidsItem";
import css from "./Hotbids.module.css";

export const Hotbids = ({ hotbids = [] }) => {
  return (
    <section className={css.hotbids}>
      <div className={`${css.hotbids__container} container`}>
        <h2 className={css.title}>Hot bids 🔥</h2>
        <ul className={css.list}>
          {hotbids.map((hotbid, index) => (
            <HotbidsItem key={index} Hotbid={hotbid} />
          ))}
        </ul>
      </div>
    </section>
  );
};
