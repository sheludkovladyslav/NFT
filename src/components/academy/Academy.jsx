import css from "./Academy.module.css";
import { AcademyItem } from "./academyItem";

export const Academy = () => {
  return (
    <>
      <section className={css.section}>
        <h2 className={css.title}>Academy 💪🏻</h2>

        <ul className={css.list}>
          <AcademyItem
            title="Master Classes, Live Workshops & Courses"
            className={css.black}
          ></AcademyItem>
          <AcademyItem
            title="Audio Reactive Visuals with Code"
            author="By Yannis Yannakopoulos"
            className={css.white}
          ></AcademyItem>
          <AcademyItem
            title="Advanced Prototyping"
            author="By Yannis Yannakopoulos"
            className={css.white}
          ></AcademyItem>
        </ul>
      </section>
    </>
  );
};
