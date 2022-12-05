import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// Let's tell React about portal
const Backdrop = (props) => {
  return (
    // return div with needed backdrop class
    <div className={classes.backdrop} onClick={props.onConfirm} onConfirm />
  );
};

const ModalOverlay = (props) => {
  // props.title - its my component name doesn't matter. Title prop should be hold the text, which should be output here
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

// ReactDOM.createPortal( with two arguments to which we want to teleport ).
// First argument - "onConfirm={props.onConfirm}" - we get access to props onConfirm, which I need to parse here to ensure that everything still works
// Function I get on the onConfirm prop to the onClick prop inside of that new Backdrop Component
// Second argument - is a pointer to that container in the real DOM where this elements should be rendered in
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
