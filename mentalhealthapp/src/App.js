import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import './App.css';
import tiles from './tiles.json';
import Login from "./components/Login";
import ModalConductor from "./components/ModalConductor";
import Modal from "react-modal";


class App extends Component {


	state = {
		clicked: false,
		contents: '',
		loggedIn: false,
		modal:    false,
		currentModal: "SIGN_IN"
	}

	display = (clicked,img,instructions) => {
		console.log(this.state.clicked)

		if(!clicked) {
				this.setState({contents:<img src={img} alt='hehe no pic for u'/>})
		} else {
				this.setState({contents:<h3>{instructions}</h3>})
		}

	}

	success = () => {
		this.setState({currentModal:"SUCCESS"})
	}

	closeMe =()=>{
		this.setState({modal:false})
	}

	openMe =() => {
		this.setState({modal:true})
	}

	logIn = () => {

		if (this.state.loggedIn === false) {
			this.setState({loggedIn: true})
		}

	}

	logOut = () => {

		if (this.state.loggedIn === true) {
			this.setState({loggedIn: false})
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
	
	componentWillMount() {
    Modal.setAppElement('body');
 	}


  render() {
    return (
      <div className="App">
      	<Navbar login={this.logIn} openMe={this.openMe} logout={this.logOut} status={this.state.loggedIn} />
      	<ModalConductor isOpen={this.state.modal} closeMe={this.closeMe} currentModal={this.state.currentModal} />
      	<Activity 
      			  tiles={tiles} 
      			  falsify={this.setClickedToFalse}
      			  clicked={this.state.clicked}
      			  contents={this.state.contents}
      			  updater={this.updateClicked}
      			  display={this.display}
      			  success={this.success}
      	 /> 
        
      </div>
    );
  }
}

export default App;
