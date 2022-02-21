import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersFunction = () => {
  let myUsers = [];
  const [users, setUsers] = useState(myUsers);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <hr/>
      <div>
            {users.map(user => <div>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <hr/>
            </div>)}
          </div>
    </div>
  );
};

export default UsersFunction;
