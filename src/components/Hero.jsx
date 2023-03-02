import styles from './Hero.module.css'

const Hero = () => {
  return (
    <header className={styles.header}>

        <div className={styles.container}>

            <div className={styles.titleContainer}>
                <span className={styles.titleTop}>TIAAN <br/></span>
                <span className={styles.titleBottom}>MC-LEOD</span>
            </div>

            <div className={styles.descContainer}>
                <p className={styles.desc1}>IM AN INDEPENDANT DIGITAL DESIGNER & WEBFLOW EXPERT BASED IN FRANCE</p>
                <p className={styles.desc2}>FOCUSING ON CREATING PURPOSEFUL USER INTERFACES*</p>
                <p className={styles.desc3}>* WITH A HINT ON INTERACTIONS & ANIMATIONS</p>
            </div>

        </div>
        
    </header>
  )
}

export default Hero