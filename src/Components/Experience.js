import React from 'react'
function resume() {
  return (
    <section id="resume" className="s-resume">

        <div className="s-resume__block s-resume__career">

            <div className="row s-resume__career-header">
                <div className="column lg-12">
                    <h2 className="text-pretitle">Resume</h2>

                    <p className="text-huge-title">
                    Here is my education, work experience, & some skills I've got.
                    </p>
                </div>
            </div>

            <div className="row s-resume__timeline" >
                <div className="column lg-6 stack-on-900 s-resume__timeline-section" >

                    <h2 className="text-subtitle">
                        Experience
                    </h2>

                    <div className="timeline">

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Coastal Cloud</h4>
                                <h5 className="timeline__meta">Business Analyst Summer Intern</h5>
                                <p className="timeline__timeframe">May 2022 - July 2022</p>
                            </div>
                            <div className="timeline__desc">
                            <p>
                                <ul>
                                    <li>Executed client discovery sessions and documented 100+ requirements to develop custom solutions, streamlining and reducing business processes by over 30% for 10+ stakeholders</li>
                                    
                                    <li>Utilized the Software Development Lifecycle in scoping a project, gathering requirements, writing user stories, and defining testing scenarios to communicate between both business and IT stakeholders</li>
                                </ul>
                            </p>

                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title" >Lighthouse Parental Control</h4>
                                <h5 className="timeline__meta">Financial Analyst Intern</h5>
                                <p className="timeline__timeframe">Febuary 2021 - April 2021</p>
                            </div>
                            <div className="timeline__desc">
                                <p>
                                <ul>
                                    <li>Performed a valuation and created a pitch deck for an online security start-up, which targets insufficiencies of current solutions to protect children from inappropriate content, to present to 20+ potential investors</li>
                                    <li>Conducted market research on industry drivers and 5 major competitors to advise on B2B, B2C, and B2B2C revenue strategies within the company’s SAAS business model, recommending 4 potential markets for entry</li>
                                </ul>

                                </p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Nail Luv & Spa</h4>
                                <h5 className="timeline__meta">Operations Manager</h5>
                                <p className="timeline__timeframe">June 2018 - July 2021</p>
                            </div>
                            <div className="timeline__desc">
                                <p>
                                    
                                </p>
                            </div>
                        </div>

                    </div> 

                </div> 

                <div className="column lg-6 stack-on-900 s-resume__timeline-section" >

                    <h2 className="text-subtitle">
                        Education
                    </h2>

                    <div className="timeline">

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">McIntire School of Commerce at the University of Virginia</h4>
                                <h5 className="timeline__meta">Bachelor of Science, Commerce</h5>
                                <p className="timeline__timeframe">May 2024</p>
                            </div>
                            <div className="timeline__desc">
                                <p>Foundations of Commerce, Intro to Financial Accounting, Intro to Management Accounting, Strategy and Systems, Behavior Issues in Marketing and Management, Quantitative and Financial Management, Stategic Value Creation, Managerial Decision Making, Project & Product Management, Commercial Law I and II</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">University of Virginia</h4>
                                <h5 className="timeline__meta">Bachelor of Arts, Computer Science</h5>
                                <p className="timeline__timeframe">May 2024</p>
                            </div>
                            <div className="timeline__desc">
                                <p>Introduction to Programming, Discrete Mathematics, Software Development Methods, Program & Data Representation, Data Structures and Algorithms 2, Advanced Software Development, Programming for Data Science, Principles of Econ: Microecon and Macroecon, Intro to Statistical Analysis</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Menchville High School</h4>
                                <h5 className="timeline__meta">Advanced Diploma</h5>
                                <p className="timeline__timeframe">May 2020</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Summer Residential Governor's School</h4>
                                <h5 className="timeline__meta">Math, Science, & Technology</h5>
                                <p className="timeline__timeframe">July 2019</p>
                            </div>
                        </div>

                    </div> 
                    
                </div> 

            </div> 

            

            <div className="row s-resume__clients" >
                <div className="column lg-12" >

                    <h2 className="text-pretitle">Clubs and Activities</h2>

                    <ul className="clients-list text-small-title">
                        <li><a href="https://uva.pilambdaphi.org/">Pi Lambda Phi </a></li>
                        <li><a href="https://www.vccatuva.org/">Virginia Case Club</a></li>
                        <li><a href="https://www.vsaatuva.org/">Vietnamese Student Association</a></li>
                        <li><a href="https://vasst.org/#intro">VASST</a></li>
                        <li><a href="https://www.commerce.virginia.edu/student-orgs/asn">Asian Student Network at McIntire</a></li>
                        <li><a href="https://www.madisonhouse.org/overview-cash">CASH at Madison House</a></li>
                        
                    </ul>

                </div>
            </div> 

        </div> 
    </section> 
  )
}

export default resume