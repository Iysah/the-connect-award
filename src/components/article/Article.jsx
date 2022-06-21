import React from 'react';
import './article.css';

const Article = ({  role, name }) => (
  <div className="theConnect__past-container_article">
    <div className="theConnect__past-container_article-image">
      <div className='theConnect__past-container_article-image_frame'>

      </div>
    </div>
    <div className="theConnect__past-container_article-content">
      <div className='theConnect__past-container_article-content_text'>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  </div>
);

export default Article;