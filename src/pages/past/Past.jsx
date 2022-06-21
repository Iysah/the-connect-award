import React from 'react';
import Article from '../../components/article/Article';
import './past.css';


const Past = () => {
  return (
    <div className="theConnect__past section__padding" id="blog">
          <h3>Celebrated Techies</h3>
          <p>A look into some of our past winners</p>

        <div className="theConnect__past-container">
            <div className="theConnect__past-container_groupB">
              <Article  name="Sarah Olalore" role="Exceptional Visual Designer" />
              <Article name="Sarah Olalore" role="Exceptional Visual Designer" />
              <Article name="Sarah Olalore" role="Exceptional Visual Designer" />
              <Article name="Sarah Olalore" role="Exceptional Visual Designer" />
              <Article  name="Sarah Olalore" role="Exceptional Visual Designer" />
              <Article name="Sarah Olalore" role="Exceptional Visual Designer" />
              <Article name="Sarah Olalore" role="Exceptional Visual Designer" />
              <Article name="Sarah Olalore" role="Exceptional Visual Designer" />
            </div>
        </div>
   </div>
  )
}

export default Past