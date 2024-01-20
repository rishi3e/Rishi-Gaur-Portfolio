import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import Rating from "@mui/material/Rating";

const SkillCard = ({ skill: { imgPath, imgAlt, title, selfRating } }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillImageContainer}>
        <img src={getImageUrl(imgPath)} alt={imgAlt} />
      </div>
      <p>{title}</p>
      {/* <Rating name="read-only" value={selfRating} readOnly /> */}
    </div>
  );
};

export default SkillCard;
