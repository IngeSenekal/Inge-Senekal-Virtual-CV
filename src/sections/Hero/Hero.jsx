import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/User.png";
import themeIcon from "../../assets/sun.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Inge Senekal"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
    </section>
  );
}

export default Hero;
