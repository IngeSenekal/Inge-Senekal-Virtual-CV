import styles from "./SkillsStyles.module.css";
import checkmarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="HTML" />
        <SkillList src={checkmarkIcon} skill="CSS" />
        <SkillList src={checkmarkIcon} skill="Javascript" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="Java" />
        <SkillList src={checkmarkIcon} skill="Flutter" />
        <SkillList src={checkmarkIcon} skill="C#" />
        <SkillList src={checkmarkIcon} skill="C++" />
        <SkillList src={checkmarkIcon} skill="Python" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
