import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
       <div className={styles.boundContainer}>

        <div className={styles.container}>
            <div className={styles.textContainer}>
                <span className={styles.name}>TIAAN MCLEOD</span>
                <span className={styles.desc}>FRONTEND DEVELOPER<br/>FOLIO / 2022 - 2023</span>
            </div>

            <button className={styles.contactBtn}>CONTACT</button>
        </div>

        <div className={styles.topTitle}>
            <span className={styles.letter}>F</span>
            <span className={styles.letter}>R</span>
            <span className={styles.letter}>O</span>
            <span className={styles.letter}>N</span>
            <span className={styles.letter}>T</span>

            <span className={styles.divider}>-</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>N</span>
            <span className={styles.letter}>D</span>
        </div>

        <div className={styles.titleEnd}>
            <span className={styles.letter}>D</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>V</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>L</span>
            <span className={styles.letter}>O</span>
            <span className={styles.letter}>P</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>R</span>
        </div>

      </div>
    </header>
  )
}

export default Header