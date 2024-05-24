import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false); 
        }
    };

    return (
        <header id="masthead" className={`s-header ${isMenuOpen ? 'menu-is-open' : ''}`}>
            <div className="s-header__block">
                <div className="s-header__branding">
                    <p className="site-title">
                        <a href="/" rel="home">tyler vo.</a>
                    </p>
                </div>

                <button className={`s-header__menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} onClick={toggleMenu}>
                    <span>Menu</span>
                </button>
            </div>

            <div className={`row s-header__nav-wrap ${isMenuOpen ? 'is-visible' : ''}`}>
                <nav className="s-header__nav">
                    <ul>
                        <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>intro</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>about</a></li>
                        <li><a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>resume</a></li>
                        <li><a href="#works" onClick={(e) => { e.preventDefault(); scrollToSection('works'); }}>works</a></li>
                        <li><a href="#colophon" onClick={(e) => { e.preventDefault(); scrollToSection('colophon'); }}>contact</a></li>
                    </ul>
                </nav>

                <ul className="s-header__social">
                </ul>  
            </div> 
        </header> 
    );
}

export default Header;
