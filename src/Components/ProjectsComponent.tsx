import { useState, useEffect } from 'react';

export default function ProjectsComponent() {
  const [projects, setProjects] = useState([]);
  
  return (
    <div id="colorlib-work">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">Projects</h2>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
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

        <div className="row animate-box">
          <div className="owl-carousel1">

            {/* <!-- Begin Loop --> */}
            <div className="item">
              <div className="col-md-12">
                <div className="article">
                  <img className="img-responsive" src="images/img-1.jpg" alt="html5 bootstrap by colorlib.com" />

                  <div className="desc">
                    <span className="meta">15, Feb 2018</span>
                    <h2>A Japanese Constellation</h2>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="col-md-12">
                <div className="article">
                  <img className="img-responsive" src="images/img-1.jpg" alt="html5 bootstrap by colorlib.com" />

                  <div className="desc">
                    <span className="meta">15, Feb 2018</span>
                    <h2>A Japanese Constellation</h2>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Loop --> */}

          </div>
        </div>
      </div>
    </div>
  )
}