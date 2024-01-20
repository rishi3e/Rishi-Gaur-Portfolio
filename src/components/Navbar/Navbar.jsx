import { useState } from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h3 className={styles.title}>Portfolio</h3>
      <div className={styles.menu}>
        <div className={styles.navBtn} id={styles.navButton}>
          {navOpen ? (
            <CloseIcon
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <MenuIcon
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            />
          )}
        </div>
        <ul
          className={`${styles.menuItems} ${navOpen && styles.menuOpen}`}
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
