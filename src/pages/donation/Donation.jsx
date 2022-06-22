import React from 'react';
import './donation.css';
import DonateA from '../../assets/donateA.png';
import DonateB from '../../assets/donateB.png';

const Donation = () => {
  return (
    <div className="theConnect__donate section__padding" id="home">
          <h3>Make a Donation</h3>
          <p>Make a contribution to the growth of technology in Africa</p>
          <div className="theConnect__donate-container">
                <div className="theConnect__donate-content">
                        <div className="theConnect__donate-img">
                            <img src={ DonateB } alt="Donate" />
                        </div>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                </div>
            
                <div className="theConnect__donate-content">
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>          
                    <div className="theConnect__about-img">
                        <img src={ DonateA } alt='about winning team' />
                    </div>
                        
                </div>      
          </div>
          


      
    </div>
  )
}

export default Donation