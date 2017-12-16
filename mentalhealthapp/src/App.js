import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
        <h1> APP GOES HERE </h1>
      </div>
    );
  }
}

export default App;
