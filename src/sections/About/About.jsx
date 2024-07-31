import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.info}>
        <h1>About</h1>
        <div className={styles.description}>
          <p>
            Hello! I am a dedicated and passionate Information Technology
            student at North-West University.
          </p>
          <p>
            As a proactive learner, I'm constantly seeking new opportunities to
            expand my knowledge and apply my skills in real-world scenarios.
          </p>
          <p>
            I'm passionate about staying at the forefront of technological
            advancements and am eager to contribute to innovative projects that
            make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
