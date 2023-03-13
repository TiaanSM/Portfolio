import styles from '../styles/Components.module.css'
import { useState, useEffect } from 'react';

const PageTransitionLight = (props) => {

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
    
    <div className={playAnimation === true ? styles.pageCoverAfter2 : styles.pageCoverBefore2}></div>

  )
}

export default PageTransitionLight