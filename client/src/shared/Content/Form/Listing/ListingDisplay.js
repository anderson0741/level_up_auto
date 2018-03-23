import React, { Component } from 'react';
import Listing from './Listing';

export default class ListingDisplay extends Component {
    render() {
        let { listings, loading, listingDelete } = this.props;
        return (
            loading ?
                <div>
                    loading...
                </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <Listing handleEdit={this.props.handleEdit} listingDelete={listingDelete} key={listing._id} {...listing} />
                    })}
                </div>
        )
    }
}