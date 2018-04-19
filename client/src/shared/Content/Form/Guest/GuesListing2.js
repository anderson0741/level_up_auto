import React, { Component } from 'react';
import '../Listing/Listing.css';
// import Camaro from '../images/Camaro_orange.jpg';


class Popup2 extends React.Component {
    constructor(props) {
        super(props);
        const { photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10 } = props;
        this.state = {
            images: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10],
            currIndex: 0,
            // active: ""
        }
    }
    currentSlide = (n) => {
        this.setState({
            currIndex: n
        })
    }

    // myColor = (p) => {
    //     if (this.state.active === p) {
    //         return "#717171";
    //     }
    //     return "grey";
    // }

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
                                        <div>
                                            {this.state.images.map((image, i) => {
                                                return <img className="dotImage" src={image} style={{ display: i !== this.state.currIndex ? "none" : "block" }} alt="" />
                                            })}
                                            <div className="dottin">
                                                {this.state.images.map((image, i) => {
                                                    return <span className="dot" onClick={() => this.currentSlide(i)} style={{ backgroundColor: i === this.state.currIndex ? "#717171" : "" }}></span>
                                                })}
                                            </div>
                                        </div>
                                    </div>
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
                    <span className="close" onClick={this.props.closePopup}>&times;</span>
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
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, description } = this.props;
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
                        photo3={photo3}
                        photo4={photo4}
                        photo5={photo5}
                        photo6={photo6}
                        photo7={photo7}
                        photo8={photo8}
                        photo9={photo9}
                        photo10={photo10}
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
