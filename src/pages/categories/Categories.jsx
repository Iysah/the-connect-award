import React from 'react';
import Subcateg from '../../components/subcateg/Subcateg';
import './categories.css';
import { RiSearchLine } from 'react-icons/ri';

const Categories = () => {
  return (
        <div className="theConnect__category section__padding" id="blog">
            <h3>Voting Categories</h3>
            <div className="theConnect__category-content__form">
                <div className="theConnect__category-content__input">
                    < RiSearchLine size={24}/>
                    <input type="email" placeholder="Nominee&apos;s Name, Nominee&apos;s Category" />
                </div>
                
                <button type="button">Search</button>
            </div>

            <div className="theConnect__category-container">
                <div className="theConnect__category-container_groupB">
                    <Subcateg role="Exceptional Data Analyst" />
                    <Subcateg role="Promising Data Analyst" />
                    <Subcateg role="Exceptional Data Scientist" />
                    <Subcateg role="Promising Data Scientist" />

                    <Subcateg  role="Exceptional Visual Designer" />
                    <Subcateg role="Promising Visual Designer" />
                    <Subcateg role="Exceptional DevOps Expert" />
                    <Subcateg role="Exceptional Data Analyst" />

                    <Subcateg  role="Exceptional Data Analyst" />
                    <Subcateg role="Promising Data Analyst" />
                    <Subcateg role="Exceptional Data Scientist" />
                    <Subcateg role=" Promising Data Scientist" />

                    <Subcateg  role="Exceptional Visual Designer" />
                    <Subcateg role="Promising Visual Designer" />
                    <Subcateg role="Exceptional DevOps Expert" />
                    <Subcateg role="Exceptional Data Analyst" />
                </div>
            </div>
        </div>
  )
}

export default Categories