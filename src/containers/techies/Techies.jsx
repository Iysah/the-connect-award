import React from 'react';
import boxA from '../../assets/boxA.png';
import boxB from '../../assets/boxB.png';
import boxC from '../../assets/boxC.png';
import boxD from '../../assets/boxD.png';
import { Link } from "react-router-dom";

import './techies.css';

const Techies = () => {
  return (
    <div className="theConnect__techies section__padding" id="#">
        <div className="theConnect__techies-content">
            <div className="theConnect__techies-content__header">
                <h3>Celebrated Techies</h3>
                <div></div>
            </div>
    
      
              <p> The connected is.....It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>

              <Link to="/past">Read more</Link>
        </div>
          <div className="theConnect__techies-container">
               <div className="theConnect__techies-box">
                  <img src={boxA } alt="" />
               </div>
               <div className="theConnect__techies-box">
                  <img src={ boxB } alt="" />
               </div>
               <div className="theConnect__techies-box">
                  <img src={ boxC } alt="" />
               </div>
               <div className="theConnect__techies-box">
                  <img src={ boxD } alt="" />
               </div>
          </div>

        

    
  </div>
  )
}

export default Techies