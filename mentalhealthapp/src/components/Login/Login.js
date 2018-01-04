import React from "react";
import "./Login.css";


class Login extends React.Component {



	sayHello(userName) {

		console.log(userName)

	}

	



	render() {


		return(

			<div>
				
				<div className="login">
					<label className="modal"><b>Username</b></label>
   					<input  type="text" placeholder="Enter Username" name="uname" require/>
					<label className="modal"><b>Password</b></label>
				    <input   type="password" placeholder="Enter Password" name="psw" required/>

				    <button type="submit">Login</button>
				    <input type="checkbox" checked="checked"/>
				</div>
			</div>

			)
		}
	}



export default Login;