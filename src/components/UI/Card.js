import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // I want to make sure that the CSS class we're applying to the div, with the help of class name on that div, that the class is applied to the div reflect both the card class, which we already are applying, as well as any potentially incoming classes on the class named prop of this Card component. Any class I add on the card component when i use it, isn't the end applied together with the card class to the div which is rendered by the card. I wanna apply two CSS classes: one coming from the card module CSS file, and one coming from outside, from the props, potentially coming via props
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
