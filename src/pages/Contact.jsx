import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.section}>

        <h4 className={styles.title}>Hello.</h4>

        <p className={styles.formText}>
            I can help design and build your next website. 
            Let me know what you need by filling in this quick website brief.
        </p>

        <span className={styles.emailText}>Email: email</span>

        <span className={styles.linksText}>On the internet: github</span>

    </section>
  )
}

export default Contact