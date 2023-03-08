import styles from '../styles/About.module.css'

import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom';

const About = () => {
  return (

    <main className={styles.main}>

      <Navbar link="HOME" href="/" textColor="black" />

        <div className={styles.container}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.subHeading}>Im Tiaan. A frontend developer and problem solver.</p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius molestiae consequatur eaque voluptate illum harum? Officiis libero natus minima rerum perspiciatis qui consectetur! Maiores voluptatem repellat adipisci at sapiente?</p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum rem sunt delectus voluptatum beatae non, similique rerum temporibus nam, ea sed laudantium molestias unde molestiae. Saepe officia aliquam nisi.</p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ea odit eligendi, porro vero quos voluptatem doloremque illo quod aperiam facilis quam laborum corporis fugit id delectus cum alias aspernatur!</p>
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
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus et magnam id animi debitis, exercitationem iste rem voluptatum similique reprehenderit consectetur consequuntur quas, molestias optio? Placeat rem provident fugit. Nesciunt deserunt hic veniam error necessitatibus dicta eius eos praesentium maiores aspernatur cum enim omnis inventore est, nostrum ut ipsam.</p>
        </div>

    </main>

  )
}

export default About