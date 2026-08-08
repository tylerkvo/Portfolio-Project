import React from 'react'
import About from './About'
import Experience from './Experience'
import Works from './Works'
import Particle from './Particle'
import Header from './Header'
import Footer from './Footer'
function Home() {
  return (
    <div className="App">
        <div id="page" className="s-pagewrap">
            <Header/>
            <Particle />
            <section id="intro" className="s-intro">
                    <div className="row">
                    
                    <div className="column large-full">

                        <h1>
                        I'm Tyler Vo, <br/>
                        Welcome to my Portfolio <br/>
                        
                        </h1>

                        <ul className="hero-social">
                            <li>
                                <a href="https://www.linkedin.com/in/tylerkvo" title="">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/tylerkvo" title="">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCeAJBlC7PHehR6dZ1hXi0qw" title="">Youtube</a>
                            </li>
                        </ul> 
                        
                    </div> 
                </div> 
            </section> 
            <About/>
            <Experience/>
            <Works/>
            <Footer />
        </div>
    </div>
  )
}

export default Home