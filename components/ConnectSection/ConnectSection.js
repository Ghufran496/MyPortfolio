import styles from "./ConnectSection.module.css";

const ConnectSection = () => {
  return (
    <section className={styles.connectSection} id="Connect">
      <h2 className={styles.connectSection__title}>CONNECT</h2>
      <nav>
        <ul className={styles.connectSection__list}>
          <li>
            <a
              href="https://github.com/Ghufran496"
              target="_blank"
              className={styles.connectSection__link}
            >
              <svg className={styles.connectSection__icon}>
                <use xlinkHref="/icons/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ghufran-ullah-b36b411b9/"
              className={styles.connectSection__link}
              target="_blank"
            >
              <svg className={styles.connectSection__icon}>
                <use xlinkHref="/icons/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://uett-my.sharepoint.com/personal/20-se-34_students_uettaxila_edu_pk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F20%2Dse%2D34%5Fstudents%5Fuettaxila%5Fedu%5Fpk%2FDocuments%2FGhufranPersonal%2FghufranResume%2Epdf&parent=%2Fpersonal%2F20%2Dse%2D34%5Fstudents%5Fuettaxila%5Fedu%5Fpk%2FDocuments%2FGhufranPersonal&ga=1"
              target="_blank"
              className={styles.connectSection__link}
            >
              <svg className={styles.connectSection__icon}>
                <use xlinkHref="/icons/sprite.svg#icon-file-pdf"></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default ConnectSection;
