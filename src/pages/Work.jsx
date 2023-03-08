import styles from '../styles/Work.module.css'

import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section className={styles.section}>

        <Navbar link="HOME" href="/" textColor="#ecead3" />

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

            <div className={styles.project}>
                <a href="" target="_blank" className={styles.projectName}>STUDIO ZAA</a>
                <p className={styles.projectRoles}>- Website development.</p>
            </div>

            <div className={styles.project}>
                <a href="" target="_blank" className={styles.projectName}>JAKES BAR-B-Q</a>
                <p className={styles.projectRoles}>- Website development.</p>
            </div>

            <div className={styles.project}>
                <a href="" target="_blank" className={styles.projectName}>LIGHTHOUSE</a>
                <p className={styles.projectRoles}>- Landing page development.</p>
            </div>

        </div>

    </section>
  )
}

export default Work