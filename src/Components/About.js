import React from 'react'
import treepic from "../images/treepic.jpg" 
import colorado from "../images/colorado.jpeg" 
import family from "../images/family.jpeg"
import hoos from "../images/hoos.jpeg"
function About() {
  return (
        <section id="about" className="s-about target-section">

            <div className="s-about__section s-about__section--profile">
                <div className="row">
                    <div className="column large-6 medium-8 tab-full">

                        <div className="section-intro" data-num="" data-aos="fade-up">
                            <h3 className="subhead">About Me</h3>
                            <h1 className="display-1">I'd climb any branch or tree to achieve my goal.</h1>
                        </div>

                        <div className="profile-pic-right" data-aos="fade-up">
                            <img src={treepic} alt="Image"/>
                        </div>

                        <h3 data-aos="fade-up">Profile</h3>

                        <p data-aos="fade-up">
                        I am a third-year student at the University of Virginia's McIntire School of Commerce studying Commerce, Computer Science, and Data Science. I have strong interest in consulting and tech roles. I hope to begin my career in a New York, Seattle, Dallas, or Washington D.C. office.
                        </p>

                    </div>
                    
                </div>
                <div className="row">
                    <div className="column large-6 medium-8 tab-full"></div>
                    <div className="column large-6 medium-8 tab-full">

                        <div className="profile-pic-left" data-aos="fade-up">
                            <img src={family} alt="Image"/>
                        </div>
                        <h5 data-aos="fade-up">Where I am From</h5>
                        <p data-aos="fade-up">
                        On a more fun note, welcome to my portfolio, a more relaxed and casual outlet for me to express myself! This is a work in progress and I hope to continue progressing on this when I find time or accomplish something new to add. Now a little bit about me...
                        </p>
                        <p data-aos="fade-up">
                        While my family comes from Vietnam, my sister LeAnn and I were born and raised in the Hampton Roads – a part of Virginia referred to as the 757.
                        </p>
                        <p>
                        There, I studied at Menchville High School where I played attack and goalie for our lacrosse team, was drum major for my marching band, and even earned the scouting rank of Eagle along the way.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="column large-6 medium-8 tab-full">
                        <div className="profile-pic-right" data-aos="fade-up">
                            <img src={hoos} alt="Image"/>
                        </div>
                        <h5 data-aos="fade-up">Where I am Now</h5>
                        <p data-aos="fade-up">
                        Go Hoos! I chose UVA because of the world reknowned food and dining. It is hard to tell with just text, but that was aggressive sarcasm. The food here is pretty awful. I really chose UVA because of the beautiful campus and value per dollar.
                        </p>
                        <p data-aos="fade-up">
                        Here, I love to explore restaurants around Charlottesville, meet as many people as I possibly can, and figure out who I am and who I want to be (I spend a lot of time doing that last one). 
                        </p>
                        <p data-aos="fade-up">
                        For fun, I complete endless amounts of projects with my brothers in Pi Lambda Phi (I am looking at you table it took me 15 hours to paint), explore my culture and race to finish bowls of pho with the Vietnamese Student Association, and speed (or make my way at a reasonable pace) down the slopes with VASST ski team. 
                        </p>

                    </div>
                    
                </div>

                <div className="row">
                    <div className="column large-6 medium-8 tab-full"></div>
                    <div className="column large-6 medium-8 tab-full">

                        <div className="profile-pic-left" data-aos="fade-up">
                            <img src={colorado} alt="Image"/>
                        </div>
                        <h5 data-aos="fade-up">Who I am Now</h5>
                        <p data-aos="fade-up">
                        More about me? I am a highly energic and passionate individual who wants to try and do everything there is. Maybe one day I'll learn to fly a plane, become a politician, or travel to every US state and country in the world to experience new cusine.
                        </p>
                        <p data-aos="fade-up">
                        In my free time, I appreciate outdoorsy activities, including but not limited to: golf, skiing, scuba diving, spike-ball, long and skim boarding, and team sports. I dabble in music – mostly trombone, but I am starting to get good at guitar so ladies watch out!
                        </p>
                        <p>
                        Beyond that, I try to cook, occasionally game and scroll through Reddit, win money playing poker, stay up to date with news, solve the daily NYT crossword (can never finish past Wednesday for some reason), and will die for Justin Herbert and the Chargers. Now on to a little about my professional career so far:
                        
                        </p>
                    </div>
                </div>
            </div>
        
           
        </section> 
  )
}

export default About