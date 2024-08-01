import styles from "./Contact.module.css";
import Mail from "../../assets/Mail.png";
import linkedInIconLight from "../../assets/linkedin-light.svg";
import linkedInIconDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Contact() {
  const { theme } = useTheme();

  const linkedInIcon = theme === "light" ? linkedInIconLight : linkedInIconDark;

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactContainer}>
        <div className={styles.contactItem}>
          <img src={Mail} alt="Email Icon" className={styles.icon} />
          <a href="mailto:senekalinge@gmail.com" className={styles.contactLink}>
            senekalinge@gmail.com
          </a>
        </div>
        <div className={styles.contactItem}>
          <img src={linkedInIcon} alt="LinkedIn Icon" className={styles.icon} />
          <a
            href="https://www.linkedin.com/in/ia-senekal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
