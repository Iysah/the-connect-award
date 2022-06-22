import React from 'react';
import './edition.css';

const Edition = ({ imgUrl, name }) => (

        <div className="theConnect__future-container_edition">
            <div className="theConnect__future-container_edition-image">
                <img src={ imgUrl } alt="" />
            </div>
            
            <h4>{name}</h4>
            <button type='button'>Norminate</button>

    </div>
  
);

export default Edition;