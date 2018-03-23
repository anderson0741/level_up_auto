import React, { Component } from 'react';
import Listing from './UserLists';

export default class UserDisplay extends Component {
    render() {
        let { user, loading, listingDelete } = this.props;
        return (
            loading ?
                <div>
                    loading...
                </div>
                :
                <div>
                    {user.map((user, index) => {
                        return <Listing handleEdit={this.props.handleEdit} listingDelete={listingDelete} key={user._id} {...user} />
                    })}
                </div>
        )
    }
}