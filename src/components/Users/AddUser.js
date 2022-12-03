import React from "react";

const AddUser = (props) => {
  // addUserHandler function inspect event object (submit?)
  const addUserHandler = (event) => {
    // prevent that default which for the submission event is that a request is sent
    event.preventDefault();
  };

  // "htmlFor" - name of prop for assigning that for attribute to a label
  // "onSubmit" - prop to specify a function that should be executed when that form is submitted
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
