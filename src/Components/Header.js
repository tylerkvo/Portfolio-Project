import React from 'react'


function Header() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  return (
    
    <header id="masthead" className="s-header">

             <div className="s-header__block">
                <div className="s-header__branding">
                    <p className="site-title">
                        <a href="/" rel="home">tyler vo.</a>
                    </p>
                </div>

               
            </div> 

            <div className="row s-header__nav-wrap">

            <nav className="s-header__nav">
                <ul>
                    <li><a onClick={() => scrollToSection('intro')}>intro</a></li>
                    <li><a onClick={() => scrollToSection('about')}>about</a></li>
                    <li><a onClick={() => scrollToSection('resume')}>resume</a></li>
                    <li><a onClick={() => scrollToSection('works')}>works</a></li>
                    <li><a onClick={() => scrollToSection('colophon')}>contact</a></li>
                </ul>
            </nav>

                <ul className="s-header__social">
                    
                </ul>  

            </div> 
            
    </header> 
  )
}

export default Header