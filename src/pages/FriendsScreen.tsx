import React from 'react';
import FriendCard from "../components/FriendCard";
import {NavLink} from "react-router-dom";
import Friends from "../Friends";

function FriendsScreen() {
    const friends = Friends.getInstance();

    return (
        <div className={"text-center"}>
            <h2 className={"my-2"}>Friends</h2>
            {friends.getFriendsList().length > 0 ? (
                <div className="container d-flex flex-wrap">
                    {friends.getFriendsList().map(friend => {
                        return <FriendCard
                            key={friend.id}
                            id={friend.id}
                            firstName={friend.firstName}
                            lastName={friend.lastName}
                            picture={friend.picture}
                            addDate={friend.addDate}
                        />
                    })}
                </div>
            ) : (
                <div>
                    <h3 className={"text-black-50 fw-light"}>No Friends found</h3>
                    <NavLink to={"add"} className={"btn btn-primary"}>Add Friend</NavLink>
                </div>
            )}
        </div>
    );
}

export default FriendsScreen;
