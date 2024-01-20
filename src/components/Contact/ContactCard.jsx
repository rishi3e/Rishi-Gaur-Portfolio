import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const ContactCard = ({ contact: { target, imgPath, imgAlt, contact } }) => {
  return (
    <li className={styles.link}>
      <a href={contact} target={target}>
        <img src={getImageUrl(imgPath)} alt={imgAlt} />
      </a>
    </li>
  );
};

export default ContactCard;
