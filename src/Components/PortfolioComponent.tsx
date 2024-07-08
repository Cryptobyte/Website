import { useState, useEffect } from 'react';

export default function PortfolioComponent() {
  const [loading, setLoading] = useState(true);
  const [resume, setResume] = useState([]);

  useEffect(() => {
    console.log('PortfolioComponent: useEffect');
    
    setLoading(true);

    fetch('/api/resume')
      .then(response => response.json())
      .then(data => {
        setResume(data.resume);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
      
  }, []);
  
  return (
    <div id="colorlib-work">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">Resume</h2>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center intro-heading">
            <span>Resume</span>
            <h2>Companies I've Worked With</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="rotate">
              <h2 className="heading">Resume</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="owl-carousel1">

            {!loading && resume.map((project: any, index) => (
              <div key={index} className="item">
                <div className="col-md-12">
                  <div className="article">
                    <img 
                      className="img-responsive" 
                      src={`images/resume/${project.slug}.png`} 
                      alt={`${project.name} logo`} />

                    <div className="desc">
                      <span className="meta">15, Feb 2018</span>
                      <h2>{project.name}</h2>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}