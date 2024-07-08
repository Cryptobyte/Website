import { useCallback, useEffect, useState } from 'react';

import { 
  SiGithub, 
  SiGitlab, 
  SiLinkedin, 
  SiMastodon

} from '@icons-pack/react-simple-icons';

import ReviewComponent from './Components/ReviewComponent';
import PortfolioComponent from './Components/PortfolioComponent';
import ProjectsComponent from './Components/ProjectsComponent';
import InvestmentsComponent from './Components/InvestmentsComponent';
import ContactComponent from './Components/ContactComponent';

import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import './css/style.css';
import { CTooltip } from '@coreui/react';

function Effect({ effect }: any) {
  useEffect(() => effect?.(), [effect]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  const loadScript = async(_script: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.src = _script.url;
      script.addEventListener("load", () => {
        resolve(script);
      });

      script.addEventListener("error", () => {
        reject(script);
      });

      document.body.appendChild(script);
    });
  };

  const stableEffect = useCallback(() => {
    setLoading(true);

    let scripts: any[] = [];

    const fn = async() => {
      const src: any[] = [
        { url: "js/jquery.min.js" },
        { url: "js/extra.js" }
      ];

      for (let _script of src) {
        const script = await loadScript(_script);
        
        scripts.push(script);
      }

      setLoading(false);
    }

    fn();
    
    return () => {
      for (let script of scripts) {
        document.body.removeChild(script);
      }
    }

  }, []);

  return (
    <>
      <Effect effect={stableEffect} />

      {(loading) ? (<></>) : (
        <div id="colorlib-page">
          <header>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="colorlib-navbar-brand">
                    <a href="/">
                      <img 
                        className="navbar-brand-icon" 
                        src="images/cryptobyte_bulb.png"
                        alt='Cryptobyte' />

                    </a>
                  </div>

                  <a href="#colorlib-contact" className="btn btn-primary btn-outline header-contact">Contact</a>
                </div>
              </div>
            </div>
          </header>

          <div id="colorlib-about">
            <div className="container">
              <div className="row text-center">
                <h2 className="bold">About</h2>
              </div>

              <div className="row">
                <div className="col-md-5 about-avatar-wrap">
                  <div className="item">
                    <img
                      className="img-responsive about-img about-avatar" 
                      src="images/avatars/crypto.png" 
                      alt="Cryptobyte Avatar" />

                  </div>
                </div>

                <div className="col-md-6 col-md-push-1">
                  <div className="about-desc">
                    <div className="item">
                      <h2><span>Cryptobyte</span></h2>
                    </div>

                    <div className="desc">
                      <div className="rotate">
                        <h2 className="heading">About</h2>
                      </div>

                      <p>
                        Hello! I'm Cryptobyte, a life long learner dedicated to producing high quality code that's scalable and secure by design. I've been writing code since robotics class in High School and have written software in many languages from NASM Assembly to TypeScript.
                      </p>
                      
                      <p className="colorlib-social-icons">
                        <CTooltip content="LinkedIn">
                          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cryptobyte/">
                              <SiLinkedin />
                          </a>
                        </CTooltip>

                        <CTooltip content="Mastodon">
                          <a target="_blank" rel="noreferrer" href="https://fosstodon.org/@cryptobyte">
                            <SiMastodon />
                          </a>
                        </CTooltip>

                        <CTooltip content="Github">
                          <a target="_blank" rel="noreferrer" href="https://github.com/Cryptobyte">
                            <SiGithub />
                          </a>
                        </CTooltip>

                        <CTooltip content="Gitlab">
                          <a target="_blank" rel="noreferrer" href="https://gitlab.com/Cryptobyte">
                            <SiGitlab />
                          </a>
                        </CTooltip>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="colorlib-services">
            <div className="container">
              <div className="row text-center">
                <h2 className="bold">Services</h2>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="services-flex">
                    <div className="one-third">
                      <div className="row">
                        <div className="col-md-12 col-md-offset-0 intro-heading">
                          <span>My Services</span>
                          <h2>Here Are Some of My Skills</h2>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="rotate">
                            <h2 className="heading">Services</h2>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="services">
                            <h3>1 - Backend Development</h3>
                            <ul>
                              <li>NodeJS, Javascript &amp; TypeScript</li>
                              <li>Express, NestJS</li>
                              <li>MongoDB, Postgres &amp; MySQL</li>
                              <li>WebSockets & SSE</li>
                            </ul>
                          </div>

                          <div className="services">
                            <h3>3 - Frontend Development</h3>
                            <ul>
                              <li>React &amp; React Native</li>
                              <li>Swift &amp; SwiftUI</li>
                              <li>Java for Android</li>
                              <li>Many more!</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="services">
                            <h3>2 - Cloud Infrastructure</h3>
                            <ul>
                              <li>Amazon Web Services (AWS)</li>
                              <li>Google Cloud Platform (GCP)</li>
                              <li>Heroku</li>
                              <li>Azure</li>
                            </ul>
                          </div>

                          <div className="services">
                            <h3>4 - DevOps</h3>
                            <ul>
                              <li>Github</li>
                              <li>GitLab</li>
                              <li>Jira</li>
                              <li>DataDog</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div 
                      className="one-forth services-img" 
                      style={{ backgroundImage: 'url(images/services.png)' }}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PortfolioComponent />
          
          <ProjectsComponent />

          <InvestmentsComponent />

          <ReviewComponent />

          <ContactComponent />

          <footer>
            <div id="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p>
                      &copy; Cryptobyte {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
