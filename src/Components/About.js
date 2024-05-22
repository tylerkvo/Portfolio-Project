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
                    I am a recent graduate from the University of Virginia where I studied Computer Science and Commerce, with a concentration in Information Technology. With a passion for technology and love for creation and continuous improvement, I spend much of my free time familiarizing myself with different languages and working on projects where I apply the skills I have learned. From developing mobile apps and designing video games to producing travel vlogs, I deeply cherish the entire creative process and strive to enhance each project with every iteration. I am interested in product management, consulting, business analysis, software development – somewhere I can leverage my technical skills to create value or develop business solutions.
                    </p>
                </div>
            </div>

        </div> 

    
    </section> 
  )
}

export default About