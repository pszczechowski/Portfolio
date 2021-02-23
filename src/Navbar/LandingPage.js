import React from "react"
// import './LandingPage.css';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { makeStyles } from '@material-ui/core/styles';

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
        flexDirection: 'row',
        justifyContent: 'right',
        alignItems: 'center',
        textAlign: 'center',
        alignItems: 'flex-start',
        margin: 'auto',
        backgroundColor: 'black',
        opacity: '0.8',
        width: '100%',
        height: '100%',
        position: 'sticky',
        zIndex: 1,
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
            <div className={classes.home}><Home /></div>
            <div className={classes.projects}><Projects /></div>
            <div className={classes.about}><About /></div>
            <div className={classes.contact}><Contact /></div>
        </div>

    )
}
export default LandingPage;