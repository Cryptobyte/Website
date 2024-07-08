import { useState, useEffect } from 'react';
import CarouselComponent from './CarouselComponent';
import CardComponent from './CardComponent';
import { CCarouselItem } from '@coreui/react';

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
          <CarouselComponent>

            {!loading && resume.map((project: any, index) => (
              <CCarouselItem>
                <CardComponent
                  key={index}
                  slug={project.slug}
                  name={project.name}
                  year={project.year}
                  tags={project.tags}
                  links={project.links}
                  description={project.description}
                  image={`images/resume/${project.slug}.png`} />

              </CCarouselItem>
            ))}
            
          </CarouselComponent>
        </div>
      </div>
    </div>
  )
}