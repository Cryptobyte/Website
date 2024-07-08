import { useState, useEffect } from 'react';
import CarouselComponent from './CarouselComponent';
import { CCarouselItem } from '@coreui/react';
import CardComponent from './CardComponent';

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
                <CardComponent
                  key={index}
                  slug={project.slug}
                  name={project.name}
                  year={project.year}
                  tags={project.tags}
                  links={project.links}
                  description={project.description}
                  image={`images/projects/${project.slug}.png`} />

              </CCarouselItem>
            ))}

          </CarouselComponent>
        </div>
      </div>
    </div>
  )
}