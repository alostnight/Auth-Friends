import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriends from "./AddFriend";

const Friends = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="friendsList">
        <AddFriends addfriend={props.addFriend} />
        {friends.map((friend) => (
          <div className="friends" key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
