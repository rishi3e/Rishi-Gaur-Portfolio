import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

const ExperienceCard = ({
  historyItem: { imgPath, imgAlt, role, organisation, startDate, endDate, experiences },
}) => {
  return (
    <li className={styles.historyItem}>
      <img src={getImageUrl(imgPath)} alt={imgAlt} />
      <div className={styles.historyItemDetails}>
        <h3>{`${role}, ${organisation}`}</h3>
        <p>{`${startDate} - ${endDate}`}</p>
        <ul>
          {experiences.map((experience, id) => {
            return <li key={id}>{experience}</li>;
          })}
        </ul>
      </div>
    </li>
  );
};

export default ExperienceCard;
