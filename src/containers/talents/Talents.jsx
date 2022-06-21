import React from 'react'
import ribbon from '../../assets/ribbon.png';
import starA from '../../assets/starA.png';
import stars from '../../assets/stars.png';

import './talents.css';

const Talents = () => {
  return (
    <div className='theConnect__talents section__padding'>

      <div className="theConnect__talents-container">
            <div className="theConnect__talents-box box-1">
            <div className="theConnect__image">
              <img src={ribbon} alt="" />
            </div>
            <h3>Promising Talent </h3>
            <p>Promising Talent is an individual with less than 5 years experience in Nisgeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.</p>
        </div>
        <div className="theConnect__talents-box box-2">
            <div className="theConnect__image">
              <img src={starA} alt="" />
            </div>
            <h3>Intermediate Talents</h3>
            <p>Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.</p>
        </div>
        <div className="theConnect__talents-box box-3">
            <div className="theConnect__image">
              <img src={ stars } alt="" />
            </div>
            <h3>Exceptional Talents</h3>
            <p>Exceptional Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.</p>
        </div>
      </div>
      
  </div>
  )
}

export default Talents