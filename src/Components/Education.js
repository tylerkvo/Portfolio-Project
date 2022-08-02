import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Education() {
    return(
    <section id="education">
        <div className= "s-education">
        <div className="row">
                <div className="column">
                    <h3 data-aos="fade-up">Education</h3>
                </div>
        </div>
    <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        
        iconStyle={{ background: 'rgb(249, 134, 26)', color: '#fff' }}
        date='AUGUST 2022 - MAY 2024'
        >
        <div className="position">
            <div className="position__header">
                <h6>
                    <span className="position__co">UVA McIntire School of Commerce</span>
                    <span className="position__pos">Bachelor of Science - BS, Commerce</span>
                </h6>

            </div>
            <div className="position__body">
            Activities and societies: Creating Assests, Savings, and Hope (C.A.S.H) at Madison House, Virginia Case Club
            </div>
        </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='SEPTEMBER 2020 - MAY 2024'
       
        iconStyle={{ background: 'rgb(249, 134, 26)', color: '#fff' }}
        >
        <div className="position">
            <div className="position__header">
                <h6>
                    <span className="position__co">UNIVERSITY OF VIRGINIA</span>
                    <span className="position__pos">Bachelor of Arts - BA, Computer Science</span>
                </h6>

            </div>
            <div className="position__body">
            Activities and societies: Vietnamese Student Association, IM Sports, VASST Ski Team, Greek Life (Social Chair)
            </div>
        </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='AUGUST 2022 - MAY 2024'
       
        iconStyle={{ background: 'rgb(249, 134, 26)', color: '#fff' }}
        >
        <div className="position">
            <div className="position__header">
                <h6>
                    <span className="position__co">MENCHVILLE HIGH SCHOOL</span>
                    <span className="position__pos">Advanced Studies Diploma</span>
                </h6>

            </div>
            <div className="position__body">
            Activities and societies: Lacrosse (Co-Captain), Marching Band (Drum Major), National Honor Society, National Science Honor Society, French Honor Society, Tri-M Honor Society, Model UN, Key Club
            </div>
        </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date='AUGUST 2022 - MAY 2024'
        
        iconStyle={{ background: 'rgb(249, 134, 26)', color: '#fff' }}
        >
        <div className="position">
            <div className="position__header">
                <h6>
                    <span className="position__co">SUMMER RESIDENTIAL GOVERNORS SCHOOL</span>
                    <span className="position__pos">Math, Science, & Technology</span>
                </h6>

            </div>
            <div className="position__body">
            Dirt Under the Fingernails Mathematics: Systems Which Evolve Over Time, Combinatorial Game Theory, Number Theory, Graph Theory, and Cellular Automaton.
            </div>
        </div>
        </VerticalTimelineElement>
        
    </VerticalTimeline>
    </div>
    </section>
    )
}

export default Education