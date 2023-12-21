import { useState } from 'react';
import Config from './config.json';
import './Navbar.css'

import Model from 'react-modal';
const Navbar = () => {
  const [visible, setvisible] = useState(false)

  const [selectedFeature, setSelectedFeature] = useState("");

  const handleChangeFeature = (features) => {
    setSelectedFeature(features);
  };

  const getEventData = (features) => {
    return Config[features.toLowerCase()] || [];
  };



  const customStyles = {
    content: {
      width: "90%",
      height: "500px",
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

    },
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbarbg">
        <div className="container-fluid">
          <a className="navbar-brand text-light fw-bold fs-2 logo" href="#">VWO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold ms-3  hoverlink" aria-current="page" href="#"
                  onMouseOver={() => {
                    setvisible(true)
                  }}

                >Capabilities</a>
                <Model isOpen={visible}
                  onRequestClose={() => {
                    setvisible(false)
                  }}
                  style={customStyles}
                >

                  <div className='d-flex '>
                    <div className='sidebar-section'>

                      <div className='city-name-container'>
                        <div className='fs-4 ms-5 mt-4'>
                          <p className='sidebar-tittle ' onMouseOver={() =>
                            handleChangeFeature("Testing Overviews")}>Testing Overviews</p>
                        </div>

                        <div className='fs-4 ms-5 mt-4'>
                          <p className='sidebar-tittle'>Behavior Analytics</p>
                        </div>
                        <hr />
                        <p className='ms-5 fs- fw-bold subtittles'>Personalization</p>
                        <p className='ms-5 fs- fw-bold subtittles'>Web Rollouts</p>
                        <p className='ms-5 fs- fw-bold subtittles'>Customer Data Platform</p>
                        <p className='ms-5 fs- fw-bold subtittles'>Program Management </p>

                      </div>

                    </div>

                    <div className=''>
                      <h5 className='color fs-3 ms-4'>Test Overviews</h5>
                      <p className='ms-4'>Build winning experiences across web,mobile app and 
                         server-side</p>

                      <hr />
                   

                        <div className='d-flex justify-content-around'>
                          <div className=''>
                            <div className='ms-4'>
                              <h4 >   <i class="bi bi-laptop"></i>web design</h4>
                              <p>Test and create web experiences</p>
                            </div>
                            <div className='ms-4'>
                              <h4>Mobile App Testing</h4>
                              <p>Defight mobile app user with<br/> optimized experiences</p>
                            </div>
                            <div className='ms-4'>
                              <h4>Server-side Testing</h4>
                              <p>Test complex feature across</p>
                            </div>
                          </div>

                          <div className=''>

                            <h4 className=''>Feature</h4>

                            <div className='mt-3'>
                            <p>split testing</p>
                            <p>Multivarient Testing</p>
                            <p>Integration</p>
                            <p>Hypothesis</p>
                            <p>Bayesian Stats Engine</p>
                            </div>

                           
                           

                          </div>

                          
                        </div>
                      
           
                  

                    </div>

                  </div>


               
                  
                
                    

                </Model>

              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold ms-4 hoverlink" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold ms-4 hoverlink" href="#">Solution</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold ms-4 hoverlink" href="#" >Why VWO?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold ms-4 hoverlink" href="#" >Resource</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}
export default Navbar