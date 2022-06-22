import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Navbar } from './components';
import { About, Future, Past, Categories, Donation } from '../src/pages';
import { Footer } from './containers';


const App = () => (
  <Router >
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/future" element={ <Future /> } />
        <Route path="/past" element={ <Past /> } />
        <Route path="/categories" element={ <Categories /> } />
        <Route path="/donation" element={ <Donation /> } />
      </Routes>
      <Footer />
      </div>
  </Router>
);
 
 

export default App;
