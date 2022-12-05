import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  // we rely on props to get our actual array of users as data. (users - custom name) That should hold an array of user data. Use map to convert array of users to an array of JSX elements which then are rendered onto the DOM
  return (
    // In my app every object have a name and age properties
    // users class - my special class
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
