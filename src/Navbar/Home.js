import React from "react"
import './Home.css';
import Button from '@material-ui/core/Button';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

var ReactRotatingText = require('react-rotating-text');

function Home() {
    return (
        <div id='home'>
            <div id="item">
                <a href="#home" className="navbar">Home</a>
                <a href="#projects" className="navbar">Projects</a>
                <a href="#about" className="navbar">About</a>
                <a href="#contact" className="navbar">Contact</a>
            </div>
            <div className='textHome'>
                <h1>
                    Hello, I am Piotr Szczechowski.
            </h1>
                <h2>
                    <ReactRotatingText items={["Front End Developer"]} />
                </h2>
                <h2>
                    <Button className='projectButton' href="#projects" variant="contained" color="primary">
                        Visit my Projects
                      </Button>
                </h2></div>
            <div className='projects'><Projects /></div>
            <div className='about'><About /></div>
            <div className='contact'><Contact /></div>
        </div>

    )
}
export default Home;