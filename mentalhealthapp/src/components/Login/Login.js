// import React from "react";
// import "./Login.css";


// class Login extends React.Component {



// 	sayHello(userName) {

// 		console.log(userName)

// 	}

	



// 	render() {


// 		return(

// 			<div>
				
// 				<div className="login">
// 					<label className="modal"><b>Username</b></label>
//    					<input  type="text" placeholder="Enter Username" name="uname" require/>
// 					<label className="modal"><b>Password</b></label>
// 				    <input   type="password" placeholder="Enter Password" name="psw" required/>

// 				    <button type="submit">Login</button>
// 				    <input type="checkbox" checked="checked"/>
// 				</div>
// 			</div>

// 			)
// 		}
// 	}



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