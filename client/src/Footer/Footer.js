import React from 'react';
import instagram from '../images/instagram1.png';
import facebook from '../images/facebook.png';

import './Footer.css';

function Footer() {
    return (
        <div className="footerWrapper">
            <div className="footerBod">
                <div className="icons">
                    <a className='instagram' href="https://www.instagram.com/levelupcarsales/?hl=en"><img className='footerIcons' src={instagram} alt=""/></a>
                    <a className='facebook' href="https://www.facebook.com/Level-Up-Car-Sales-513113469032684/?ref=page_internal"><img className='footerIcons' src={facebook} alt=""/></a>
                </div>
                <div className="toPage">
                <a className='home' href="/">Home</a>
                <p> / </p>
                <a className='home' href="/cars">Shop</a>
                {/* <p> / </p> */}
                {/* <a className='home' href="/login">Login</a> */}
            </div>
            </div>
        </div>
    )
}

export default Footer;
