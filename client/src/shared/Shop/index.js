import React, { Component } from 'react';
import axios from 'axios';
import Search from '../Shop/SearchBar/Search';
import GuestDisplay from '../Content/Form/Guest/GuestDisplay';

import '../Shop/Shop.css';

const listingUrl = `/listing/`;

export default class componentName extends Component {
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
            })
    }
    render() {
        let { listings, loading } = this.state;
        return (
            <div className="parent">
                <div className="searchin">
                    <Search />
                </div>
                {/* <ListingDisplay loading={loading} listings={listings} className="list"/> */}
                <div className="guestin">
                    <GuestDisplay loading={loading} listings={listings} className="list" />
                </div>
                <br />
            </div>
        )
    }
}
