import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const AboutCard = ({ about: { imgPath, imgAlt, title, paragraph } }) => {
  return (
    <li className={styles.aboutItem}>
      <img src={getImageUrl(imgPath)} alt={imgAlt} className={styles.aboutItemImage}/>
      <div className={styles.aboutItemText}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </li>
  );
};

export default AboutCard;
