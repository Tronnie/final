import React from "react";
import "./Activity.css";
import Tile from "../Tile";
import Stars from "../Stars";
import ReactSwipe from "react-swipe";

class Activity extends React.Component{

	  

	  prev() {
	    this.reactSwipe.prev();
	  }

	  dummy() {
	  }

	  next() {
	    this.reactSwipe.next();
	  }

	  

	
	render() {

		console.log(this.reactSwipe)

		return(
			<div className="container-flex">
				<div className="row">	
					<div id="activity" className="col-12 align-self-center">
						<Stars />

							<ReactSwipe 
										id="reactSwipe"
										className="carousel" 
										swipeOptions={{continuous: true}, 
										{callback:(i,e) =>{this.props.discard();this.props.falsify();this.props.display(false,this.props.tiles[i].image,this.props.tiles[i].instruction)}}}>
							{this.props.tiles.map((el) => (
								<div><Tile image={el.image}
								 contents={this.props.contents}
								 title={el.title}
								 next={()=>this.next}
								 decline={this.props.discard}
								 updater={this.props.updater}
								 clicked={this.props.clicked} 
								 display={this.props.display} 
								 instruction={el.instruction}
								 success={this.props.success}
								 		/></div>))}
						</ReactSwipe>
						
					</div>
				</div>

			</div>

		)
	}
}



export default Activity;

