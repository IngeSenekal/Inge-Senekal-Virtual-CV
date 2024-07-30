import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.info}>
        <h1>About</h1>
        <p className={styles.description}>
          I'm an innovative, highly motivated individual who values
          self-discipline. I love leveraging data to drive informed
          decision-making and streamline processes. Oh, and if you need someone
          to debug a database at 2 AM, I'm your person—coffee in hand, of
          course!
        </p>
      </div>
    </section>
  );
}

export default About;
