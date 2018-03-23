import React, { Component } from 'react';
// import './Listing.css';
// import EditForm from '../EditForm/EditForm';

class UserLists extends Component {
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
        let { user } = this.props;
        let { isEditing, listingDelete, _id } = this.state;
        return (
            <div className="parent">
                <div className="space">
                    <br />
                </div>
                {/* {!isEditing ? */}
                <div className='list'>
                    <div className="inputListing">
                        <h1> {user} </h1>
                        <div className="button">
                            <button className="deleteButton" onClick={() => { listingDelete(_id) }}>Delete</button>
                            <button className="deleteButton" onClick={this.toggleEdit}>Edit</button>
                            <br />
                        </div>
                        <br />
                    </div>
                    {/* : */}
                    {/* <EditForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={this.props.handleEdit} />} */}
                </div>
            </div>
        )
    }
}

export default UserLists