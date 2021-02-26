import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
var ReactRotatingText = require('react-rotating-text');

const useStyles = makeStyles({
    reactRotatingTextCursor: {
        animation: 'blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite',
    },

    textHome: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: '100vh',
    },

    home: {
        display: 'flex',
        flexDirection: 'row',
        color: 'black'

    },
    projectButton: {
        backgroundColor: 'black',
        opacity: '0.7',
        animation: 'ring 1.5s infinite',
        bordeRadius: '100%',
    },

    '@keyframes blinking-cursor': {
        '0%': {
            opacity: 0,
        },
        '50%': {
            opacity: 1,
        },
        '100%': {
            opacity: 0,
        }
    },

    '@keyframes ring': {
        '0%': {
            width: '30px',
            height: '30px',
            opacity: '1',
        },
        '100%': {
            width: '300px',
            height: '300px',
            opacity: '0',
        },
    },

});

function Home(props) {
    const classes = useStyles();
    return (
        <div id="home" className={classes.home}>
            <div className={classes.textHome}>
                <h1>
                    Hello, I am Piotr Szczechowski.
                </h1>
                <h2>
                    <ReactRotatingText items={["Front End Developer"]} />
                </h2>
                <h2>
                    <Button className={classes.projectButton} href="#projects" variant="contained" color="primary">
                        Visit my Projects
                      </Button>
                </h2></div></div>
    )
}

export default Home;