import styles from './Section.module.css';
import sectionImage from '../../assets/img/sectionImage.webp';

const Section = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>What We Do</h3>
        
        <h3 className={styles.heading}>Collaborating to create the 
          surprising with innovation that 
          inspires. Let's work towards 
          something bigger and brighter.
        </h3>

        <p className={styles.descLink}>Focusing on <a href="" className={styles.a}>Commercial</a> & <a href="" className={styles.a}>Resort</a> Projects</p>

        <a href="" className={styles.projectLink}>View All Projects</a>
      </div>

      <img src={sectionImage} alt="" className={styles.mainImage}/>

      <div className={styles.journalContainer}>

        <h3 className={styles.journalHeading}>Collaborating to create the 
          surprising with innovation that 
          inspires. Let's work towards 
          something bigger and brighter.
        </h3>
        <a href="" className={styles.articleLink}>View All Articles</a>
        <h4 className={styles.journalTitle}>Journal</h4>
      </div>
    </div>
  )
}

export default Section