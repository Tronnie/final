import React from "react";
import "./Activity.css";
import Tile from "../Tile";
import Stars from "../Stars";


class Activity extends React.Component{


	//insert funcitons and state stuff here


	render() {


		return(
			<div className="container-flex">
				<div className="row">	
					<div id="activity" className="col-12 align-self-center">
						<Stars />
						<Tile title="Exercise"/>
					</div>
				</div>
			</div>

		)
	}

}


export default Activity;

