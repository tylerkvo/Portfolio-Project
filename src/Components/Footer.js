import React from 'react'

function Footer() {
  return (
    <section id="contact">
   
        <footer id="colophon" class="s-footer">

            <div class="row s-footer__contact-header">
                <div class="column lg-12">
                    <h2 class="text-pretitle">Get In Touch</h2>

                    <p class="text-huge-title">
                        Feel free to reach out if you wanna collaborate with me or have a chat.
                    </p>
                </div>
            </div> 

            <div class="row s-footer__contact-content">

                <div class="column lg-5 md-6 stack-on-900 left-block">
                    <p>
                    If my skills and qualifications seem like a good fit, please don't hesitate to contact me! 
                    </p>

                    <div class="s-footer__buttons">
                        <a href="mailto:tyler.k.vo@gmail.com" class="btn btn--primary u-fullwidth">Say Hello</a>
                        <a href="https://drive.google.com/file/d/1d1uGdYBhN5zKIZRBEVNdRYCFGEh8-V5S/view?usp=sharing" class="btn btn--stroke u-fullwidth">Download Resume</a>
                    </div>

                    
                </div>

                <div class="column lg-4 md-5 stack-on-900 right-block">

                    <div class="s-footer__contact-info" >
                        <h2 class="text-subtitle">
                            Contact
                        </h2>
                        <ul class="link-list">
                            <li><a href="mailto:tyler.k.vo@gmail.com">tyler.k.vo@gmail.com</a></li>
                            <li><a href="mailto:tkv9zd@virginia.edu">tkv9zd@virginia.edu</a></li>
                            <li><a href="tel:7575250353">(757) 525-0353</a></li>
                        </ul>
                    </div>

                    <div class="s-footer__social">
                        <h2 class="text-subtitle">
                            Connect
                        </h2>
                        <ul class="link-list">
                            <li><a href="https://www.linkedin.com/in/tylerkvo">LinkedIn</a></li>
                            <li><a href="https://twitter.com/tylerrkvo">Twitter</a></li>
                            <li><a href="https://instagram.com/tylerr.vo">Instagram</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div> 

            <div class="row s-footer__bottom">
                <div class="column ss-copyright">
                    <span>Created by Tyler Vo</span> 
                    <span>Design Inspired by StyleShout</span>
                </div>

                
            </div> 

        </footer>
        </section>
  )
}

export default Footer