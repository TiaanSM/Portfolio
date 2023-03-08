import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    
    
    <header className={styles.header}>
      <Navbar link="GITHUB" textColor="black" />
      <div className={styles.container}>

        <div className={styles.headingContainer}>
            <h1 className={styles.heading}>TIAAN MCLEOD</h1>
            <p className={styles.desc}>Front-end developer creating engaging interfaces.</p>
            <p className={styles.desc}>Passionate Front-end Web Developer seeking a opportunity to grow with a company.</p>
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