import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import AboutsFrontend from "../../data/about_frontend.json";
import AboutsBackend from "../../data/about_backend.json";
import AboutsDatabase from "../../data/about_database.json";
import AboutCard from "./AboutCard";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/frontend/Rishi_About.jpeg")}
          alt="Icon"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems} id="about">
          {AboutsFrontend.map((about, id) => {
            return <AboutCard key={id} about={about} />;
          })}
        </ul>
      </div>
      {/* <div className={styles.content}>
        <img
          src={getImageUrl("about/backend/Rishi_About.jpeg")}
          alt="Icon"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems} id="about">
          {AboutsBackend.map((about, id) => {
            return <AboutCard key={id} about={about} />;
          })}
        </ul>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/database/Rishi_About.jpeg")}
          alt="Icon"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems} id="about">
          {AboutsDatabase.map((about, id) => {
            return <AboutCard key={id} about={about} />;
          })}
        </ul>
      </div> */}
    </section>
  );
};
