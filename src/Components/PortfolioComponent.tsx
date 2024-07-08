import { useState, useEffect } from 'react';

import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

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
          {/* <div className="owl-carousel1"> */}

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >

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

          </Carousel>

          {/* </div> */}
        </div>
      </div>
    </div>
  )
}