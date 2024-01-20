import styles from "./Contact.module.css";
import Contacts from "../../data/contact.json";
import ContactCard from "./ContactCard";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me.</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links} id="contacts">
        {Contacts.map((contact, id) => {
          return <ContactCard key={id} contact={contact} />;
        })}
      </ul>
    </footer>
  );
};
