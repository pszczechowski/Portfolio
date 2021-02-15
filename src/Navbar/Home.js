import React from "react"
import './Home.css';
import Button from '@material-ui/core/Button';

var ReactRotatingText = require('react-rotating-text');

function Home(props) {
    return (
        <div id="home">
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
                </h2></div></div>
    )
}

export default Home;