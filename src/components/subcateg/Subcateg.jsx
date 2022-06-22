import React from 'react';
import './subcateg.css'
import { RiArrowRightLine } from 'react-icons/ri';
import { TbLayoutGrid } from 'react-icons/tb';

const Subcateg = ({ role }) => {
  return (

        <div className="theConnect__subcateg-container_article">
          <div className="theConnect__subcateg-container_top">
            <TbLayoutGrid  color="#3E0563" size={24}/>
          </div>
          <div className="theConnect__subcateg-container_bottom">
              <h3>{role}</h3>
              <p><RiArrowRightLine  color="#0c0114" size={24}/></p>
          </div>
        </div>
          

  )
}

export default Subcateg