import React from 'react';
import logoB from '../../assets/logoB.png';
import './footer.css';

const Footer = () => (
  <div className="theConnect__footer section__padding">

    <div className="theConnect__footer-links">
      
      <div className="theConnect__footer-links_div">
        <h4>About</h4>
        <p>The Connected Magazine</p>
        <p>Past Editions</p>
        <p>Celebrated Techies</p>
      </div>

      <div className="theConnect__footer-links_div">
        <h4>Legal</h4>
        <p>Terms of Service </p>
        <p>Privacy Policy</p>
      </div>

      <div className="theConnect__footer-links_div">
        <h4>Social</h4>
        <p>Linkedin</p>
      </div>

      <div className="theConnect__footer-links_div">
        <h4>Contact</h4>
        <p>+2347057219951</p>
        <p>Chat on Whatsapp</p>
        <p>connectedawards@gmail.com</p>
      </div>
    </div>

    <div className="theConnect__footer-copyright">
        <div className="theConnect__footer-links_logo">
            <img src={ logoB } alt="gpt3_logo" />
            
          </div>
          <div className="theConnect__footer-copyright_text">
            <p>Celebrating Techies Globally</p>
            <p>@2022 The Connected Magazine - All rights reserved.</p>
          </div>
    </div>
  </div>
);

export default Footer;