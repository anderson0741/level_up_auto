import React, { Component } from 'react';
import '../Listing/Listing.css';
// import Camaro from '../images/Camaro_orange.jpg';

class GuestListing extends Component {

    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photo1, photo2, photo3, /*photo4,*/ description } = this.props;
        return (
            <div className="parent">
                <div className="space">
                    <br />
                </div>
                <div className='list'>
                    <div className="content">
                        <div className="details">
                            <div className="inputListing">
                                <h1> {year} {make} {model} </h1>
                                <div className="price">
                                    <h1>${price}</h1>
                                </div>
                            </div>
                            <div>
                                <br />
                            </div>
                        </div>
                        <div className="padding">
                            <div className="images">
                                <br />
                                <img className="image" src={photo1} alt="" ></img>
                                <img className="image" src={photo2} alt="" ></img>
                                <img className="image" src={photo3} alt="" ></img>
                                {/* <img className="image" src={photo4} alt="" ></img> */}
                            </div>
                            {/* <div className="images">
                                <br />
                                <img className="image" src="https://i.ytimg.com/vi/ZopdphMMTE4/maxresdefault.jpg" alt="" />
                            </div> */}
                            <div className="radios">
                                <p>Drivetrain: {drivetrain}</p>
                                <p>Transmission: {transmission}</p>
                                <p>Color: {color}</p>
                                <p>Doors: {doors}</p>
                                <p>Miles: {miles}</p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}


export default GuestListing