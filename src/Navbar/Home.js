import React from "react"
import './Home.css';
import Button from '@material-ui/core/Button';

var ReactRotatingText = require('react-rotating-text');

function Home() {
    return (
        <div className='background'>
            <div className='textHome'>
                <h1>
                    Hello, I am Piotr Szczechowski.
            </h1>
                <h2>
                    <ReactRotatingText items={["I'm programmer with passion"]} />
                </h2>
                <h2>
                    <Button href="/projects" variant="contained" color="primary">
                        Visit my Projects
                      </Button>
                </h2>
            </div></div>
    )
}
export default Home;