import { useState, useEffect } from 'react';

export default function ProjectsComponent() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('/api/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects);
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
          <h2 className="bold">Projects</h2>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center intro-heading">
            <span>Projects</span>
            <h2>Projects I've Built</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="rotate">
              <h2 className="heading">Portfolio</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="owl-carousel1">

            {!loading && projects.map((project: any, index) => (
              <div key={index} className="item">
                <div className="col-md-12">
                  <div className="article">
                    <img className="img-responsive" src="images/img-1.jpg" alt="html5 bootstrap by colorlib.com" />

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