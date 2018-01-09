import React from "react";

const Navbar = (props) => (	
	  <nav id="topthingy" className="navbar navbar-dark bg-dark">
	  
	    <span className="navbar-brand mb-0 h1"><a onClick={props.openMe} href='#'>Log In</a></span>
	      <h2 onClick={props.users} className="navbar-brand mb-0 h1">Tracker</h2>
	      <h2 className="navbar-brand mb-0 h1">Resources</h2>
	  </nav>
  );

export default Navbar;
