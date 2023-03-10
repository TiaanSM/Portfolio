import styles from '../styles/Components.module.css'

const PageTransition = (props) => {

  return (
    
    <div className={props.playAnimation ? styles.pageCoverAfter : styles.pageCoverBefore}></div>

  )
}

export default PageTransition