import React, { Component } from 'react';
import '../Listing/Listing.css';
// import Camaro from '../images/Camaro_orange.jpg';


class Popup extends React.Component {
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
                                    <div className="images">
                                        <br />
                                        <img className="image" src={this.props.photo1}></img>
                                        <img className="image" src={this.props.photo2}></img>
                                        <img className="image" src={this.props.photo3}></img>
                                        {/* <img className="image" src={photo4} alt="" ></img> */}
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
                    <span class="close" onClick={this.props.closePopup}>&times;</span>
                </div>
            </div>
        );
    }
}

class GuestListing extends React.Component {
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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
                    <Popup
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


export default GuestListing

            // <div className="parent">
            //     <div className="space">
            //         <br />
            //     </div>
            //     <div className='list'>
            //         <div className="content">
            //             <div className="details">
            //                 <div className="inputListing">
            //                     <h1> {year} {make} {model} </h1>
            //                     <div className="price">
            //                         <h1>${price}</h1>
            //                     </div>
            //                 </div>
            //                 <div>
            //                     <br />
            //                 </div>
            //             </div>
            //             <div className="padding">
            //                 <div className="images">
            //                     <br />
            //                     <img className="image" src={photo1} alt="" ></img>
            //                     <img className="image" src={photo2} alt="" ></img>
            //                     <img className="image" src={photo3} alt="" ></img>
            //                     {/* <img className="image" src={photo4} alt="" ></img> */}
            //                 </div>
            //                 {/* <div className="images">
            //                     <br />
            //                     <img className="image" src="https://i.ytimg.com/vi/ZopdphMMTE4/maxresdefault.jpg" alt="" />
            //                 </div> */}
            //                 <div className="radios">
            //                     <p>Drivetrain: {drivetrain}</p>
            //                     <p>Transmission: {transmission}</p>
            //                     <p>Color: {color}</p>
            //                     <p>Doors: {doors}</p>
            //                     <p>Miles: {miles}</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="description">
            //             <p>{description}</p>
            //         </div>
            //         <br />
            //     </div>
            // </div>