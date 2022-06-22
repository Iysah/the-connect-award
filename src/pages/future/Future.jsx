import React from 'react';
import Edition from '../../components/edition/Edition';
import Africa from '../../assets/africa.png'
import './future.css';

const Future = () => {
  return (
    <div className="theConnect__future section__padding" id="blog">
          <h3>Future Edition</h3>
          <p>Nominate candidates for future editions</p>


            <div className="theConnect__future-container_groupB">
              <Edition imgUrl={ Africa }  name="South Africa Edition" />
              <Edition imgUrl={ Africa } name="South Africa Edition" />
              <Edition imgUrl={ Africa } name="South Africa Edition" />
              <Edition imgUrl={ Africa } name="South Africa Edition"/>
            </div>

   </div>
  )
}

export default Future