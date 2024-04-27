import React from 'react';
import {IFriend} from "../Friends";

function FriendCard(friend: IFriend) {
    const timeSinceAdded = Date.now() - friend.addDate;

    return (
        <div className="card mb-3" style={{maxWidth: 320}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={friend.picture} className="img-fluid rounded-start w-100" alt="Avatar"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{friend.firstName + " " + friend.lastName}</h5>
                        <p className="card-text"><small className="text-body-secondary">Added {(timeSinceAdded / 100 / 60 / 60).toFixed(2)} hours ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendCard;
