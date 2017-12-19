import React from "react";
import "./Activity.css";
import Tile from "../Tile";
import Stars from "../Stars";
import ReactSwipe from "react-swipe";


class Activity extends React.Component{


	//insert funcitons and state stuff here


	render() {


		return(
			<div className="container-flex">
				<div className="row">	
					<div id="activity" className="col-12 align-self-center">
						<Stars />
						<ReactSwipe className="carousel swipeOptions={{continuous: false}}">
							<div><Tile image={this.props.images} instructions={this.props.instructions} display={this.props.display} title="Sleep"/></div>
						</ReactSwipe>
					</div>
				</div>

			</div>

		)
	}

}


export default Activity;

