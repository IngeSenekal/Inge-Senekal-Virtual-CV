import styles from "./ProjectsStyles.module.css";
import ParadisePoint from "../../assets/Paradise Point.png";
import OMT2 from "../../assets/OMTvs2.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ParadisePoint}
          link={"https://github.com/Theunis-Kok/Paradise_Point"}
          h3="Paradise Point"
          p="System Design Project"
        />

        <ProjectCard
          src={OMT2}
          link={"https://github.com/IngeSenekal/OMT"}
          h3="OMT(Optimise My Time)"
          p="Scheduling Application"
        />
      </div>
    </section>
  );
}

export default Projects;
