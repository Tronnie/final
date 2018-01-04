import React from "react";
import "./Login.css";


class Login extends React.Component {



	sayHello(userName) {

		console.log(userName)

	}

	



	render() {


		return(

			<div id="signin">
				
				<div className="login">
					<h3>Sign In</h3>
					<div className="username">
						<label className="modal"><b>Username</b></label>
	   					<input  type="text" placeholder="Enter Username" name="uname" required/>
	   				</div>
					<label className="modal"><b>Password</b></label>
				    <input   type="password" placeholder="Enter Password" name="psw" required/>
				    <br/>

				    <button id="log-btn" type="submit">Login</button>
				</div>
			</div>

			)
		}
	}



export default Login;