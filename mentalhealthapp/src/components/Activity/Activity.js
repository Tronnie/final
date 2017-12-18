import React from "react";
import "./Activity.css";
import Tile from "../Tile";
import Stars from "../Stars";
import ReactSwipe from "react-swipe";


class Activity extends React.Component{


	//insert funcitons and state stuff here

	state = {
		
		instructions: "Lorem Ipsum - Do some jumping jacks!!!!",
		imgsrc: "bicycle.ico"	

	}

	displayInstructions = (e) => {
		if(this.state.imgsrc === '') {
			this.setState({imgsrc:'bicycle.ico'})
		} else {
			this.setState({imgsrc:''});
		}

	}


	render() {


		return(
			<div className="container-flex">
				<div className="row">	
					<div id="activity" className="col-12 align-self-center">
						<Stars />
						<ReactSwipe className="carousel swipeOptions={{continuous: flase}}">
							<div><Tile image={this.state.imgsrc} instructions={this.state.instructions} setInstructions={this.displayInstructions} title="Sleep"/></div>
							<div><Tile image={this.state.imgsrc} instructions={this.state.instructions} setInstructions={this.displayInstructions} title="Exercise"/></div>
							<div><Tile image={this.state.imgsrc} instructions={this.state.instructions} setInstructions={this.displayInstructions} title="Eat"/></div>
						</ReactSwipe>
					</div>
				</div>

			</div>

		)
	}

}


export default Activity;

