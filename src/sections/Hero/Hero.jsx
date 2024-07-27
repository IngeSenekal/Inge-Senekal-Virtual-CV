import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/User.png";
import themeIcon from "../../assets/sun.svg";
import linkedInIcon from "../../assets/linkedin-light.svg";

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
      <div className={styles.info}>
        <h1>
          Inge <br /> Senekal
        </h1>

        <h2>University Student</h2>

        <span>
          <a href="https://www.linkedin.com/in/ia-senekal" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
