import React from 'react'


function Header() {
  return (
    
    <header id="masthead" className="s-header">

             <div className="s-header__block">
                <div className="s-header__branding">
                    <p className="site-title">
                        <a href="../" rel="home">tyler vo.</a>
                    </p>
                </div>

               
            </div> 

            <div className="row s-header__nav-wrap">

                <nav className="s-header__nav">
                    <ul>
                        <li className="current"><a href="../" className="smoothscroll">intro</a></li>
                        <li><a href="../#about" className="smoothscroll">about</a></li>
                        <li><a href="../#resume" className="smoothscroll">resume</a></li>
                        <li><a href="../#works" className="smoothscroll">works</a></li>
                        <li><a href="../#colophon" className="smoothscroll">contact</a></li>
                    </ul>
                </nav> 

                <ul className="s-header__social">
                    
                </ul>  

            </div> 
            
    </header> 
  )
}

export default Header