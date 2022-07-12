import React from 'react'
function Home() {
  return (
    <section id="hero" className="s-hero target-section" data-parallax="scroll" data-natural-width={3000} data-natural-height={2000} data-position-y= {"center"} >
        
        <div className="row hero-content">
            
            <div className="column large-full">

                <h1>
                Hello, I'm Tyler Vo <br/>
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

        <div className="hero-scroll">
            <a href="#about" className="scroll-link smoothscroll">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
            </a>
        </div> 
    
    </section> 
  )
}

export default Home