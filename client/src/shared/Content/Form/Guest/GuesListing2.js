import React, { Component } from 'react';
import '../Listing/Listing.css';
// import Camaro from '../images/Camaro_orange.jpg';

let { slideIndex, showSlides, slidesIndex } = this.props;
class Popup2 extends React.Component {
    showSlides() {
        // let {slideIndex} = this.props;
        let i;
        let slides = document.getElementById("slideDiv");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
        setTimeout(showSlides, 3000);
    }

    currentSlide(n) {
        showSlides(slidesIndex = n);
    }

    showsSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slideDiv");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slidesIndex = 1
        }
        if (n < 1) {
            slidesIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slidesIndex - 1].style.display = "block";
        dots[slidesIndex - 1].className += " active";
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="parent">
                        <div className="space">
                            <br />
                        </div>
                        <div className='list'>
                            <div className="content">
                                <div className="details">
                                    <div className="inputListing">
                                        <h1> {this.props.year} {this.props.make} {this.props.model} </h1>
                                        <div className="price">
                                            <h1 className="prices">${this.props.price}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <br />
                                    </div>
                                </div>
                                <div className="padding">
                                    <div className="images" id="images">
                                        <br />
                                        <div className="slideDiv fade" id="slideDiv">
                                            <img className="photoSize" src={this.props.photo1}></img>
                                        </div>
                                        <div className="slideDiv fade">
                                            <img className="image" src={this.props.photo2}></img>
                                        </div>
                                        <div className="slideDiv fade">
                                            <img className="image" src={this.props.photo3}></img>
                                        </div>
                                        {/* <img className="image" src={photo4} alt="" ></img> */}
                                    </div>
                                    {/* Added Below */}
                                    <div className="dottin">
                                        <span className="dot" onclick="currentSlide(1)"></span>
                                        <span className="dot" onclick="currentSlide(2)"></span>
                                        <span className="dot" onclick="currentSlide(3)"></span>
                                    </div>
                                    {/* Added ^^ */}
                                    <div className="radios">
                                        <p>Drivetrain: {this.props.drivetrain}</p>
                                        <p>Transmission: {this.props.transmission}</p>
                                        <p>Color: {this.props.color}</p>
                                        <p>Doors: {this.props.doors}</p>
                                        <p>Miles: {this.props.miles}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                    <span class="close" onClick={this.props.closePopup}>&times;</span>
                </div>
            </div>
        );
    }
}

class GuestListing2 extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photo1, photo2, photo3, /*photo4,*/ description } = this.props;
        return (
            <div className="popupSection">
                <div className="sample">
                    <br />
                    <br />
                    <img className="sampleImage" src={photo1} alt="" ></img>
                    <div className="sampleDetails">
                        <img className="MobileSampleImage" src={photo1} alt="" ></img>
                        <h1 className="mobileTitle">{year} {make} {model}</h1>
                        <h4 className="prices">${price}</h4>
                        <div className="sampleRadio">
                            <p>Color: {color}</p>
                            <p>Drivetrain: {drivetrain}</p>
                            <p>Transmission: {transmission}</p>
                        </div>
                        <button onClick={this.togglePopup.bind(this)}>Show More</button>
                    </div>
                </div>
                {/* <button onClick={this.togglePopup.bind(this)}>show  section</button> */}
                {this.state.showPopup ?
                    <Popup2
                        make={make}
                        model={model}
                        year={year}
                        miles={miles}
                        drivetrain={drivetrain}
                        transmission={transmission}
                        color={color}
                        doors={doors}
                        price={price}
                        photo1={photo1}
                        photo2={photo2}
                        photo3={photo3}
                        description={description}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}


export default GuestListing2
