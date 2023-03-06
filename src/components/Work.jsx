import styles from './Work.module.css'

import WorkCard from './WorkCard'

import img1 from '../images/ZAA copy.png'
import img2 from '../images/LH copy.png'
import img3 from '../images/bbq copy.png'

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
              projectTech="WEBSITE - REACT / CSS"
              project="STUDIO ZAA"
              bgColor="#3FA796"
              image={img1}
            />

            <WorkCard 
              projectNumber="02 / 03" 
              projectTech="WEBSITE - REACT / CSS"
              project="JAKES BBQ"
              bgColor="#A10035"
              image={img3}
            />

            <WorkCard 
              projectNumber="03 / 03" 
              projectTech="LANDING PAGE - REACT / CSS"
              project="LIGHTHOUSE"
              bgColor="#FEC260"
              image={img2}
            />

        </div>

    </main>
  )
}

export default Work