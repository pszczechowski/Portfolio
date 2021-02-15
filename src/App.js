import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Navbar/LandingPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import SideBar from "./Components/SlideBar";

library.add(fab, faCheckSquare, faCoffee, faBars);

function App() {
  return (

    <BrowserRouter>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"item"} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>

  );
}
export default App;
