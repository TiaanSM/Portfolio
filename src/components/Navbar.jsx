import styles from '../styles/Components.module.css'

const Navbar = (props) => {

  const isMobile = window.innerWidth < 800;

  // styles
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

  // styles for devices with device width < 800px
  const copyrightSmall = {
    width: '4.5rem',
    display: 'block',
    fontFamily: 'Niramit, sans-serif',
    lineHeight: '0.8rem',
    fontSize: '14px',
    color: props.textColor,
    fontWeight: '100'
  }

  const lineSmall = {
    display: 'block',
    width: 'clamp(4rem, 2.2rem + 9.6vw, 7rem)',
    height: '1px',
    backgroundColor: props.textColor,
  }

  const linkSmall = {
    display: 'block',
    textDecoration: 'none',
    fontWeight: '100',
    color: props.textColor,
    lineHeight: '0.8rem',
    fontFamily: 'Niramit, sans-serif',
    fontSize: '14px',
  }
  
  return (

    <nav className={styles.navbar}>
        <span style={isMobile ? copyrightSmall : copyrightStyles}>&copy; / 2024</span>
        <div style={isMobile ? lineSmall : lineStyles}></div>
        <a href={props.href} style={isMobile ? linkSmall : linkStyles}>{props.link}</a>
    </nav>

  )
}

export default Navbar