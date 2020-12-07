import React from "react"
import './Home.css';

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
            </div></div>
    )
}
export default Home;