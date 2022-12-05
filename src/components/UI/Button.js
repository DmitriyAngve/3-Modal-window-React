import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  // classes.button imports from Button.module.css
  // type of the button can be set from outside from the place where we use our accustomed button component. They offer the value assigned to the type prop on the built in button component will be dynamic.
  // "|| "button" - if props will be undefined use this
  // "{props.onClick}" - onClick doesn't matter (named)
  // "props.children" - a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component.
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
