import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.modules.css";

const ErrorModal = (props) => {
  return (
    // props.title - its my component name doesn't matter. Title prop should be hold the text, which should be output here
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
