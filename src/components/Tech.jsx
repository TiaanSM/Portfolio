import styles from './Tech.module.css'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaNpm, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiStyledcomponents, SiJavascript } from 'react-icons/si'

import { useInView } from 'react-intersection-observer';

const Tech = () => {

    /*
    const { ref, inView } = useInView({
        threshold: 0.50,
        triggerOnce: true,
    });
    */

  return (
    <section className={styles.section}>
        <div className={styles.container}>

            <h4 className={styles.title}>TECHNOLOGIES I CAN USE:</h4>

            <div className={styles.techContainer}>

                <span className={styles.item}>
                    <FaHtml5 color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/>
                    <p className={styles.itemDesc}>SEMANTIC HTML</p>
                </span>

                <span className={styles.item}>
                    <FaCss3Alt color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>CSS</p>
                </span>

                <span className={styles.item}>
                    <SiTailwindcss color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>TAILWIND</p>
                </span>

                <span className={styles.item}> 
                    <FaBootstrap color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>BOOTSTRAP</p>
                </span>

                <span className={styles.item}> 
                    <SiStyledcomponents color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>STYLED COMPONENTS</p>
                </span>
        
            </div>
            <div className={styles.techContainer}>

                <span className={styles.item}> 
                    <FaSass color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>SASS</p>
                </span>

                <span className={styles.item}> 
                    <SiJavascript color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>JAVASCRIPT</p>
                </span>

                <span className={styles.item}> 
                    <FaReact color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>REACT JS</p>
                </span>

                <span className={styles.item}> 
                    <FaNpm color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/> 
                    <p className={styles.itemDesc}>NPM</p>
                </span>

                <span className={styles.item}> 
                    <FaGithub color="white" fontSize="clamp(2rem, 0.8372093023255813rem + 3.7209302325581395vw, 4rem)"/>
                    <p className={styles.itemDesc}>GITHUB</p>
                </span>
       
            </div>

            <h5 className={styles.finalText}>
                I AM CONFIDENT IN MY ABILITY TO LEARN NEW AND REQUIRED <span className={styles.highlight}>FRAMEWORKS</span>
                , <span className={styles.highlight}>LANGUAGES</span> AND <span className={styles.highlight}>OTHER TECHNOLOGIES</span> FOR NEW PROJECTS
                FAST AND EFFECIENTLY ENOUGH TO ENABLE ME TO MAKE MEANINGFULL CONTRIBUTIONS.
            </h5>
            

        </div>
    </section>
  )
}

export default Tech