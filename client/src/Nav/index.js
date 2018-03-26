import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../images/level_up_cars.jpg';
import { connect } from "react-redux";
import { logout } from "../redux/auth";
// import Home from '../../shared/Home/index.js';


import './Nav.css';

class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="outerNavDiv" >
                <div className="navBod">
                    <img className='imgs' src={images} alt="" />
                    <div className="menuOptions">
                        <div className="navBod_nav guest">
                            <button className="dropbtn">Menu</button>
                            <div className="nav_dropdwn">
                                <a className='links' href="/">Home</a>
                                <a className='links' href="/about">About</a>
                                <a className='links' href="/cars">Shop Cars</a>
                                <a className='links' href="/contact">Contact Us</a>
                            </div>
                        </div>
                        {isAuthenticated ? <div className="navBod_nav user">
                            <button className="dropbtn">Username</button>
                            <div className="nav_dropdwn user">
                                <a><Link className='links' to="/upload">Upload Content</Link></a>
                                <a className='links' onClick={this.props.logout}>Logout</a>
                            </div>
                        </div> : null}
                    </div>
                    {/* <div className="navi "> */}
                    {/* <img className='imgs' src={images} alt="" /> */}
                    {/* <div className='links'><p>/</p></div>
                        <div className='links'><Link className='links' to="/">Home</Link></div>
                        <div className='links'><p>/</p></div>
                        <div className='links'><Link className='links' to="/about">About</Link></div>
                        <div className='links'><p>/</p></div>
                        <div className='links'><Link className='links' to="/cars">Shop Cars</Link></div>
                        <div className='links'><p>/</p></div>
                        {isAuthenticated ? <div className='links'><Link className='links' to="/upload">Upload Content</Link></div> : null} */}
                    {/* <div className='links'><Link className='links' to="/upload">Upload Content</Link></div> */}
                    {/* {isAuthenticated ? <div className='links'><p>/</p></div> : null} */}
                    {/* <div className='links'><Link className='links' to="/contact">Contact Us</Link></div> */}
                    {/* <Link to="/image">Upload Image</Link> */}
                    {/* {isAuthenticated ? <div className='links'><p>/</p></div> : null}
                        {isAuthenticated ? <div className="links"><a className='links' onClick={this.props.logout}>Logout</a></div> : null}
                        <div className='links'><p>/</p></div>
                        {isAuthenticated ? null : <div className='links'><Link className='links' to="/login">Login</Link></div>} */}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, { logout })(Nav); 
