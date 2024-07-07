// import { useState, useEffect } from 'react';

export default function InvestmentsComponent() {
  // const [loading, setLoading] = useState(true);
  // const [investments, setInvestments] = useState([]);

  // useEffect(() => {
  //   setLoading(true);

  //   fetch('/api/investments')
  //     .then(response => response.json())
  //     .then(data => {
  //       setInvestments(data.investments);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setLoading(false);
  //     });
      
  // }, []);
  
  return (
    <div id="colorlib-work">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">Investments</h2>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center intro-heading">
            <span>Investments</span>
            <h2>Companies I Hold Equity With</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="rotate">
              <h2 className="heading">Investments</h2>
            </div>
          </div>
        </div>

        <div className="row">
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