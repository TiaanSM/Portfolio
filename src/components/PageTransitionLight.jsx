import styles from '../styles/Components.module.css'

const PageTransitionLight = (props) => {

  return (
    
    <div className={props.playAnimation ? styles.pageCoverAfter2 : styles.pageCoverBefore2}></div>

  )
}

export default PageTransitionLight