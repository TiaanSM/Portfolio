import styles from '../styles/Contact.module.css'

import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className={styles.section}>

      <Navbar link="HOME" href="/" textColor="#ecead3" />

        <h4 className={styles.title}>Hello.</h4>

        <p className={styles.formText}>
            I can help design and build your next website. 
            Let me know what you need by filling in this quick <a href="">website brief</a>.
        </p>

        <span className={styles.emailText}>Email: <a href="mailto: tiaanmc@gmail.com">tiaanmc@gmail.com</a></span>

        <span className={styles.linksText}>
          On the internet: <a href="https://github.com" target="_blank">github</a> / 
          <a href="https://linkedin.com" target="_blank">linkedin</a>
        </span>

    </section>
  )
}

export default Contact