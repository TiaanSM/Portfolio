import styles from '../styles/Contact.module.css'

import Navbar from '../components/Navbar'
import PageTransitionLight from '../components/PageTransitionLight';

import { useState, useEffect } from 'react';

const Contact = () => {

  const [playAnimation, setPlayAnimation] = useState(false)
  
  useEffect(() => {

    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <section className={styles.section}>
      
      <PageTransitionLight playAnimation={playAnimation} />
      <Navbar link="HOME" href="/" textColor="#ecead3" />

        <h4 className={styles.title}>Hello.</h4>

        <p className={styles.formText}>
          To get in touch with me regarding job opportunities or 
          potential partnerships, please don't hesitate to contact me.
        </p>

        <span className={styles.emailText}>
          Email: <a href="mailto: tiaanmc@gmail.com">tiaanmc@gmail.com</a>
        </span>

        <span className={styles.linksText}>
          On the internet: <a href="https://github.com" target="_blank">github</a> / 
          <a href="https://linkedin.com" target="_blank">linkedin</a>
        </span>

    </section>
  )
}

export default Contact