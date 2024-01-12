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
          Email: <a href="mailto:tiaansm22@gmail.com">tiaansm22@gmail.com</a>
        </span>

        <span className={styles.linksText}>
          Phone: <a href="tel:+27649350553" target="_blank">+27 64 935 0553</a>
        </span>

    </section>
  )
}

export default Contact