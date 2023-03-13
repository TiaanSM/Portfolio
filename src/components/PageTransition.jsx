import styles from '../styles/Components.module.css'
import { useState, useEffect } from 'react';

const PageTransition = (props) => {

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
    
    <div className={playAnimation === true ? styles.pageCoverAfter : styles.pageCoverBefore}></div>

  )
}

export default PageTransition