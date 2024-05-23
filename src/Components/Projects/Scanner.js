// import React from 'react';
// import './project.css'

// function Scanner() {
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
//         <div className="video-column" style={{  
//             display: 'flex', 
//             justifyContent: 'center',   }}>
//             <img
//                 src='/images/portfolio/Scanner.gif'  // Note the leading '/'
//                 style={{  height: '90%',  // This will scale the image to fill the container height
//                 width: 'auto',}}
//                 alt="Scanner animation"  // It's good practice to provide meaningful alt text
//             />
//         </div>
//         <div className="project-text-column">
//             <h3>Scanner Mobile App</h3>
//             <p>
//             Inspired by recent launch of the Apple Vision Pro, I embarked on developing a mobile application equipped with a scanner feature through Google's Vision API. Leveraging Flutter for cross-platform compatibility and Firebase for seamless backend integration, the app empowers users to effortlessly digitize and organize their scans. With a clean and intuitive user interface, users can quickly capture, store, and share documents on the go. The app utilizes authentication and cloud storage capabilities to manage user access and data security. Having been a student, I see potential use cases through hand-written note and work sharing.
//             </p>
        
//             <h5 class="u-add-bottom">Tools used</h5>
//                     <ul class="skill-bars">
//                         <li>
//                         <div class="progress percent80"><span>80%</span></div>
//                         <strong>Flutter</strong>
//                         </li>
//                         <li>
//                         <div class="progress percent50"><span>50%</span></div>
//                         <strong>Dart</strong>
//                         </li>
//                         <li>
//                         <div class="progress percent50"><span>50%</span></div>
//                         <strong>Firebase</strong>
//                         </li>
//                         <li>
//                         <div class="progress percent40"><span>40%</span></div>
//                         <strong>Firestore Database</strong>
//                         </li>
//                         <li>
//                         <div class="progress percent30"><span>30%</span></div>
//                         <strong>Firebase Authentication</strong>
//                         </li>
//                         <li>
//                         <div class="progress percent10"><span>10%</span></div>
//                         <strong>Google Vision API</strong>
//                         </li>
//                         <li>
//                         <div class="progress percent10"><span>10%</span></div>
//                         <strong>Wireframing</strong>
//                         </li>
                        
//                     </ul>
//             <p>
//             Project Blog in progress...
//             </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Scanner;

import React from 'react';
import './project.css'
import Header from '../Header'

function Scanner() {
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
            <h1>Scanner Mobile App</h1>
        </div>
    </div>
    <div class="row u-add-half-bottom">

                <div class="column lg-6 tab-12" /*style={{ position: 'fixed' }}*/>
                  <img
                  src='/images/portfolio/Scanner.gif'  // Note the leading '/'
                  style={{  height: 'auto',  // This will scale the image to fill the container height
                  width: '90%',}}
                  alt="Scanner animation"  // It's good practice to provide meaningful alt text
                  />
                </div>

                <div class="column lg-6 tab-12" /*style={{marginLeft: '50%', overflowY: 'auto'}}*/>

                  <p>
                    Inspired by recent launch of the Apple Vision Pro, I embarked on developing a mobile application equipped with a scanner feature through Google's Vision API. Leveraging Flutter for cross-platform compatibility and Firebase for seamless backend integration, the app empowers users to effortlessly digitize and organize their scans. With a clean and intuitive user interface, users can quickly capture, store, and share documents on the go. The app utilizes authentication and cloud storage capabilities to manage user access and data security. Having been a student, I see potential use cases through hand-written note and work sharing.
                  </p>
        
                  <h5 class="u-add-bottom">Tools used</h5>
                  <ul class="skill-bars">
                      <li>
                      <div class="progress percent80"><span>80%</span></div>
                      <strong>Flutter</strong>
                      </li>
                      <li>
                      <div class="progress percent50"><span>50%</span></div>
                      <strong>Dart</strong>
                      </li>
                      <li>
                      <div class="progress percent50"><span>50%</span></div>
                      <strong>Firebase</strong>
                      </li>
                      <li>
                      <div class="progress percent40"><span>40%</span></div>
                      <strong>Firestore Database</strong>
                      </li>
                      <li>
                      <div class="progress percent30"><span>30%</span></div>
                      <strong>Firebase Authentication</strong>
                      </li>
                      <li>
                      <div class="progress percent10"><span>10%</span></div>
                      <strong>Google Vision API</strong>
                      </li>
                      <li>
                      <div class="progress percent10"><span>10%</span></div>
                      <strong>Wireframing</strong>
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

export default Scanner;