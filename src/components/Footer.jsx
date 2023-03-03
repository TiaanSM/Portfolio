import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>

            <div className={styles.emailContainer}></div>

            <div className={styles.textContainer}>
                <div  className={styles.topContainer}>
                    <span className={styles.topText}>FRONTEND DEVELOPER</span>
                    <span className={styles.topText}>PORTFOLIO 2023</span>
                </div>

                <span className={styles.title}>TIAAN MCLEOD</span>
                
                <div className={styles.bottomContainer}>
                    <span className={styles.bottomText}>&copy; TSM 2023</span>
                    <span className={styles.bottomText}>BACK TO TOP</span>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer