import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import './App.css';

class App extends Component {


	state = {

		titles:'',
		images:'horesy.png',
		instructions:'Make Guacamole!!!!'

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
      	<Activity titles={this.state.titles} images={this.state.images} instructions={this.state.instructions} display={this.displayInstructions} /> 
        
      </div>
    );
  }
}

export default App;
