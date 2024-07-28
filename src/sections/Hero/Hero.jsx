import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile.png";
import themeSun from "../../assets/sun.svg";
import themeMoon from "../../assets/moon.svg";
import linkedInIconLight from "../../assets/linkedin-light.svg";
import gitHubIconLight from "../../assets/github-light.svg";
import linkedInIconDark from "../../assets/linkedin-dark.svg";
import gitHubIconDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? themeSun : themeMoon;
  const linkedInIcon = theme === "light" ? linkedInIconLight : linkedInIconDark;
  const gitHubIcon = theme === "light" ? gitHubIconLight : gitHubIconDark;

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
          onClick={toggleTheme}
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

          <a href="https://github.com/IngeSenekal" target="_blank">
            <img src={gitHubIcon} alt="Github Icon" />
          </a>
        </span>

        <p className={styles.description}>Just keep it simple!</p>
        <a
          href="https://drive.google.com/file/d/1QXHpwQbfbExR_TbPQLcGlT13P0ONYjA0/view?usp=sharing"
          target="_blank"
        >
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
