import styles from '../styles/Components.module.css'

import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const copyrightStyles = {
    width: '4.5rem',
    display: 'block',
    transform: 'rotate(-90deg)',
    position: 'absolute',
    bottom: '6rem',
    left: '0.5rem',
    fontFamily: 'Niramit, sans-serif',
    lineHeight: '0.8rem',
    fontSize:'14px',
    color: props.textColor,
    fontWeight: '100'
}

  const lineStyles = {
    display: 'block',
    width: '1px',
    height: '7rem',
    backgroundColor: props.textColor,
    position: 'absolute',
    top: '40vh',
    left: '2.5rem'
}

const linkStyles = {
    display: 'block',
    transform: 'rotate(-90deg)',
    textDecoration: 'none',
    fontWeight: '100',
    color: props.textColor,
    position: 'absolute',
    left: '1rem',
    top: '6rem',
    lineHeight: '0.8rem',
    fontFamily: 'Niramit, sans-serif',
    fontSize: '14px',
}

  return (

    <nav className={styles.navbar}>
        <span style={copyrightStyles}>&copy; / 2023</span>
        <div style={lineStyles}></div>
        <a href={props.href} style={linkStyles}>{props.link}</a>
    </nav>

  )
}

export default Navbar