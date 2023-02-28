import styles from './Main.module.css'
import ProjectCard from './ProjectCard'

const Main = () => {

  return (

    <main className={styles.main}>

        <h3 className={styles.title}>PROJECTS</h3>

        <div className={styles.container}>

        <ProjectCard projectName="Jakes bar-b-q" />
        <ProjectCard projectName="Studio ZAA" />
        <ProjectCard projectName="LightHouse" />

        </div>
    </main>

  )
}

export default Main