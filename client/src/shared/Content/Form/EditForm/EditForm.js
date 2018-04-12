import React, { Component } from 'react';
// import axios from 'axios';
// import Dropzone from 'react-dropzone';
// import Upload from '../shared/Upload';
// import request from 'superagent';

import '../Form.css';

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photo1, photo2, photo3, /*photo4,*/ description } = props;
        this.state = {
            inputs: {
                make: make || '',
                "model": model || '',
                "year": year || '',
                "miles": miles || '',
                "drivetrain": drivetrain || '',
                "transmission": transmission || '',
                "color": color || '',
                "doors": doors || '',
                "price": price || '',
                "description": description || '',
                photo1: photo1 || '',
                photo2: photo2 || '',
                photo3: photo3 || ''
                /*photo4: photo4 || ''*/
            },
            listings: [],
            uploadedFileCloudinaryUrl: "",
            loading: true
        }
        // this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleEdit(this.props._id, this.state.inputs)
        this.props.toggleEdit();
    }

    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photo1, photo2, photo3, /*photo4,*/ description } = this.state.inputs;
        let { listings } = this.state;
        console.log(listings);
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="overallWrap">
                    <br />
                    <div className="color small"><h1 className="title">Shop Cars</h1></div>
                    <br />
                    <div className="listingWrap">
                        <div className="color">
                            <h3 className="input about small">About Vehicle</h3>
                            <div className="grid">
                                <p className="input">Make:
                                    <input className="input vehicleInfo make" onChange={this.handleChange} name="make" type="text" value={make} placeholder="Vehicle Make" /></p>
                                <p className="input">Model:
                                    <input className="input vehicleInfo model" onChange={this.handleChange} name="model" type="text" value={model} placeholder="Vehicle Model" /></p>
                                <p className="input">Year:
                                    <input className="input vehicleInfo year" onChange={this.handleChange} name="year" type="number" value={year} placeholder="Vehicle Year" /></p>
                                <p className="input">Miles:
                                    <input className="input vehicleInfo miles" onChange={this.handleChange} name="miles" type="number" value={miles} placeholder="Vehicle Miles" /></p>
                                <p className="input">Color:
                                    <input className="input vehicleInfo carColor" onChange={this.handleChange} name="color" type="text" value={color} placeholder="Vehicle Color" /></p>
                                <p className="input">Price:
                                    <input className="input vehicleInfo price" onChange={this.handleChange} name="price" type="number" value={price} placeholder="Vehicle Price" /></p>
                                <p className="input">
                                    <input onChange={this.handleChange} type="text" name="photo1" value={photo1} id="" />
                                    <input onChange={this.handleChange} type="text" name="photo2" value={photo2} id="" />
                                    <input onChange={this.handleChange} type="text" name="photo3" value={photo3} id="" />
                                    {/* <input onChange={this.handleChange} type="text" name="photo4" value={photo4} id="" /> */}
                                </p>
                            </div>
                            <p className="input">Drivetrain:
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value="4WD" checked={drivetrain === "4WD"} /> 4WD</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value="RWD" checked={drivetrain === "RWD"} /> RWD</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value="AWD" checked={drivetrain === "AWD"} /> AWD</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value="FWD" checked={drivetrain === "FWD"} /> FWD</label>
                            </p>
                            <p className="input">Transmission:
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="transmission" value="Automatic" checked={transmission === "Automatic"} /> Automatic</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="transmission" value='Manual' checked={transmission === "Manual"} /> Manual</label>
                            </p>
                            <p className="input">Doors:
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="doors" value="2 door" checked={doors === "2 door"} />2 door</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="doors" value='4 door' checked={doors === "4 door"} />4 door</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="doors" value='5 door' checked={doors === "5 door"} />5 door</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="doors" value="Other" checked={doors === "Other"} /> Other</label>
                            </p>
                            <div className="description input">
                                <textarea name="description" className="describe" placeholder="Description" value={description} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                            </div>
                            <br />
                            <input className="submit" type="submit" value="Submit" />
                            <button className="submit" onClick={this.props.toggleEdit}>Cancel</button>
                            <br />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
