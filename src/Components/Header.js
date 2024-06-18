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
                <li>
                    <a href="https://www.linkedin.com/in/tylerkvo">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                    </svg>
                        <span className="u-screen-reader-text">LinkedIn</span>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/tylerkvo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                        </svg>
                        <span className="u-screen-reader-text">Github</span>
                    </a>
                </li>
                
                </ul>  
            </div> 
        </header> 
    );
}

export default Header;
