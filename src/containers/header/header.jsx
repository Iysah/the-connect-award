import React from 'react';
import './header.css';
import { RiArrowRightLine, RiSearchLine } from 'react-icons/ri';

const Header = () => (
  <div className="theConnect__header section__padding" id="home">
    <div className="theConnect__header-content">
      <h1>First Ever Tech Personality Award For Africans in Europe</h1>

      <div className="theConnect__header-content__form">
        <div className="theConnect__header-content__input">
            < RiSearchLine size={24}/>
            <input type="email" placeholder="Nominee&apos;s Name, Nominee&apos;s Category" />
        </div>
        
        <button type="button">Search</button>
      </div>
    </div>
    <div className="view">
      <a href='/categories'>View all categories  </a><RiArrowRightLine  color="#0c0114" size={24}/>
    </div>
  </div>
);

export default Header;