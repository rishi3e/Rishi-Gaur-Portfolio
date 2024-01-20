import styles from "./Experience.module.css";
import Skills from "../../data/skills.json";
import Experiences from "../../data/experiences.json";
import SkillCard from "./SkillCard";
import ExperienceCard from "./ExperienceCard";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills and Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills} id="skills">
          {Skills.map((skill, id) => {
            return <SkillCard key={id} skill={skill} />;
          })}
        </div>
        <ul className={styles.history}>
          {Experiences.map((historyItem, id) => {
            return <ExperienceCard key={id} historyItem={historyItem} />;
          })}
        </ul>
      </div>
    </section>
  );
};
