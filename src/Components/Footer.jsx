import React from 'react'

function Footer() {
  return (
    <section id="contact">
   
        <footer id="colophon" className="s-footer">

            <div className="row s-footer__contact-header">
                <div className="column lg-12">
                    <h2 className="text-pretitle">Get In Touch</h2>

                    <p className="text-huge-title">
                        Feel free to reach out if you wanna collaborate with me or have a chat.
                    </p>
                </div>
            </div> 

            <div className="row s-footer__contact-content">

                <div className="column lg-5 md-6 stack-on-900 left-block">
                    <p>
                    If my skills and qualifications seem like a good fit, please don't hesitate to contact me! 
                    </p>

                    <div className="s-footer__buttons">
                        <a href="mailto:tyler.k.vo@gmail.com" className="btn btn--primary u-fullwidth">Say Hello</a>
                        <a href="https://drive.google.com/file/d/16INiwgolR-VK3KeE5vsFOAIuydQk5ayH/view?usp=sharing" className="btn btn--stroke u-fullwidth">Download Resume</a>
                    </div>

                    
                </div>

                <div className="column lg-4 md-5 stack-on-900 right-block">

                    <div className="s-footer__contact-info" >
                        <h2 className="text-subtitle">
                            Contact
                        </h2>
                        <ul className="link-list">
                            <li><a href="mailto:tyler.k.vo@gmail.com">tyler.k.vo@gmail.com</a></li>
                            <li><a href="mailto:tkv9zd@virginia.edu">tkv9zd@virginia.edu</a></li>
                            <li><a href="tel:7575250353">(757) 525-0353</a></li>
                        </ul>
                    </div>

                    <div className="s-footer__social">
                        <h2 className="text-subtitle">
                            Connect
                        </h2>
                        <ul className="link-list">
                            <li><a href="https://www.linkedin.com/in/tylerkvo">LinkedIn</a></li>
                            <li><a href="https://instagram.com/tylerr.vo">Instagram</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div> 

            <div className="row s-footer__bottom">
                <div className="column ss-copyright">
                    <span>Created by Tyler Vo</span> 
                    <span>Design Inspired by StyleShout</span>
                </div>

                
            </div> 

        </footer>
        </section>
  )
}

export default Footer