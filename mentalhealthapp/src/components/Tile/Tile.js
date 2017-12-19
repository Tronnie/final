import React from "react";
import "./Tile.css";
import Button from "../Button";

const Tile = (props) => (

	<div id="backdrop" className="col-8 offset-md-2 offset-lg-2">
		<div onClick={props.display} id="card" className="col-10 offset-md-1 offset-lg-1">
			<h1>{props.title}</h1>
			<img src={props.image} alt={props.instructions}/>
		</div>
		<div className="selector col-10 offset-lg-1 offset-md-1">
			<Button onClick={props.decline} id="decline" name="Decline"/>
			<Button onClick={props.accept} id="accept" name="Accept"/>
		</div>
	</div>



	)

export default Tile;