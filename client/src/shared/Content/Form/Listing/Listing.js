import React, { Component } from 'react';
import './Listing.css';
import EditForm from '../EditForm/EditForm';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }


    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photo1, photo2, photo3, /*photo4,*/ description, listingDelete, _id } = this.props;
        let { isEditing } = this.state;
        return (
            <div className="parent">
                <div className="space">
                    <br />
                </div>
                {!isEditing ?
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
                                    <img className="image" src={photo4} alt="" ></img>
                                </div>
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
                        <div className="button">
                            <button className="deleteButton" onClick={() => { listingDelete(_id) }}>Delete</button>
                            <button className="deleteButton" onClick={this.toggleEdit}>Edit</button>
                            <br />
                        </div>
                        <br />
                    </div>
                    :
                    <EditForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={this.props.handleEdit} />}
            </div>
        )
    }
}

export default Listing