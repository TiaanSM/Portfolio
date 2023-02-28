import styles from './Main.module.css'

const ProjectCard = (props) => {

  return (

    <div className={styles.card}>
        <img src="" alt="project-website-image" className={styles.image} />
        <div className={styles.projectTextContainer}>
            <span className={styles.project}>{props.projectName}</span>
            <div className={styles.btnContainer}>
                <button className={styles.liveBtn}>View Live</button>
                <button className={styles.codeBtn}>View Code</button>
            </div>
        </div>
    </div>

  )
}

export default ProjectCard