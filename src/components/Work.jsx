import styles from './Work.module.css'

import WorkCard from './WorkCard'

const Work = () => {
  return (
    <main className={styles.main}>

        <div className={styles.textContainer}>
            
                <span className={styles.topText}>SELECTED</span>

            <div className={styles.bottomText}>
                <span className={styles.dates}>2022 _______________ 2023</span>
                <span className={styles.text}>WORKS</span>
            </div>
        </div>

        <div className={styles.cardContainer}>

            <WorkCard 
              projectNumber="01 / 03" 
              projectTech="JAVASCRIPT / REACT / CSS"
              project="STUDIO ZAA"
              bgColor="#3FA796"
            />

            <WorkCard 
              projectNumber="02 / 03" 
              projectTech="JAVASCRIPT / REACT / CSS"
              project="LIGHTHOUSE"
              bgColor="#FEC260"
            />

            <WorkCard 
              projectNumber="03 / 03" 
              projectTech="JAVASCRIPT / REACT / CSS"
              project="JAKES BBQ"
              bgColor="#A10035"
            />

        </div>

    </main>
  )
}

export default Work