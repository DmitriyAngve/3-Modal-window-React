import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState();
  // define the default, the initial starting state. useState always returns an array and we pulling elements out from array and  store elements in separate constants. First element - is a current state snapshot. And every time this Component re-renders (does when the state is update), "enteredUsername" will hold the latest state snapshot, and "setEnteredUsername" holds the functions which we can call to change that state  and to then trigger such a re-render cycle
  const [enteredAge, setEnteredAge] = useState();

  // addUserHandler function inspect event object (submit?)
  const addUserHandler = (event) => {
    // prevent that default which for the submission event is that a request is sent

    // All this code only executes if we have valid inputs
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return; // if this conditions true, returns finish execution
    }
    //+ - becuase enteredAge is a sting basically
    if (+enteredAge < 1) {
      return;
    }
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    // Resetting (use empty string)
    setEnteredUsername("");
    setEnteredAge("");
  };

  // event object - listen to a default DOM event and such events will dispatch objects with more information.
  const usernameChangeHandler = (event) => {
    // call function from useState(). Set to what the user currently entered, and we can get that entered value with the help of that event object. We can access the target of the event which is the input and then the value property of that input, to get the currently entered value
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // "htmlFor" - name of prop for assigning that for attribute to a label
  // "onSubmit" - prop to specify a function that should be executed when that form is submitted
  return (
    // Custom components (like Card) does not know what to do with the class name prop because not a built in HTML component (like input, label). Make sure that we accept incoming class named prop and we do something with it
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername || ""}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge || ""}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
