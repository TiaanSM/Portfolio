import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition';

import { Link } from 'react-router-dom';

const Home = () => {  

  return (
    
    <header className={styles.header} >

      <PageTransition />
      <Navbar link="GITHUB" href="https://github.com/TiaanSM" textColor="black" />
      
      <div className={styles.container}>

        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>TIAAN MCLEOD</h1>
          <p className={styles.desc}>Front-end developer creating engaging interfaces.</p>
          <p className={styles.desc}>Passionate Front-end Web Developer seeking a opportunity to grow with a company.</p>
        </div>

        <section className={styles.section}>
          <Link to="/work" className={styles.link}>WORK</Link>
          <Link to="/about" className={styles.link}>ABOUT</Link>
          <Link to="/contact" className={styles.link}>CONTACT</Link>
        </section>

      </div>

    </header>
  
  )
}

export default Home