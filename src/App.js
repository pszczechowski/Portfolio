import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Navbar/Home';
import Projects from './Navbar/Projects';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faBars)

function App() {
  return (
    <BrowserRouter>
      <div id="item">
        <Link to="/" className="navbar">Home</Link>
        <Link to="/projects" className="navbar">Projects</Link>
        <Link to="/about" className="navbar">About</Link>
        <Link to="/contact" className="navbar">Contact</Link>
      </div>
      { <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>}
    </BrowserRouter>
  );
}
export default App;
