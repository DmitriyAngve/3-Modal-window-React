import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // The first time React reaches JSX code with prop ref and renders code with input, it will actually set the values stored in nameInputRef to the native DOM element that is rendered based on this input. "nameInputRef" will really be a real DOM element later.
  const nameInputRef = useRef(); // useRef() returns a value which allows me to work with that ref later, so which allows us to work with that element to which we\re going to connect it
  const ageInputRef = useRef(); // We can do it with inputs, and not with any elements

  const [enteredUsername, setEnteredUsername] = useState("");
  // define the default, the initial starting state. useState always returns an array and we pulling elements out from array and  store elements in separate constants. First element - is a current state snapshot. And every time this Component re-renders (does when the state is update), "enteredUsername" will hold the latest state snapshot, and "setEnteredUsername" holds the functions which we can call to change that state  and to then trigger such a re-render cycle
  const [enteredAge, setEnteredAge] = useState("");

  // EXTRA useState for ErrorModal window
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // addUserHandler function inspect event object (submit?)
    // prevent that default which for the submission event is that a request is sent
    event.preventDefault();
    // if this conditions true, returns finish execution
    // All this code only executes if we have valid inputs
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // execute it as function here,because we get as a value on that prop will be a function
    props.onAddUser(enteredUsername, enteredAge); // forward this data to the App.js component up on every click on the AddUser button inside of the AddUser component

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

  // need to reset to undefined or to null (to nay other falsy error)
  const errorHandler = () => {
    setError(null); // after this error window no longer be rendered
  };

  // "htmlFor" - name of prop for assigning that for attribute to a label
  // "onSubmit" - prop to specify a function that should be executed when that form is submitted
  return (
    // Custom components (like Card) does not know what to do with the class name prop because not a built in HTML component (like input, label). Make sure that we accept incoming class named prop and we do something with it

    // wrap {} {error && {<ErrorModal...>}} - because its generally a JavaScript expression
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername || ""}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge || ""}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

// Lifting the state up! We need to manage our list of users in a place, where we can get both access to the AddUser component and get notified when that AddUser button was clicked as well as where we got access to the users list component to feed our users array into it. We dont have access to UsersList inside of AddUser, for example. Managing our Userlist state here would be wrong our users array. UserList component - right place, because we need that list, but there we don't get access to the added user data that AddUser form is out of reach here. We already configured this UsersList component to work differently and to get the users data from outside wire props. That's the place where we wanna manage our state. We wanna manage it in the App.js component because that's the one component above both AddUser and UsersList, it's the nearest component above those two components, which has access to both components and therefore we lift the state management up to this App component
