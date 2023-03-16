import styles from '../styles/Contact.module.css'

import Navbar from '../components/Navbar'
import PageTransitionLight from '../components/PageTransitionLight';

const Contact = () => {

  return (
    <section className={styles.section}>
      
      <PageTransitionLight />
      <Navbar link="HOME" href="/" textColor="#ecead3" />

        <h4 className={styles.title}>Hello.</h4>

        <p className={styles.formText}>
          To get in touch with me regarding job opportunities or 
          potential partnerships, please don't hesitate to contact me.
        </p>

        <span className={styles.emailText}>
          Email: <a href="mailto: tiaansm@outlook.com">tiaansm@outlook.com</a>
        </span>

        <span className={styles.linksText}>
          On the internet: <a href="https://github.com/TiaanSM" target="_blank">github</a> / 
          <a href="https://linkedin.com/in/tiaan-mcleod-365044258" target="_blank">linkedin</a>
        </span>

    </section>
  )
}

export default Contact