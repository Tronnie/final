import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
      	<Activity />
        
      </div>
    );
  }
}

export default App;
