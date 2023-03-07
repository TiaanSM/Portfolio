import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.headingContainer}>
            <h1 className={styles.heading}>TIAAN MCLEOD</h1>
            <p className={styles.desc}>Frontend web developer</p>
            <p className={styles.desc}>Currently working as a ...</p>
        </div>

        <section className={styles.section}>
            <a href="" className={styles.link}>WORK</a>
            <a href="" className={styles.link}>ABOUT</a>
            <a href="" className={styles.link}>CONTACT</a>
        </section>

    </div>

    </header>
  )
}

export default Home