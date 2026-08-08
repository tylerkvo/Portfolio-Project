import React, { useState, useEffect }from 'react';
import './project.css'
import { Link } from 'react-router-dom';

function EscapeTheLawn() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500); // Threshold for mobile devices

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500); // Update based on width
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <header id="masthead" className="project-header" style={{ backgroundColor: 'white' }}>
        <div className="s-header__block">
          <div className="s-header__branding">
            <p className="site-title">
            <Link to="/" className="site-title">tyler vo.</Link>
            </p>
          </div>
        </div>
      </header>
    <section id="project" class="s-project">
    <div class="row">

        <div class="column lg-12 intro">

            <h1>Escape the Lawn Video Game</h1>

            
        </div>

    </div>
    <div class="row u-add-half-bottom">

                <div class="column lg-6 tab-12" /*style={{ position: 'fixed' }}*/>
                     {/* <iframe
                      src="/unitybuild/unityGame.html"
                      style={{ width: '100%', height: `${window.innerWidth / 4}px`, border: 'none' }}
                      title="Responsive Video"
                    ></iframe> */}
                      {isMobile ? (
                        <div>
                          <div className="mobile-message">
                          Please visit this page on a desktop or laptop computer to play the game.
                        </div>
                        </div>

                        ) : (
                            <iframe
                            src="/unitybuild/unityGame.html"
                            style={{ width: '100%', height: `${window.innerWidth / 4}px`, border: 'none' }}
                            title="Responsive Video"
                          ></iframe>
                        )}

                </div>

                <div class="column lg-6 tab-12" /*style={{marginLeft: '50%', overflowY: 'auto'}}*/>

                <p>
                Exploring game development, a team of 3 friends and I leveraged Unity and C# to create an engaging and interactive video game. Escape the Lawn is a tranquil puzzle adventure through the grand Pavilions of UVA’s historic Lawn, where players must conquer mini UVA-themed quests to execute the grand escape (graduation)! Git was used extensively for version control and team collaboration, allowing for iterative testing and development to improve user experience. Users are immersed through unique NPC interactions, level design, and state management.
            </p>
        
            <h5 class="u-add-bottom">Tools used</h5>
                    <ul class="skill-bars">
                        <li>
                        <div class="progress percent80"><span>80%</span></div>
                        <strong>Unity</strong>
                        </li>
                        <li>
                        <div class="progress percent20"><span>20%</span></div>
                        <strong>C Sharp</strong>
                        </li>
                        <li>
                        <div class="progress percent20"><span>20%</span></div>
                        <strong>Unity Animator</strong>
                        </li>
                        <li>
                        <div class="progress percent40"><span>40%</span></div>
                        <strong>Unity Tilemap</strong>
                        </li>
                        <li>
                        <div class="progress percent20"><span>20%</span></div>
                        <strong>Unity Physics</strong>
                        </li>
                        <li>
                        <div class="progress percent10"><span>10%</span></div>
                        <strong>TextMeshPro</strong>
                        </li>
                        
                        
                    </ul>
            <p>
            Project Blog in progress...
            </p>

                </div>
                
            </div>
            </section>
        </div>
       
  );
}

export default EscapeTheLawn;