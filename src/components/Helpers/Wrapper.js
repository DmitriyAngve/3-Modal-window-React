const Wrapper = (props) => {
  return props.children; // chelidren prop holds all the content you're passing between the opening and closing tag of your custom component. It is valid in a component to just return that content which you got between the opening and closing tag
};

export default Wrapper;
