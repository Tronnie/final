// import React from "react";
// import "./Login.css";


// class Login extends React.Component {



// 	sayHello(userName) {

// 		console.log(userName)

// 	}

	



// 	render() {


// // 		return(

// 			<div id="signin">
				
// 				<div className="login">
// 					<h3>Sign In</h3>
// 					<div className="username">
// 						<label className="modal"><b>Username</b></label>
// 	   					<input  type="text" placeholder="Enter Username" name="uname" required/>
// 	   				</div>
// 					<label className="modal"><b>Password</b></label>
// 				    <input   type="password" placeholder="Enter Password" name="psw" required/>
// 				    <br/>

// 				    <button id="log-btn" type="submit">Login</button>
// 				</div>
// 			</div>


import React from "react"
import "./Login.css";

class Login extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onLogin } = this.props;
		return (
			<div className="container">
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onLogin({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}
				>
					<input ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' />
					<input ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' />
					<button
						className="btn btn-default"
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default Login