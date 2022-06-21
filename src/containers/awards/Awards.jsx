import React from 'react'
import awards from '../../assets/awards.png';
import { Link } from "react-router-dom";
import './awards.css'

const Awards = () => {
  return (
    <div className="theConnect__award section__padding" id="home">
          <div className="theConnect__award-image">
                <img src={awards} alt='Award winning team' />
          </div>

        <div className="theConnect__award-content">
            <div className="theConnect__award-content__header">
                <h3>The Connected Awards</h3>
                <div></div>
            </div>
    
      
              <p> The connected is.....It is a long established fact that a reader will be distracted by the readable content 
                of a page when looking at its layout. The point of 
                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>

              <Link to="/about">Learn more</Link>
        </div>

    
  </div>
  )
}

export default Awards