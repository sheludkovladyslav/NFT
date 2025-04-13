import css from "./Login.module.css";

export const Login = () => {
  return (
    <>
      <div className={css.container}>
        <button className={css.login}>Log In</button>
        <button className={css.upload}>Upload</button>
      </div>
    </>
  );
};
