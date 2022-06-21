import React from 'react';
import awareness from '../../assets/awareness.png';
import competition from '../../assets/competition.png';
import entertainment from '../../assets/entertainment.png';
import recognition from '../../assets/recognition.png';

import './target.css';

const Target = () => {
  return (
    <div className='theConnect__target'>
      <div className="theConnect__target-bg section__padding">
      <h2> Our Target</h2>
        <div className="theConnect__target-container">
          <div className="theConnect__target-box">
              <div className="theConnect__image">
                <img src={awareness} alt="" />
              </div>
              <p>Awareness</p>
          </div>
          <div className="theConnect__target-box">
          <div className="theConnect__image">
                <img src={competition} alt="" />
              </div>
              <p>Competition</p>
          </div>
          <div className="theConnect__target-box">
          <div className="theConnect__image">
                <img src={ entertainment} alt="" />
              </div>
              <p>Entertainment</p>
          </div>
          <div className="theConnect__target-box">
          <div className="theConnect__image">
                <img src={recognition } alt="" />
              </div>
              <p>Recognition</p>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Target