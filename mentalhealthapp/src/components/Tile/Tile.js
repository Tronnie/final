import React from "react";
import "./Tile.css";
import Button from "../Button";

const Tile = (props) => (

	<div id="backdrop" className="col-8 offset-md-2 offset-lg-2">
		<div id="card" className="col-10 offset-md-1 offset-lg-1">
			<h1>{props.title}</h1>
			<img src="bicycle.ico" alt=""/>
		</div>
		<div className="selector col-10 offset-lg-1 offset-md-1">
			<Button id="decline" name="Decline"/>
			<Button id="instructions" name="Instuctions"/>
			<Button id="accept" name="Accept"/>
		</div>
	</div>



	)

export default Tile;