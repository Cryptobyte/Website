import { useRef, useState } from 'react';
import { 
  SiElegoo, 
  SiGmail, 
  SiGooglemaps 

} from '@icons-pack/react-simple-icons';

import { 
  CToast, 
  CToastBody, 
  CToaster

} from '@coreui/react';

export default function ContactComponent() {
  const toaster = useRef();

  const [toast, addToast] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const data = JSON.stringify(formData);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });

    const json = await response.json();

    if (!json.success) {
      addToast(notification('danger', 'Failed to send message!'));

    } else {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }

    setLoading(false);
    addToast(notification('success', 'Message recieved, we\'ll be in touch soon!'));
  };

  const notification = (color, message) => (
    <CToast color={color} className="text-white align-items-center">
      <div className="d-flex">
        <CToastBody>{message}</CToastBody>
      </div>
    </CToast>
  );

  return (
    <div id="colorlib-contact">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">Contact</h2>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center intro-heading">
            <span>Contact</span>
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="rotate">
              <h2 className="heading">Contact</h2>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <div className="row">
              <div className="col-md-4">
                <h3>My Address</h3>
                
                <ul className="contact-info">
                  <li><span><SiGooglemaps size={25} /></span>Concord, New Hampshire 03301</li>
                  <li><span><SiGmail size={25} /></span><a href="mailto:me@cryptobyte.dev">me@cryptobyte.dev</a></li>
                  <li><span><SiElegoo size={25} /></span><a href="/">cryptobyte.dev</a></li>
                </ul>
              </div>

              <div className="col-md-7 col-md-push-1">
                <div className="row">
                  {(loading) ? (
                    <div className="col-md-12">
                      <div className="alert alert-info" role="alert">
                        Sending message...
                      </div>
                    </div>

                  ) : (
                    <form id="formContact" onSubmit={handleSubmit}>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea 
                            id="message" 
                            name="message" 
                            className="form-control" 
                            cols={30} 
                            rows={7} 
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleInputChange}>

                          </textarea>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            className="form-control" 
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange} />

                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            id="email" 
                            name="email" 
                            type="text" 
                            className="form-control" 
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange} />

                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <input 
                            type="submit" 
                            value="Send Message" 
                            className="btn btn-primary" />

                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CToaster className="p-3" placement="top-end" push={toast} ref={toaster} />
    </div>
  )
}