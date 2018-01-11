import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import './App.css';
import tiles from './tiles.json';
import Login from "./components/Login";
import Stars from "./components/Stars";
import Register from "./components/Register";

import Footer from "./components/Footer";
import ModalConductor from "./components/ModalConductor";
import Modal from "react-modal";

import axios from "axios";

var x = 5
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			contents: '',
			loggedIn: false,
			modal:    false,
			currentModal: "SIGN_IN",
			numDiscarded: 0,
			users: ['hello world'],
			activities: []
		};

		this.fetchUsers = this.fetchUsers.bind(this);

		this.handleClick = this.handleClick.bind(this);

	}

	state = {
		clicked: false,
		contents: '',
		loggedIn: false,
		modal:    false,
		currentModal: "SIGN_IN",
		numDiscarded: 0,
		users: ['hello world'],
		activities: []
	}

	testFunction() {
    axios.get('http://localhost:7500/api/users')
      .then(res => {
        console.log(res);
      });
    }


	fetchUsers = () => {
		this.testFunction();
	}



  	handleClick() {
    	
    	document.getElementById(x+"-star").checked = true
  		x--

  		if(x < 2){
    	x = 1
  		}
  		console.log(x)
    }

	display = (clicked,img,instructions) => {
		console.log(this.state.clicked)

		if(!clicked) {
				this.setState({contents:<img src={img} alt='hehe no pic for u'/>})
		} else {
				this.setState({contents:<h3>{instructions}<button onClick={this.handleClick}>Done!</button></h3>})
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

 	discardTile =()=> {
 		this.setState({numDiscarded: this.state.numDiscarded +1});
 		console.log(this.state.numDiscarded);
 	}


  render() {
    return (
      <div className="App">
      	<Navbar users={this.fetchUsers} login={this.logIn} openMe={this.openMe} logout={this.logOut} status={this.state.loggedIn} />
      	<ModalConductor isOpen={this.state.modal} closeMe={this.closeMe} currentModal={this.state.currentModal} />
      	<Activity 
      			  tiles={tiles} 
      			  falsify={this.setClickedToFalse}
      			  clicked={this.state.clicked}
      			  contents={this.state.contents}
      			  updater={this.updateClicked}
      			  display={this.display}
      			  success={this.success}
      			  discard={this.discardTile}
      	 /> 
        <Footer/>

      </div>
    );
  }
}

export default App;
