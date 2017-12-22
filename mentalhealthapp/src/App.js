import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import './App.css';
import tiles from './tiles.json';
// import updater from "./updateClicked.js";

class App extends Component {


	state = {
		clicked: false,
		contents: ''
	}

	display = (clicked,img,instructions) => {
		console.log(this.state.clicked)

		if(!clicked) {
				this.setState({contents:<img src={img} alt='hehe no pic for u'/>})
		} else {
				this.setState({contents:<h3>{instructions}</h3>})
		}

	}

	updateClicked = (e) => {
		if (e === false){
			this.setState({clicked: true})
			console.log(e)
		} else {
			this.setState({clicked: false})
		}
	}

	setClickedToFalse = (e) => {
		if(this.state.clicked===true) this.setState({clicked:false})
	}
	

  render() {
    return (
      <div className="App">
      	<Navbar />
      	<Activity tiles={tiles} falsify={this.setClickedToFalse} clicked={this.state.clicked} contents={this.state.contents} updater={this.updateClicked} display={this.display} /> 
        
      </div>
    );
  }
}

export default App;
