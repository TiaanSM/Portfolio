import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.section}>

        <div className={styles.container}>
            <span className={styles.heading}>A LITTLE MORE ABOUT ME</span>
            <p className={styles.mainText}>
                HELLO ! I'M TIAAN, INDEPENDANT DIGITAL DESIGNER,
                AND WEBFLOW EXPERT, LIVING ON PLANET EARTH SINCE 1997
            </p>
        </div>

        <div className={styles.container}>
            <p className={styles.text}>
                I HAVE +5 YEARS OF XP. IN DESIGNING DIGITAL PRODUCTS
                WITH A STRONG FOCUS ON USER INTERFACE
            </p>
        </div>

    </section>
  )
}

export default About