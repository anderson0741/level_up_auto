import React, { Component } from 'react';
import GuestListing from './GuestListing';

export default class GuestDisplay extends Component {
    render() {
        let { listings, loading } = this.props;
        return (
            loading ?
                <div>
                    loading
                </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <GuestListing key={listing._id} {...listing} />
                    })}
                </div>
        )
    }
}