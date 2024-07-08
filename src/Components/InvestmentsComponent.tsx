import { useState, useEffect } from 'react';
import CarouselComponent from './CarouselComponent';
import { CCarouselItem } from '@coreui/react';

export default function InvestmentsComponent() {
  const [loading, setLoading] = useState(true);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    console.log('InvestmentsComponent: useEffect');

    setLoading(true);

    fetch('/api/investments')
      .then(response => response.json())
      .then(data => {
        setInvestments(data.investments);
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
          <CarouselComponent>

            {!loading && investments.map((investment: any, index) => (
              <CCarouselItem key={index} className="item">
                <div className="col-md-12">
                  <div className="article">
                    <img 
                      className="img-responsive carousel-image" 
                      src={`images/investments/${investment.slug}.png`} 
                      alt={`${investment.name} logo`} />

                    <div className="desc">
                      <h2>{investment.name}</h2>
                      <p>{investment.description}</p>
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