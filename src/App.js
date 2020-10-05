import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Projects from './Navbar/Projects';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <BrowserRouter>
    <div className="item">
      <Link to="/" className="navbar">Projects</Link>
      <Link to="/about" className="navbar">About</Link>
      <Link to="/contact" className="navbar">Contact</Link>
</div>
    <div className="App">
      <Route exact path="/" component={Projects} />
      <Route exact ="/about" component={Contact} /> 
      <Route exact ="/contact" component={About} />

           <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
