import { useState, useEffect } from 'react';
import CarouselComponent from './CarouselComponent';
import { CCarouselItem } from '@coreui/react';

export default function ProjectsComponent() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log('ProjectsComponent: useEffect');

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
            <h2>Projects I've Worked On</h2>
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
          <CarouselComponent>

            {!loading && projects.map((project: any, index) => (
              <CCarouselItem key={index}>
                <div className="col-md-12">
                  <div className="article">
                  <img 
                    className="img-responsive carousel-image" 
                    src={`images/projects/${project.slug}.png`} 
                    alt={`${project.name} logo`} />

                    <div className="desc">
                      <h2>{project.name}</h2>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </CCarouselItem>
            ))}

          </CarouselComponent>
        </div>
      </div>
    </div>
  )
}