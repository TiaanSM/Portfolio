import styles from '../styles/About.module.css'

import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition';
import CV from '../assets/Tiaan Mcleod - CV.pdf'

import { Link } from 'react-router-dom';

const About = () => {

  return (

    <main className={styles.main}>

      <PageTransition />
      <Navbar link="HOME" href="/" textColor="black" />

        <div className={styles.container}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.subHeading}>Im Tiaan. A frontend developer and problem solver.</p>

          <p className={styles.desc}>
            The moment I fell in love with frontend development was when I discovered the Awwwards websites. 
            Their creative designs, user-friendly interfaces, and stunning animations captured my 
            attention and sparked a passion for developing websites that are both visually appealing 
            and highly functional. My projects designs are inspired by some of the winning awwward websites.
          </p>

          <p className={styles.desc}>
            I started my journey by learning the fundamentals of web development. I then moved on to start building
            websites with HTML, CCS and Javascript. When I felt confident in building websites with these 
            technologies I dove deeper into Javascript and it's frameworks. I learned ReactJs to understand why
            we build websites using these libraries and frameworks. My strong foundation in ReactJs enabled me to quickly
            jump into other frameworks like VueJs and Astro Build since the biggest deifference between them is the syntax
            and project Architecture.     
          </p>

          <p className={styles.desc}>
            I always strive to learn and improve and my goal is to become the best at what I do.
            I am looking for an opportunity to achieve this goal by learning from more experienced teams.
            With every new project I ensure that there is something new to learn and increase the design complexity
            to improve my problem solving skills. My strong foundation in the basics and frameworks enables me to quickly
            learn new required languages, frameworks and tools.
          </p>
        </div>

        <div className={styles.container}>
          <h3 className={styles.contentTitle}>SKILLS</h3>
          <ul className={styles.skillList}>
            <li className={styles.skill}>HTML5</li>
            <li className={styles.skill}>CSS3</li>
            <li className={styles.skill}>JAVASCRIPT</li>
            <li className={styles.skill}>REACT JS</li>
            <li className={styles.skill}>VUE JS</li>
            <li className={styles.skill}>ASTRO BUILD</li>
            <li className={styles.skill}>SVELTE</li>
            <li className={styles.skill}>TAILWIND CSS</li>
            <li className={styles.skill}>STYLED COMPONENTS</li>
            <li className={styles.skill}>SCSS</li>
            <li className={styles.skill}>BOOTSTRAP</li>
            <li className={styles.skill}>REST API</li>
            <li className={styles.skill}>WEB OPTOMIZATION</li>
            <li className={styles.skill}>GIT</li>
            <li className={styles.skill}>FIGMA</li>
            <li className={styles.skill}>RESPONSIVE DESIGN</li>
          </ul>
          
        </div>
        <div className={styles.container}>
            <a href={CV} target="_blank" className={styles.cvLink}>My CV</a>
          </div>

        <div className={styles.container}>
          <h3 className={styles.contentTitle}>FINALLY</h3>
          <p className={styles.desc}>
            I have learned a lot from building my projects by myself, but I also know that they can be better
            especially when working with a great team. My passion for web development is the driving force I use to 
            learn and work on creating websites. If given the chance I will do everything that is required me for to break into
            the industry and produce results that shows my hard work and strive to become a great web developer.
          </p>
        </div>
        <div className={styles.container}>
          <Link to="/contact" className={styles.contactLink}>Contact me</Link>
        </div>
    </main>

  )
}

export default About