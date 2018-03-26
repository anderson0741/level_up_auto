import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div className="outerHomeDiv">
            <div className='homeDivBox'>
                <br />
                <div className="welcome_level">
                    <h1 className='tag'>Welcome to Level Up Cars</h1>
                </div>
                <div className="welcome_level_mobile">
                    <h2 className='tag'>Welcome to</h2>
                    <h1>Level Up Cars</h1>
                </div>
                <div className="selector">
                    <a href="cars" className="shopCars cons1">
                        <h1>SHOP CARS</h1>
                    </a>
                    <a className="aboutSelector cons1" href="/about">
                        <h1>ABOUT US</h1>
                    </a>
                    <a href="contact" className="location consTitle">
                        <h1>LOCATION</h1>
                    </a>
                    {/* <div className="otherFuture cons1">
                        <h1>future</h1>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home
