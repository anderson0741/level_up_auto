import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import "./Search.css";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                "make": '',
                "model": '',
                "year": '',
                "miles": '',
                "drivetrain": '',
                "transmission": '',
                "color": '',
                "doors": '',
                "price": ''
            },
            listings: [],
            uploadedFileCloudinaryUrl: "",
            loading: true
        }
    }
    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price } = this.state.inputs;
        // let { listings, loading } = this.state;
        return (
            <div className="wrapper">
                <div className="searchBod">
                    <div className="searchCl">
                        <div className="inputTitle">
                            <h1>Search Bar</h1>
                            <p className="inputTitleAlign"> Make: <input className="inputSearch vehicleInfo make" onChange={this.handleChange} name="make" type="text" value={make} placeholder="Make" /></p>
                            <p className="inputTitleAlign">Model: <input className="inputSearch vehicleInfo model" onChange={this.handleChange} name="model" type="text" value={model} placeholder="Model" /></p>
                            <p className="inputTitleAlign">Year: <input className="inputSearch vehicleInfo year" onChange={this.handleChange} name="year" type="number" value={year} placeholder="Year" /></p>
                            <p className="inputTitleAlign">Miles: <input className="inputSearch vehicleInfo miles" onChange={this.handleChange} name="miles" type="number" value={miles} placeholder="Miles" /></p>
                            <p className="inputTitleAlign">Color: <input className="inputSearch vehicleInfo carColor" onChange={this.handleChange} name="color" type="text" value={color} placeholder="Color" /></p>
                            <p className="inputTitleAlign">Price: <input className="inputSearch vehicleInfo price" onChange={this.handleChange} name="price" type="text" value={price} placeholder="Price" /></p>
                            <br />
                        </div>
                    </div>
                    {/* <div className="drivetrain">
                        <p>Drivetrain:</p>
                        <p className="inputSearch drive">
                            <br />
                            <label htmlFor=""><input className="inputSearch edrive" onChange={this.handleChange} type="checkbox" name="drivetrain" value={drivetrain} /> 4WD</label>
                            <label htmlFor=""><input className="inputSearch edrive" onChange={this.handleChange} type="checkbox" name="drivetrain" value={drivetrain} /> RWD</label>
                            <label htmlFor=""><input className="inputSearch edrive" onChange={this.handleChange} type="checkbox" name="drivetrain" value={drivetrain} /> AWD</label>
                            <label htmlFor=""><input className="inputSearch edrive" onChange={this.handleChange} type="checkbox" name="drivetrain" value={drivetrain} /> FWD</label>

                        </p>
                    </div>
                    <div className="transmissions">
                        <p className="inputSearch trans">Transmission:
                                <label htmlFor=""><input className="inputSearch" onChange={this.handleChange} type="checkbox" name="transmission" value={transmission} /> Automatic</label>
                            <label htmlFor=""><input className="inputSearch" onChange={this.handleChange} type="checkbox" name="transmission" value={transmission} /> Manual</label>

                        </p>
                    </div>
                    <div className="doorzz">
                        <p className="inputSearch doorss">Doors:
                            <label htmlFor=""><input className="inputSearch" onChange={this.handleChange} type="checkbox" name="door" value={doors} /> 2 door</label>
                            <label htmlFor=""><input className="inputSearch" onChange={this.handleChange} type="checkbox" name="door" value={doors} /> 4 door</label>
                            <label htmlFor=""><input className="inputSearch" onChange={this.handleChange} type="checkbox" name="door" value={doors} /> 5 door</label>
                            <label htmlFor=""><input className="inputSearch" onChange={this.handleChange} type="checkbox" name="door" value={doors} /> Other</label>
                        </p>
                    </div> */}
                </div>
            </div>
        )
    }
}
