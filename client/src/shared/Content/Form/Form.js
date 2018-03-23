import React, { Component } from 'react';
import axios from 'axios';
// import Dropzone from 'react-dropzone';
// import Upload from '../shared/Upload';
import request from 'superagent'; 
import ListingDisplay from './Listing/ListingDisplay';
import UserDisplay from './Userz/UserDisplay';
// import EditForm from './EditForm/EditForm';

import './Form.css';

const listingUrl = `/listing/`;
const cloudinaryPreset = 'level_up';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/anderson0741/upload';

export default class Form extends Component {
    constructor(props) {
        super(props);
        // let { /*make, model, year, miles, drivetrain, transmission, color, doors, price, photos, photo1, photo2, photo3, photo4,*/ description } = props;
        this.state = {
            inputs: {
                "make": '',
                "model": '',
                "year": '',
                "miles": '',
                photo1: "",
                photo2: "",
                photo3: "",
                photo4: "",
                "drivetrain": '',
                "transmission": '',
                "color": '',
                "doors": '',
                "price": '',
                "description": '',
                "user": ''
            },
            listings: [],
            uploadedFileCloudinaryUrl: "",
            loading: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.listingDelete = this.listingDelete.bind(this);
        // this.listingChange = this.listingChange.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(cloudinaryUrl)
            .field('upload_preset', cloudinaryPreset)
            .field('file', file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            console.log(response)
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
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

    handleSubmit(e) {
        // let { _id, updateListing } = this.props;
        let listing = this.state.inputs
        e.preventDefault();
        axios.post(listingUrl, listing)
            .then(response => {
                console.log(response.data);
                this.setState((prevState) => {
                    return {
                        listings: [response.data, ...prevState.listings],
                        loading: false
                    }
                });
            })
            .catch(err => {
                console.error(err);
            })
        this.clearInputs();
    }

    listingDelete(id) {
        let { listings } = this.state;
        axios.delete(listingUrl + id)
            .then(response => {
                this.setState({
                    listings: listings.filter((listing, index) => {
                        return listing._id !== id
                    }),
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    componentDidMount() {
        axios.get(listingUrl)
            .then(response => {
                this.setState({
                    listings: response.data,
                    loading: false
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    handleEdit(id, updateListing) {
        axios.put(listingUrl + "/" + id, updateListing)
            .then(response => {
                let newListing = response.data;
                this.setState(prevState => {
                    return {
                        listings: prevState.listings.map(listing => {
                            if (listing._id === id) {
                                return newListing;
                            } else {
                                return listing;
                            }
                        })
                    }
                })
            })
    }

    clearInputs() {
        this.setState({
            inputs: {
                "make": '',
                "model": '',
                "year": '',
                "miles": '',
                "drivetrain": '',
                "transmission": '',
                "color": '',
                "doors": '',
                "price": '',
                "description": '',
                "photo1": '',
                "photo2": '',
                "photo3": '',
                "photo4": ''
            },
            uploadedFileCloudinaryUrl: ""
        })
    }

    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, description, photo1, photo2, photo3, photo4, user } = this.state.inputs;
        let { listings, loading } = this.state;
        console.log(listings);
        // console.log(make, model, year, miles, drivetrain, transmission, color, doors, price);

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
                            </div>
                            <div className="linkTitle">
                                <p className="input linkTitle">
                                    Link photos:</p>
                                <p className="linkedPhotos">
                                    {/* <label htmlFor=""><input className="input" onChange={this.handleChange} name="photo1" value="photo1" checked={photo1 === "photo1"} type="checkbox"/><input onChange={this.handleChange} type="text" name="photo1" value={photo1} id="" /><input /></label> */}
                                    <input className="photo1" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo1" value={photo1} id="" />
                                    <input className="photo2" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo2" value={photo2} id="" />
                                    <input className="photo3" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo3" value={photo3} id="" />
                                    <input className="photo4" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo4" value={photo4} id="" />
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
                            {/* <h3 className="titleRange input">Price Range</h3>
                            <div className="range input">$0
                                <input className="input" onChange={this.handleChange} id="price" type="range" value={price} name="points" min="0" max="100000" />
                                $100,000
                            </div>
                            <p className="result input"></p> */}
                            <div className="description input">
                                <textarea name="description" className="describe" placeholder="Description" value={description} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                            </div>
                            {/* <div className="photo input">
                                <textarea name="text" id="" cols="30" rows="10"></textarea>
                            </div> */}
                            {/* <div className="imageUpload input">
                                <Dropzone
                                    multiple={true}
                                    accept="image/*"
                                    onDrop={this.onImageDrop.bind(this)}>
                                    <p className="imgTxt">Select Image, Copy Link</p>
                                </Dropzone>
                            </div>
                            <div className="input">
                                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                    <div>
                                        <p>{this.state.uploadedFile.name}</p>
                                        <img className="thumbnail" src={this.state.uploadedFileCloudinaryUrl} />
                                    </div>}
                            </div> */}
                            <br />
                            <input className="submit" type="submit" value="Submit" />
                            <br />
                        </div>
                    </div>
                </form>
                <ListingDisplay handleEdit={this.handleEdit} listingDelete={this.listingDelete} loading={loading} listings={listings} />
                {/* <UserDisplay handleEdit={this.handleEdit} listingDelete={this.listingDelete} loading={loading} user={user} /> */}
            </div>

        )
    }
}
