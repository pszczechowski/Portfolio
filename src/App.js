import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Projects from './Projects';
import Articles from './Articles';
import About from './About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Projects} />
      <Route exact ="/articles" component={Articles} /> 
      <Route exact ="/about" component={About} />

           <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
        <div className="navigation-sub">

          <Link to="/" className="item">Projects</Link>
          <Link to="/articles" className="item">Articles</Link>
          <Link to="/about" className="item">About</Link>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
