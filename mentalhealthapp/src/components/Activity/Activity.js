import React from "react";
import "./Activity.css";
import Tile from "../Tile";
import Stars from "../Stars";
import ReactSwipe from "react-swipe";


class Activity extends React.Component{


	
	render() {


		return(
			<div className="container-flex">
				<div className="row">	
					<div id="activity" className="col-12 align-self-center">
						<Stars />
							<ReactSwipe className="carousel" 
										swipeOptions={{continuous: true}, 
										{callback:(i,e) =>{this.props.falsify();this.props.display(false,this.props.tiles[i].image,this.props.tiles[i].instruction)}}}>
							{this.props.tiles.map((el) => (
								<div><Tile image={el.image}
								 contents={this.props.contents}
								 title={el.title}
								 updater={this.props.updater}
								 clicked={this.props.clicked} 
								 display={this.props.display} 
								 instruction={el.instruction}/></div>))}
						</ReactSwipe>
					</div>
				</div>

			</div>

		)
	}
}



export default Activity;

