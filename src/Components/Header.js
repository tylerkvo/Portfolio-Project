import React from 'react'
import logo from '../images/profilePic.png'
function Header() {
  return (
    
    <header className="s-header">

        <div className="header-logo">
            <a href="index.html">
                <img src={logo} alt="Homepage"/>
            </a>
        </div>

        <div className="header-content">
    
            <nav className="row header-nav-wrap">
                <ul className="header-nav">
                    <li><a className="smoothscroll" href="#home" title="Intro">Home</a></li>
                    <li><a className="smoothscroll" href="#about" title="About">About</a></li>
                    <li><a className="smoothscroll" href="#experience" title="About">Experience</a></li>
                    <li><a className="smoothscroll" href="#education" title="About">Education</a></li>
                    <li><a href="#contact" title="Contact us">Contact</a></li>
                </ul>
            </nav> 

            <a href="https://drive.google.com/file/d/1d1uGdYBhN5zKIZRBEVNdRYCFGEh8-V5S/view?usp=sharing" className="btn btn--stroke btn--small">Download Resume</a>

        </div> 

        <a className="header-menu-toggle" href="#0"><span>Menu</span></a>

    </header> 
  )
}

export default Header