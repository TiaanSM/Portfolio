import styles from '../styles/About.module.css'

import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

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

    <main className={styles.main}>

      <PageTransition playAnimation={playAnimation} />
      <Navbar link="HOME" href="/" textColor="black" />

        <div className={styles.container}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.subHeading}>Im Tiaan. A frontend developer and problem solver.</p>

          <p className={styles.desc}>
            The moment I fell in love with frontend development was when I discovered the Awwwards websites. 
            Their creative designs, user-friendly interfaces, and stunning animations captured my 
            attention and sparked a passion for developing websites that are both visually appealing 
            and highly functional. My projects designs are from some of the winning awwward websites.
          </p>

          <p className={styles.desc}>
            I started my journey by learning the fundamentals of the web. I then moved on to start building
            websites with HTML, CCS and Javascript. When I felt confident in building websites with these 
            technologies I dove deeper into Javascript and it's frameworks. I liked the way react was used to 
            build web apps and continued building with it. I am currently buidling an Next Js application and
            plan to learn react native in the future to build mobile applications.    
          </p>

          <p className={styles.desc}>
            I always strive to learn and improve and my goal is to become the best at what I do.
            I am looking for an opportunity to achieve this goal by learning from more experienced teams
            and by teaching others what I know, which is of course the best way to learn.
          </p>
        </div>

        <div className={styles.container}>
          <h3 className={styles.contentTitle}>SKILLS</h3>
          <ul className={styles.skillList}>
            <li className={styles.skill}>SEMANTIC HTML</li>
            <li className={styles.skill}>CSS</li>
            <li className={styles.skill}>JAVASCRIPT</li>
            <li className={styles.skill}>REACT JS</li>
            <li className={styles.skill}>TAILWIND CSS</li>
            <li className={styles.skill}>STYLED COMPONENTS</li>
            <li className={styles.skill}>SCSS</li>
            <li className={styles.skill}>BOOTSTRAP</li>
            <li className={styles.skill}>FIGMA</li>
            <li className={styles.skill}>SEO OPTOMIZATION</li>
            <li className={styles.skill}>RESPONSIVE DESIGN</li>
            <li className={styles.skill}>FUNCTIONAL PROGRAMMING</li>
            <li className={styles.skill}>WORDPRESS</li>
            <li className={styles.skill}>ANIMATIONS & MOTION DESIGN</li>
          </ul>
        </div>

        <div className={styles.container}>
          <h3 className={styles.contentTitle}>FINALLY</h3>
          <p className={styles.desc}>
            I have learned a lot from building my projects by myself, but I also know that they can be better
            especially when working with a great team. Working toghether with others on projects will 
            help me improve faster and provide the company with a dedicated learner that will strive to work
            hard and help build websites and apps that are up to the highest standards with amazing UI's.
          </p>
        </div>

    </main>

  )
}

export default About