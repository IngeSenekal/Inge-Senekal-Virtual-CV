import styles from "./SkillsStyles.module.css";
import checkmarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList scr={checkmarkIcon} skill="HTML" />
      </div>
    </section>
  );
}

export default Skills;
