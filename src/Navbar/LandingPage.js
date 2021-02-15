import React from "react"
import './LandingPage.css';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navBar").style.top = "0";
    } else {
        document.getElementById("navBar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

function LandingPage() {
    return (
        <div id='container'>
            <div id="navBar">
                <a href="#home" className="navbar">Home</a>
                <a href="#projects" className="navbar">Projects</a>
                <a href="#about" className="navbar">About</a>
                <a href="#contact" className="navbar">Contact</a>
            </div>
            <div className='home'><Home /></div>
            <div className='projects'><Projects /></div>
            <div className='about'><About /></div>
            <div className='contact'><Contact /></div>
        </div>

    )
}
export default LandingPage;