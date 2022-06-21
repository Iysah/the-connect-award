import React from 'react';
import './about.css';
import awards from '../../assets/awards.png';
import aboutImg from '../../assets/aboutImg.png'


const About = () => {
  return (
      <div className="theConnect__about section__padding" id="home">
          <h3>The Connected Awards</h3>
          <p>Learn about us</p>
          <div className="theConnect__about-header__img">
            <img src={ aboutImg } alt="Winners" />
          </div>
          <div className="theConnect__about-container">
            <div className="theConnect__about-content">
                <div className="theConnect__about-content__header">
                    <h2>Connecting Techies Globally</h2>
                </div>
        
          
                  <p> The connected is.....It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout. The point of 
                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </p>

            </div>
            <div className="theConnect__about-image">
                <img src={awards} alt='about winning team' />
            </div>
          </div>
          


      
    </div>
  )
}

export default About