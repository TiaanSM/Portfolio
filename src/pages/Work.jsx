import styles from '../styles/Work.module.css'

import Navbar from '../components/Navbar'
import PageTransitionLight from '../components/PageTransitionLight'

import { useState, useEffect } from 'react';

const Work = () => {

    const [playAnimation, setPlayAnimation] = useState(false)
  
    useEffect(() => {

    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
    }, []);

  return (
    <section className={styles.section}>

        <PageTransitionLight playAnimation={playAnimation} />
        <Navbar link="HOME" href="/" textColor="#ecead3" />

        <div className={styles.descContainer}>
            <h2 className={styles.heading}>WORK</h2>
            <p className={styles.desc}>
                This is a showcase of projects that I have recently completed, they are 
                examples of what I am able to do in the timeframe I set to complete them.
            </p>
            <p className={styles.desc}>
                The world of frontend development has grown at an extremely rapid rate over the
                last few years and my aim had been to evolve with it. I'm learning and gaining new skills
                every day.
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