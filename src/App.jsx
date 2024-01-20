import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import MySelf from "./components/MySelf/MySelf";
import { About } from "./components/About/About";
import { Experience } from "./components/Experiance/Experience";
import { Contact } from "./components/Contact/Contact";
import Projects from "./components/ProjectComp/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <MySelf />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
