import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: { imgPath, imgAlt, title, description, skills, demo, source, target },
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imgPath)} alt={imgAlt} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} target={target} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
