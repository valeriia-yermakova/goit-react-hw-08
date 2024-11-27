import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.mainCont}>
      <p className={css.homeText}>
        Welcome to the contacts book. Here you can keep
        your contacts safe.
      </p>
    </div>
  );
};

export default HomePage;