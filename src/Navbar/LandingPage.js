import React from "react"
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { makeStyles } from '@material-ui/core/styles';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

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

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    navBar: {
        fontFamily: 'KalamRegular',
        display: 'flex',
        justifyContent: 'right',
        margin: 'auto',
        backgroundColor: 'black',
        opacity: '0.8',
        width: '100%',
        height: '100%',
        position: 'sticky',
        zIndex: 1,
        transition: '0.6s',
    },
    home: {
        fontFamily: 'KalamRegular',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("/assets/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
})

function LandingPage() {
    const classes = useStyles();
    return (
        <div id='container' className={classes.container}>
            <div id="navBar" className={classes.navBar}>
                <a href="#home" className="navbar">Home</a>
                <a href="#projects" className="navbar">Projects</a>
                <a href="#about" className="navbar">About</a>
                <a href="#contact" className="navbar">Contact</a>
            </div>
            <div className={classes.home} data-aos="zoom-out" data-aos-duration="2000"><Home /></div>
            <div className={classes.projects} data-aos="fade-up" data-aos-duration="2000"><Projects /></div>
            <div className={classes.about} data-aos="fade-up" data-aos-duration="2000"><About /></div>
            <div className={classes.contact} data-aos="fade-up" data-aos-duration="2000"><Contact /></div>

        </div>

    )
}
export default LandingPage;