import styles from './Work.module.css'

const WorkCard = (props) => {

    const sectionStyles = {
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: props.bgColor,
        borderBottom: '1px solid white'
    }

  return (
    <section style={sectionStyles}>

        <div className={styles.mainContainer}> 

            <div className={styles.infoContainer}>
                <span className={styles.infoText}>SELECTED</span>
                <span className={styles.infoNumber}>{props.projectNumber}</span>
                <span className={styles.infoText}>WORKS</span>
            </div>

            <div className={styles.projectContainer}>
                <div className={styles.projectTextContainer}>
                    <span className={styles.projectRoles}>{props.projectTech}</span>
                    <span className={styles.projectName}>{props.project}</span>
                </div>
                <div className={styles.imageContainer}>
                    <img src="" alt="website-project-landing-page" className={styles.projectImage} />
                </div>
            </div>

        </div>
    </section>
  )
}

export default WorkCard