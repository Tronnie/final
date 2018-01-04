import React from "react";
import "./Tile.css";
import Button from "../Button";
const Tile = (props) => (

	<div id="backdrop" className="col-8 offset-md-2 offset-lg-2">
		<div id="card" onClick={(e)=> {props.updater(props.clicked);props.display(props.clicked,props.image,props.instruction)}} className="col-10 offset-md-1 offset-lg-1">
			<h1>{props.title}</h1>
			<div>{props.contents}</div>
		</div>
		<div className="selector col-10 offset-lg-1 offset-md-1">
			<Button onClick={props.decline} id="decline" name="Decline"/>
			<Button id="accept" success={props.success} name="Accept"/>
		</div>
	</div>

	)

export default Tile;