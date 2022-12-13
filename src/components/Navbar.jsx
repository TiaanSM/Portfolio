import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <h1 className="nav-title">&Open</h1>
        <span className="nav-btn-container">
          <button className="login-btn">LOGIN</button>
          <button className="demo-btn">BOOK A DEMO</button>
          <button className="hamburger-btn">
              <div className="hamburger-bar-1"></div>
              <div className="hamburger-bar-2"></div>
          </button>  
        </span>    
    </nav>
  )
}

export default Navbar