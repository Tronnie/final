import React from "react";
import "./Activity.css";
import Tile from "../Tile";
import Stars from "../Stars";
import ReactSwipe from "react-swipe";


class Activity extends React.Component{


	//insert funcitons and state stuff here
	// render Tiles here in a function

	generateTiles() {

		return(
			<div>{
			this.props.tiles.map((el) => (

				<div><Tile image={el.image} instructions={el.instruction}/></div>
					)			
				)
			}</div>
		)
	}



	render() {


		return(
			<div className="container-flex">
				<div className="row">	
					<div id="activity" className="col-12 align-self-center">
						<Stars />
						<ReactSwipe className="carousel swipeOptions={{continuous: false}}">
							{this.generateTiles()}
						</ReactSwipe>
					</div>
				</div>

			</div>

		)
	}
}



export default Activity;

