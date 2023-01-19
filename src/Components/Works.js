import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Works() {
    return(
        <section id="works" class="s-works">

        <div class="row">
            <div class="column lg-12">
                <h2 class="text-pretitle">Works</h2>

                <p class="text-huge-title">
                Selected Projects I am Proud to have Worked on.
                </p>
            </div>
        </div>

        <div class="row folio-list block-lg-one-half block-stack-on-550" >

            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <a class="folio-item__thumb-link" href="https://drive.google.com/file/d/1rTfes1E4HwZpIRBhgrjxi76OYBB_Sa-s/view?usp=sharing" Title="UNSC Speech Analysis Presentatio" data-size="1050x700">
                            <img src="images/portfolio/UNSC.png" 
                             alt=""/>
                        </a>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Data Analysis</span>
                            <a href="https://github.com/tylerkvo/UNSC-Speech-Data-Analysis-Project/blob/main/UNSC_data_analysis.py" title="Project Link" class="project-link">Project Link</a>
                        </div>
                        <h4 class="folio-item__title">UNSC Speech Analysis Presentation</h4>
                    </div>
                    
                </div>
            </div>
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <a class="folio-item__thumb-link" href="https://project-a-15-f2022.herokuapp.com/" >
                            <img src="images/portfolio/LousList.png" 
                                 alt=""/>
                        </a>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Software Development</span>
                            <a href="https://github.com/tylerkvo" title="Project Link" class="project-link">Project Link</a>
                        </div>
                        <h4 class="folio-item__title">New Lou's List Web App</h4>
                    </div>
                    
                </div>
            </div> 
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                    <a class="folio-item__thumb-link" href="https://youtu.be/9BDKh_6CvaY" >
                            <img src="images/portfolio/StewsBoatSprings.png" 
                                 alt=""/>
                        </a>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Video Creation</span>
                            <a href="https://youtu.be/9BDKh_6CvaY" title="Project Link" class="project-link">Project Link</a>
                        </div>
                        <h4 class="folio-item__title">StewsBoat Springs Vlog</h4>
                    </div>
                    
                </div>
            </div>
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <a class="folio-item__thumb-link" href="https://www.tylerkvo.com/" title="Personal Portfolio Website" data-size="1050x700">
                            <img src="images/portfolio/Portfolio.png" 
                                 alt=""/>
                        </a>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Web Design</span>
                            <a href="https://github.com/tylerkvo/Portfolio-Project" title="Project Link" class="project-link">Project Link</a>
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
                        <a class="folio-item__thumb-link" href="https://drive.google.com/file/d/1Q0Szn4a2cr5Aw6klKUxSkCJ6KyygiG2d/view?usp=sharing" title="Slide Deck Examples" data-size="1050x700">
                            <img src="images/portfolio/Presentation.png" 
                                  alt=""/>
                        </a>
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
            <div class="column" >
                <div class="folio-item">
                    <div class="folio-item__thumb">
                        <a class="folio-item__thumb-link" href="https://github.com/tylerkvo/Arcade-Games" title="Treasure Dungeon Arcade Game" data-size="1050x700">
                            <img src="images/portfolio/TreasureDungeon.png" 
                                alt=""/>
                        </a>
                    </div>
                    <div class="folio-item__info">
                        <div class="folio-item__meta">
                            <span class="cat">Python Code</span>
                            <a href="https://github.com/tylerkvo/Arcade-Games" title="Project Link" class="project-link">Project Link</a>
                        </div>
                        <h4 class="folio-item__title">Treasure Dungeon Arcade Game</h4>
                    </div>
                </div>
            </div> 
        </div>

        
    </section> 
)
}

export default Works