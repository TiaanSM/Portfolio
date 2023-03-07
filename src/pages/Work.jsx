import styles from '../styles/Work.module.css'

const Work = () => {
  return (
    <section className={styles.section}>

        <div className={styles.descContainer}>
            <h2 className={styles.heading}>WORK</h2>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugit recusandae voluptate vel. Maxime ad ipsa ex facilis nulla cupiditate alias!
            </p>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fuga nesciunt sint autem at 
                dignissimos iste repellat sit exercitationem perspiciatis.
            </p>
        </div>

        <div className={styles.projectContainer}>
            <a href="" className={styles.projectName}>Project name</a>
            <p className={styles.projectRoles}>- Website development.</p>
        </div>

    </section>
  )
}

export default Work