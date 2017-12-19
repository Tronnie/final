import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import './App.css';
import tiles from './tiles.json';

class App extends Component {


	state = {
	

	}

	displayInstructions = (e) => {
		if(this.state.images === '') {
			this.setState({images:'horesy.png'})
		} else {
			this.setState({images:''});
		}

	}







  render() {
    return (
      <div className="App">
      	<Navbar />
      	<Activity tiles={tiles} display={this.displayInstructions} /> 
        
      </div>
    );
  }
}

export default App;
