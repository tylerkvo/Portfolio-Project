import React from 'react'
function Extra() {
  return (
    <React.Fragment>
        
        <section id="services" className="s-services target-section h-dark-bg">
            
            <div className="row s-services__content">

                <div className="vert-line"></div>

                <div className="column large-6 s-services__leftcol">
                    <div className="section-intro" data-num="02" data-aos="fade-up">
                        <h3 className="subhead">Expertise</h3>

                        <h1 className="display-1">
                        I focus on crafting web experiences
                        and designs that works.
                        </h1>
                    </div>

                    <p className="lead" data-aos="fade-up">
                    Suspendisse eu ligula. Duis arcu tortor, suscipit eget, 
                    imperdiet nec, imperdiet iaculis, ipsum. Nulla facilisi.
                    Etiam rhoncus. Praesent blandit laoreet nibh.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                    Cras sagittis. Praesent egestas tristique nibh.
                    </p>
                </div> 

                <div className="column large-6">
                    <ul className="services-list" data-aos="fade-up">
                        <li className="services-list__item is-active">
                            <div className="services-list__item-header">
                                <h5>Product Design</h5>
                            </div>
                            <div className="services-list__item-body">
                                <p>
                                Fusce egestas elit eget lorem. Donec venenatis vulputate lorem. 
                                Nam at tortor in tellus interdum sagittis. Vestibulum fringilla 
                                pede sit amet augue. Praesent blandit laoreet nibh.
                                Donec quam felis, ultricies nec, pellentesque eu.
                                </p>
                            </div>
                        </li> 
                        <li className="services-list__item">
                            <div className="services-list__item-header">
                                <h5>Branding</h5>
                            </div>
                            <div className="services-list__item-body">
                                <p>
                                Sed cursus turpis vitae tortor. Sed aliquam ultrices mauris. 
                                Fusce fermentum. Curabitur turpis. Nunc egestas, augue at pellentesque 
                                laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. 
                                In consectetuer turpis ut velit. Curabitur at lacus.
                                </p>
                            </div>
                        </li> 
                        <li className="services-list__item">
                            <div className="services-list__item-header">
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="services-list__item-body">
                                <p>
                                Suspendisse non nisl sit amet velit hendrerit rutrum. Etiam vitae tortor. 
                                Ut tincidunt tincidunt erat. Praesent nonummy mi in odio. Praesent ut 
                                ligula non mi varius sagittis. Curabitur turpis. Nunc egestas, augue at pellentesque 
                                laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
                                </p>
                            </div>
                        </li> 
                        <li className="services-list__item">
                            <div className="services-list__item-header">
                                <h5>UX Research</h5>
                            </div>
                            <div className="services-list__item-body">
                                <p>
                                Nullam quis ante. Sed libero. Curabitur at lacus ac velit ornare lobortis. 
                                Morbi nec metus. Aenean vulputate eleifend tellus. Nullam vel sem. Nam ipsum risus, 
                                rutrum vitae, vestibulum eu, molestie vel, lacus. Phasellus ullamcorper ipsum rutrum nunc. 
                                Cras dapibus. Praesent egestas neque eu enim.
                                </p>
                            </div>
                        </li> 
                        <li className="services-list__item">
                            <div className="services-list__item-header">
                                <h5>Visual Design</h5>
                            </div>
                            <div className="services-list__item-body">
                                <p>
                                Ut id nisl quis enim dignissim sagittis. Pellentesque egestas, neque sit amet convallis 
                                pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Phasellus volutpat, 
                                metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. 
                                Cras dapibus. Praesent adipiscing.
                                </p>
                            </div>
                        </li> 
                        <li className="services-list__item">
                            <div className="services-list__item-header">
                                <h5>E-Commerce</h5>
                            </div>
                            <div className="services-list__item-body">
                                <p>
                                Praesent ac sem eget est egestas volutpat. Nam pretium turpis et arcu. Quisque ut nisi. 
                                Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque 
                                ante vel mi. Phasellus dolor. Aenean vulputate eleifend tellus. Nullam vel sem. Nam ipsum risus, 
                                rutrum vitae, vestibulum eu, molestie vel.
                                </p>
                            </div>
                        </li> 
                    </ul> 
                </div>

            </div> 

        </section>


        <section id="portfolio" className="s-portfolio target-section">

            <div className="row s-portfolio__header">
                <div className="column large-6 medium-8 tab-full">
                    <div className="section-intro" data-num="03" data-aos="fade-up">
                        <h3 className="subhead">Portfolio</h3>
                        <h1 className="display-1">
                            A selection of recent projects I have worked on.
                        </h1>
                    </div>
                </div>
            </div> 

            <div className="row s-porfolio__list block-large-1-2 block-tab-full collapse">

                <div className="column" data-aos="fade-up">
                    <div className="folio-item">
                        <div className="folio-item__thumb">
                            <a className="folio-item__thumb-link" href="images/portfolio/gallery/g-windows-in-the-city.jpg" title="Windows in The City" data-size="1050x700">
                                <img src="images/portfolio/windows-in-the-city.jpg" 
                                    srcset="images/portfolio/windows-in-the-city.jpg 1x, images/portfolio/windows-in-the-city@2x.jpg 2x" alt=""/>
                            </a>
                        </div>
                        <div className="folio-item__info">
                            <div className="folio-item__cat">Branding</div>
                            <h4 className="folio-item__title">Windows in The City</h4>
                        </div>
                        <a href="https://www.behance.net/" title="Project Link" className="folio-item__project-link">Project Link</a>
                        <div className="folio-item__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div> 
                <div className="column" data-aos="fade-up">
                    <div className="folio-item">
                        <div className="folio-item__thumb">
                            <a className="folio-item__thumb-link" href="images/portfolio/gallery/g-building-blocks.jpg" title="Building Blocks" data-size="1050x700">
                                <img src="images/portfolio/building-blocks.jpg" 
                                    srcset="images/portfolio/building-blocks.jpg 1x, images/portfolio/building-blocks@2x.jpg 2x" alt=""/>
                            </a>
                        </div>
                        <div className="folio-item__info">
                            <div className="folio-item__cat">Frontend Design</div>
                            <h4 className="folio-item__title">Building Blocks</h4>
                        </div>
                        <a href="https://www.behance.net/" title="Project Link" className="folio-item__project-link">Project Link</a>
                        <div className="folio-item__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div> 
                <div className="column" data-aos="fade-up">
                    <div className="folio-item">
                        <div className="folio-item__thumb">
                            <a className="folio-item__thumb-link" href="images/portfolio/gallery/g-shout-jump.jpg" Title="Shout and Jump" data-size="1050x700">
                                <img src="images/portfolio/shout-and-jump.jpg" 
                                    srcset="images/portfolio/shout-and-jump.jpg 1x, images/portfolio/shout-and-jump@2x.jpg 2x" alt=""/>
                            </a>
                        </div>
                        <div className="folio-item__info">
                            <div className="folio-item__cat">Branding</div>
                            <h4 className="folio-item__title">Shout & Jump</h4>
                        </div>
                        <a href="https://www.behance.net/" title="Project Link" className="folio-item__project-link">Project Link</a>
                        <div className="folio-item__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div> 
                <div className="column" data-aos="fade-up">
                    <div className="folio-item">
                        <div className="folio-item__thumb">
                            <a className="folio-item__thumb-link" href="images/portfolio/gallery/g-sand-dunes.jpg" title="Sand Dunes" data-size="1050x700">
                                <img src="images/portfolio/sand-dunes.jpg" 
                                    srcset="images/portfolio/sand-dunes.jpg 1x, images/portfolio/sand-dunes@2x.jpg 2x" alt=""/>
                            </a>
                        </div>
                        <div className="folio-item__info">
                            <div className="folio-item__cat">Frontend Design</div>
                            <h4 className="folio-item__title">Sand Dunes</h4>
                        </div>
                        <a href="https://www.behance.net/" title="Project Link" className="folio-item__project-link">Project Link</a>
                        <div className="folio-item__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div> 
                <div className="column" data-aos="fade-up">
                    <div className="folio-item">
                        <div className="folio-item__thumb">
                            <a className="folio-item__thumb-link" href="images/portfolio/gallery/g-woodcraft.jpg" title="Sand Dunes" data-size="1050x700">
                                <img src="images/portfolio/woodcraft.jpg" 
                                    srcset="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x" alt=""/>
                            </a>
                        </div>
                        <div className="folio-item__info">
                            <div className="folio-item__cat">Product Design</div>
                            <h4 className="folio-item__title">Wooocraft</h4>
                        </div>
                        <a href="https://www.behance.net/" title="Project Link" className="folio-item__project-link">Project Link</a>
                        <div className="folio-item__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div> 
                <div className="column" data-aos="fade-up">
                    <div className="folio-item">
                        <div className="folio-item__thumb">
                            <a className="folio-item__thumb-link" href="images/portfolio/gallery/g-lamp.jpg" title="The Lamp" data-size="1050x700">
                                <img src="images/portfolio/lamp.jpg" 
                                    srcset="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x" alt=""/>
                            </a>
                        </div>
                        <div className="folio-item__info">
                            <div className="folio-item__cat">Product Design</div>
                            <h4 className="folio-item__title">The Lamp</h4>
                        </div>
                        <a href="https://www.behance.net/" title="Project Link" className="folio-item__project-link">Project Link</a>
                        <div className="folio-item__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div> 

            </div> 

        </section> 


        <section id="testimonials" className="s-testimonials">

            <div className="row collapse">

                <div className="column large-full">

                    <div className="testimonial-slider" data-aos="fade-up">

                        <div className="testimonial-slider__slide">
                            <p>
                            Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                            Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                            Laudantium quia consequatur molestias delectus culpa.
                            </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                <cite className="testimonial-slider__cite">
                                    <strong>Tim Cook</strong>
                                    <span>CEO, Apple</span>
                                </cite>
                            </div>
                        </div>
        
                        <div className="testimonial-slider__slide">
                            <p>
                            Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                            Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                            Quasi voluptas eius distinctio. Atque eos maxime.
                            </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                <cite className="testimonial-slider__cite">
                                    <strong>Sundar Pichai</strong>
                                    <span>CEO, Google</span>
                                </cite>
                            </div>
                        </div> 
        
                        <div className="testimonial-slider__slide">
                            <p>
                            Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                            Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                            Voluptatem dignissimos ut.
                            </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-04.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                <cite className="testimonial-slider__cite">
                                    <strong>Satya Nadella</strong>
                                    <span>CEO, Microsoft</span>
                                </cite>
                            </div>
                        </div> 
        
                        <div className="testimonial-slider__slide">
                            <p>
                            Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                            quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                            Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                            </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                <cite className="testimonial-slider__cite">
                                    <strong>Jeff Bezos</strong>
                                    <span>CEO, Amazon</span>
                                </cite>
                            </div>
                        </div>

                    </div> 
                    
                </div> 

            </div> 


        
            <div className="s-cta">

                <div className="row">
                    <div className="column large-full">
                        <h2 className="section-desc" data-aos="fade-up">
                            Need a great reliable web hosting?
                        </h2>
                    </div>
                </div>
        
                <div className="row cta-content" data-aos="fade-up">
                    <div className="column large-full">
                        <p>
                        We highly recommend <a href="https://www.dreamhost.com/r.cgi?287326">DreamHost</a>.
                        Powerful web and Wordpress hosting. Guaranteed.
                        Starting at $2.95 per month.
                        </p>
        
                        <a href="https://www.dreamhost.com/r.cgi?287326" className="btn btn--primary h-full-width">Get Started</a>
                    </div>
                </div> 
        
            </div> 


        </section> 





        <div aria-hidden="true" className="pswp" role="dialog" tabindex="-1">

            <div className="pswp__bg"></div>
            <div className="pswp__scroll-wrap">

                <div className="pswp__container">
                    <div className="pswp__item"></div>
                    <div className="pswp__item"></div>
                    <div className="pswp__item"></div>
                </div>

                <div className="pswp__ui pswp__ui--hidden">
                    <div className="pswp__top-bar">
                        <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title=
                        "Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button className="pswp__button pswp__button--zoom" title=
                        "Zoom in/out"></button>
                        <div className="pswp__preloader">
                            <div className="pswp__preloader__icn">
                                <div className="pswp__preloader__cut">
                                    <div className="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div className="pswp__share-tooltip"></div>
                    </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title=
                    "Next (arrow right)"></button>
                    <div className="pswp__caption">
                        <div className="pswp__caption__center"></div>
                    </div>
                </div>

            </div>

        </div> 


        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        
    </React.Fragment>
  )
}

export default Extra


