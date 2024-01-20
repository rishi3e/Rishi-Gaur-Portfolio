import styles from "./MySelf.module.css";
import { getImageUrl } from "../../utils";

const MySelf = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Heyy, I'm Rishi</h1>
        <p className={styles.description}>
          Computer Science BTech (Hons.) graduate and experienced Software
          Engineer, specializing in front-end technologies, with a notable
          expertise in <span className={styles.frontEndTech}> Angular</span> and{" "}
          <span className={styles.frontEndTech}>React</span>. My academic
          background, coupled with hands-on experience, has equipped me with a
          comprehensive understanding of computer science principles. I possess
          strong problem-solving and debugging skills, honed through years of
          practical application in developing cutting-edge web solutions.
          Proactively seeking challenging roles, I am poised to contribute my
          dual proficiency in{" "}
          <span className={styles.frontEndTech}> Angular</span> and{" "}
          <span className={styles.frontEndTech}>React</span> to foster
          innovation and excellence in web development. Eager to take on
          projects that push the boundaries of technology and contribute to the
          ever-evolving landscape of software engineering.
        </p>
        <a href="mailto:rishi54047@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("myself/Rishi_Myself_Img.png")}
        alt="Image of Me"
        className={styles.myselfImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default MySelf;
