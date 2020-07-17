import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const AddFriends = (props) => {
  const [friend, setfriend] = useState({
    name: "",
    age: "",
    email: "",
  });
  const history = useHistory();

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then((res) => {
        setfriend({ ...friend, name: "", age: "", email: "" });
        console.log(res);
        history.push("/friends");
      });
  };

  const handleChange = (e) => {
    setfriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={addFriend}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={friend.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Age
          <input
            type="text"
            name="age"
            placeholder="Enter Age"
            value={friend.age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={friend.email}
            onChange={handleChange}
          />
        </label>
        <button className="btn">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;
