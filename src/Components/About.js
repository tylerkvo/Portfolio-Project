import React from 'react'
function About() {
  return (
    <section id="about" className="s-about">


        <div className="s-about__block s-about__intro">

            <div className="row">
                <div className="column lg-12">
                    <h2 className="text-pretitle animate-on-load">About Me</h2>

                    <p className="attention-getter animate-on-load">
                    <a><img width="230" height="200" class="u-pull-left" alt="sample-image" src="images/profilePic.png"/></a>
                    I am a third year student studying Computer Science and Commerce, with a concentration in Information Technology. Coming to UVA for McIntire, it wasn't until after taking a CS course that I became passionate about technology. I am interested in consulting, business analysis, product management, SWE – somewhere I can leverage my technical skills to create value or develop business solutions.
                    </p>
                </div>
            </div>

        </div> 

    
    </section> 
  )
}

export default About