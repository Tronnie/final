import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Stars from "./components/stars";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
        <h1> APP GOES HERE </h1>
        <Stars />
      </div>
    );
  }
}

export default App;
