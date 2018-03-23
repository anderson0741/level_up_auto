import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div className="outerHomeDiv">
            <div className='homeDivBox'>
                <br />
                <div className="welcome_level">
                    <h1 className='tag zoomIn'>Welcome to Level Up Cars</h1>
                </div>
                <div className="selector">
                    <a href="cars" className="shopCars homeBox">
                        <h1>SHOP CARS</h1>
                    </a>
                    <a className="aboutSelector homeBox" href="/about">
                        <h1>ABOUT US</h1>
                    </a>
                    <a href="contact" className="location homeBox">
                        <h1>LOCATION</h1>
                    </a>
                    {/* <div className="otherFuture homeBox">
                        <h1>future</h1>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home
