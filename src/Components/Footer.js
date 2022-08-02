import React from 'react'

function Footer() {
  return (
    <section id="contact">
    <footer className="s-footer h-dark-bg">
            

            <div className="row s-footer__main">
                <div className="column large-6">
                    <div className="section-intro" data-aos="fade-up">
                        <h3 className="subhead">Get In Touch</h3>

                        <h1 className="display-1">
                        Have an opportunity that I would be a perfect fit for?
                        Let's turn that idea into reality. 
                        </h1>
                    </div>

                    <div className="footer-email-us">
                        <a href="mailto:tyler.k.vo@gmail.com" className="btn btn--primary h-full-width">Let's Talk</a>
                    </div>
                </div>

                <div className="column large-5">
                    <div className="footer-contacts">
                        <div className="footer-contact-block" data-aos="fade-up">
                            <h5 className="footer-contact-block__header">
                                Email
                            </h5>
                            <p className="footer-contact-block__content">
                                <a href="mailto:tyler.k.vo@gmail.com">tyler.k.vo@gmail.com</a> <br />
                                <a href="mailto:tkv9zd@virginia.edu">tkv9zd@virginia.edu</a>
                            </p>
                        </div> 
                        <div className="footer-contact-block" data-aos="fade-up">
                            <h5 className="footer-contact-block__header">
                                Phone
                            </h5>
                            <p className="footer-contact-block__content">
                                <a href="tel:+17575250353">+1 757 525 0353</a>
                            </p>
                        </div> 
                    
                        <div className="footer-contact-block" data-aos="fade-up">
                            <h5 className="footer-contact-block__header">
                                Social
                            </h5>
                            <ul className="footer-contact-block__list">
                                <li><a href="https://twitter.com/tylerrkvo">Twitter</a></li>
                                <li><a href="https://instagram.com/tylerr.vo">Instagram</a></li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div> 

            <div className="row s-footer__bottom">
                <div className="column large-full ss-copyright">
                    <span>Created by Tyler Vo</span> 
                    <span>Design Inspired by StyleShout</span>
                </div> 

                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"/></svg>
                    </a>
                </div> 
            </div>

        </footer> 
        </section>
  )
}

export default Footer