import React, { Component } from 'react';
import GuestListing from './GuestListing';
import GuestListing2 from './GuesListing2';

export default class GuestDisplay extends Component {
    render() {
        let { listings, loading } = this.props;
        return (
            loading ?
                <div className="loadingDisp">
                    Loading...
                </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <GuestListing2 key={listing._id} {...listing} />
                    })}
                </div>
        )
    }
}