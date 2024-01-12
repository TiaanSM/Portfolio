import styles from '../styles/Work.module.css'

import Navbar from '../components/Navbar'
import PageTransitionLight from '../components/PageTransitionLight'

const Work = () => {

  return (
    <section className={styles.section}>

        <PageTransitionLight />
        <Navbar link="HOME" href="/" textColor="#ecead3" />

        <div className={styles.descContainer}>
            <h2 className={styles.heading}>WORK</h2>
            <p className={styles.desc}>
                This is a showcase of projects that I have completed, they are 
                examples of what I am able to do in the timeframe I set to complete them.
            </p>
            <p className={styles.desc}>
                These projects helped me learn new technologies and from the mistakes that I made.
                The projects were used to help me learn ReactJs, Basic Web Design, Google Analytics, Form and email 
                systems and much more.
            </p>
        </div>

        <div className={styles.projectContainer}>

            <div className={styles.project}>
                <a href="https://tiptoe.media" target="_blank" className={styles.projectName}>TIPTOE MEDIA</a>
                <p className={styles.projectRoles}>- Website development - 2023 / 08</p>
            </div>

            <div className={styles.project}>
                <a href="https://studio-zaa.netlify.app" target="_blank" className={styles.projectName}>STUDIO ZAA</a>
                <p className={styles.projectRoles}>- Website development - 2023 / 01</p>
            </div>

        </div>

    </section>
  )
}

export default Work