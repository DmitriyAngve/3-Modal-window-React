import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

// then state data changes, the App should rendered

function App() {
  // users={[]} - avoid the error there" undefined.map(")
  const [usersList, setUsersList] = useState([]);
  // "setUsersList" - function that allow us to change to the array from empty

  const addUserHandler = (uName, uAge) => {
    // call this func and update the state by taking the old list and appending a new element to it. When your state update relies on the previous state you wanna use an alternative form os set UsersList. Pass a function to setUsersList
    setUsersList((prevUsersList) => {
      // here you should return your new state snapshot
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // then we click the AddUser button hence the AddUserHandler in the AddUser component runs, we forward the enteredUsername and enteredAge to the App component (we do this with props), then a function which we pass to onAddUser should be triggered, its a function we have yet to define
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
