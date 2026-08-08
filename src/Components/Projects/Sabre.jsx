// import React from 'react';
// import './project.css'

// function Sabre() {
//   return (
//     <div className='project-container'> 
//       <header id="masthead" className="project-header" style={{ backgroundColor: 'white' }}>
//         <div className="s-header__block">
//           <div className="s-header__branding">
//             <p className="site-title">
//               <a href="../" rel="home">tyler vo.</a>
//             </p>
//           </div>
//         </div>
//       </header>
//       <div className='row'>
//         <div className="video-column column lg-6 stack-on-900 " style={{ justifyContent: 'center' }}>
//             <iframe
//             src="https://marvelapp.com/prototype/9g6jh8i?emb=1&iosapp=false&frameless=false"
//             style={{ width: '100%', height: '85%', border: 'none' }}
//             title="Responsive Video"
//             ></iframe>
//         </div>
//         <div className="project-text-column column lg-6 stack-on-900">
//             <h3>Sabre Mobile App</h3>
//             <p>
//             Beginning as a Marvel prototyping project in my Product and Project Management course, I am in the process of implementing Sabre using a React-Native front-end and Django back-end with a close friend. It is a college-focused club and event social media mobile application that allows students to manage their profiles, discover clubs and events, and see what clubs and events their friends are attending!
//             </p>
        
//             <h5 class="u-add-bottom">Tools used</h5>
                    // <ul class="skill-bars">
                    //     <li>
                    //     <div class="progress percent90"><span>80%</span></div>
                    //     <strong>Marvel</strong>
                    //     </li>
                    //     <li>
                    //     <div class="progress percent40"><span>40%</span></div>
                    //     <strong>HTML</strong>
                    //     </li>
                    //     <li>
                    //     <div class="progress percent10"><span>10%</span></div>
                    //     <strong>CSS</strong>
                    //     </li>
                    //     <li>
                    //     <div class="progress percent20"><span>20%</span></div>
                    //     <strong>Javascript</strong>
                    //     </li>
                    //     <li>
                    //     <div class="progress percent40"><span>40%</span></div>
                    //     <strong>React-Native</strong>
                    //     </li>
                    //     <li>
                    //     <div class="progress percent10"><span>10%</span></div>
                    //     <strong>Firebase</strong>
                    //     </li>
                        
                    // </ul>
//             <p>
//             Project Blog in progress...
//             </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sabre;
import React from 'react';
import './project.css'
import Header from '../Header'

function Sabre() {
  return (
    <div>
      <header id="masthead" className="project-header" style={{ backgroundColor: 'white' }}>
        <div className="s-header__block">
          <div className="s-header__branding">
            <p className="site-title">
              <a href="../" rel="home">tyler vo.</a>
            </p>
          </div>
        </div>
      </header>
    <section id="project" class="s-project">
    <div class="row">
        <div class="column lg-12 intro">
            <h1>Sabre Mobile App Prototyping</h1>
        </div>
    </div>
    <div class="row u-add-half-bottom">

                <div class="column lg-6 tab-12" /*style={{ position: 'fixed' }}*/>
                    <iframe
                        src="https://marvelapp.com/prototype/9g6jh8i?emb=1&iosapp=false&frameless=false"
                        style={{ width: '100%', height: '60%', border: 'none' }}
                        title="Responsive Video"
                        ></iframe>
                </div> 

                <div class="column lg-6 tab-12" /*style={{marginLeft: '50%', overflowY: 'auto'}}*/>

                <p>
                  Beginning as a Marvel prototyping project in my Product and Project Management course, I am in the process of implementing Sabre using a React-Native front-end and Django back-end with a close friend. It is a college-focused club and event social media mobile application that allows students to manage their profiles, discover clubs and events, and see what clubs and events their friends are attending!
                </p>
        
                  <h5 class="u-add-bottom">Tools used</h5>
                  <ul class="skill-bars">
                        <li>
                        <div class="progress percent90"><span>80%</span></div>
                        <strong>Marvel</strong>
                        </li>
                        <li>
                        <div class="progress percent40"><span>40%</span></div>
                        <strong>HTML</strong>
                        </li>
                        <li>
                        <div class="progress percent10"><span>10%</span></div>
                        <strong>CSS</strong>
                        </li>
                        <li>
                        <div class="progress percent20"><span>20%</span></div>
                        <strong>Javascript</strong>
                        </li>
                        <li>
                        <div class="progress percent40"><span>40%</span></div>
                        <strong>React-Native</strong>
                        </li>
                        <li>
                        <div class="progress percent10"><span>10%</span></div>
                        <strong>Firebase</strong>
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

export default Sabre;