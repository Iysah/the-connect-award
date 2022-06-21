import React from 'react';
import './App.css';
import { Header, Talents, Techies, Target, Awards } from './containers';



const Home = () => {
  return (
    <div>
        <div className="hero">
          <Header /> 
        </div>
        <Target />
        <Awards />
        <Techies />
        <Talents />
    </div>
  )
}

export default Home