import React from "react";

const Navbar = (props) => (	
	  <nav id="topthingy" className="navbar navbar-dark bg-dark">
	  
	    <span className="navbar-brand mb-0 h1"><a onClick={props.openMe} href='#'>Log In</a></span>
	     <span className="navbar-brand mb-0 h1"><a onClick={props.openMe} href='#'>Sign Up</a></span>
	      <a onClick={props.users}><h2 className="navbar-brand mb-0 h1">Tracker</h2></a>

	   
	      <h2 className="navbar-brand mb-0 h1">Resources</h2>
	  </nav>
  );

export default Navbar;
