import { useState, useEffect } from 'react';

export default function ReviewComponent() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('/api/reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data.reviews);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });

  }, []);
  
  return (
    <div id="colorlib-testimony">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">Testimonies</h2>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
            <span>Testimonies</span>
            <h2>What my Clients &amp; Employers Say</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="rotate">
              <h2 className="heading">Testimonies</h2>
            </div>
          </div>
        </div>

        <div className="row animate-box">
          <div className="owl-carousel">

            {!loading && reviews.map((review: any, index) => (
              <div key={index} className="item">
                <div className="col-md-12 text-center">
                  <div className="testimony">
                    <blockquote>
                      <p>"{review.quote}"</p>
                      <span>&mdash; {review.name}, {review.position} @ {review.company}</span>
                    </blockquote>
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