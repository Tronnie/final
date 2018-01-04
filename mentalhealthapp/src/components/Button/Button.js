import React from "react";
import "./Button.css";

const Button = (props) => (
	<button onClick={console.log("I've been clicked")} id={props.id}>{props.name}</button>






)

export default Button;
