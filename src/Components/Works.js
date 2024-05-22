import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';

function Works() {
    return(
        <section id="works" class="s-works">

        <div class="row">
            <div class="column lg-12">
                <h2 class="text-pretitle">Works</h2>

                <p class="text-huge-title">
                Selected projects I am excited to share.
                </p>
            </div>
        </div>

        <div class="row folio-list block-lg-one-half block-stack-on-550" >
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/Scanner" className="folio-item__thumb-link">
                            <img src="images/portfolio/ScannerApp.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Software Development</span>
                            <a href="https://github.com/tylerkvo" title="Project Link" class="project-link">GitHub Link</a>
                        </div>
                        <h4 class="folio-item__title">Scanner Mobile App</h4>
                    </div>
                </div>
            </div> 
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/EscapeTheLawn" className="folio-item__thumb-link">
                            <img src="images/portfolio/Escapethelawn.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Video Game Design</span>
                            <a href="https://github.com/tylerkvo" title="Project Link" class="project-link">GitHub Link</a>
                        </div>
                        <h4 class="folio-item__title">Escape the Lawn Video Game</h4>
                    </div>
                </div>
            </div> 
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/LousList" className="folio-item__thumb-link">
                            <img src="images/portfolio/LousList.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Software Development</span>
                            <a href="https://github.com/tylerkvo" title="Project Link" class="project-link">GitHub Link</a>
                        </div>
                        <h4 class="folio-item__title">New Lou's List Web App</h4>
                    </div>
                    
                </div>
            </div> 
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/Sabre" className="folio-item__thumb-link">
                            <img src="images/portfolio/Sabre.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Product Management</span>
                            <a href="https://marvelapp.com/prototype/9g6jh8i" title="Project Link" class="project-link">GitHub Link</a>
                        </div>
                        <h4 class="folio-item__title">Sabre App Prototype Demo</h4>
                    </div>
                </div>
            </div> 
            
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/Portfolio" className="folio-item__thumb-link">
                            <img src="images/portfolio/Portfolio.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Web Design</span>
                            <a href="https://github.com/tylerkvo/Portfolio-Project" title="Project Link" class="project-link">GitHub Link</a>
                        </div>
                        <h4 class="folio-item__title">
                            Personal Portfolio Website
                        </h4>
                    </div>
                </div>
            </div> 
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/UNSC" className="folio-item__thumb-link">
                            <img src="images/portfolio/UNSC.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Data Analysis</span>
                            <a href="https://github.com/tylerkvo/UNSC-Speech-Data-Analysis-Project/blob/main/UNSC_data_analysis.py" title="Project Link" class="project-link">GitHub Link</a>
                        </div>
                        <h4 class="folio-item__title">UNSC Speech Analysis Presentation</h4>
                    </div>
                    
                </div>
            </div>
            
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/StewsBoatSprings" className="folio-item__thumb-link">
                            <img src="images/portfolio/StewsBoatSprings.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Video Creation</span>
                            <a href="https://youtu.be/9BDKh_6CvaY" title="Project Link" class="project-link">YouTube Link</a>
                        </div>
                        <h4 class="folio-item__title">StewsBoat Springs Vlog</h4>
                    </div>
                    
                </div>
            </div>
            
            
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <Link to="/projects/SlideDecks" className="folio-item__thumb-link">
                            <img src="images/portfolio/Presentation.png" alt="" />
                        </Link>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Presentation</span>
                            <a href="https://drive.google.com/file/d/1Q0Szn4a2cr5Aw6klKUxSkCJ6KyygiG2d/view?usp=sharing/" title="Project Link" class="project-link">Project Link</a>
                        </div>
                        <h4 class="folio-item__title">Slide Deck Examples</h4>
                    </div>
                </div>
            </div>
            
            
           
            
        </div>

        
    </section> 
)
}

export default Works