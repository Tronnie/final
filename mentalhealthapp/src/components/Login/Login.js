
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


//mongoose
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


//SQL-sequelize
// import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// =import DropDownMenu from 'material-ui/DropDownMenu';
// =import MenuItem from 'material-ui/MenuItem';
// =var apiBaseUrl = "http://localhost:3000/api/";
// =mport axios from 'axios';
// =import UploadScreen from './UploadScreen';
// =import UploadPage from './UploadPage';
//  class Login extends Component {
//   constructor(props){
//     super(props);

//=     var localloginComponent=[];
//=    localloginComponent.push(
//=       <MuiThemeProvider>
//=         <div>
//=          <TextField
//=            hintText="Enter username"
//=            floatingLabelText="User Id"
//=            onChange = {(event,newValue) => this.setState({username:newValue})}
//=            />
//=          <br/>
//=            <TextField
//=              type="password"
//=              hintText="Enter your Password"
//=             floatingLabelText="Password"
//=              onChange = {(event,newValue) => this.setState({password:newValue})}
//=              />
//=            <br/>
//=            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
//=        </div>
//=       </MuiThemeProvider>
//=     )
//     this.state={
//       username:'',
//       password:'',
//=      menuValue:1,
//=       loginComponent:localloginComponent,
//=      loginRole:'student'
//   }
//  }
//=   componentWillMount(){
//=   // console.log("willmount prop values",this.props);
//=   if(this.props.role != undefined){
//=     if(this.props.role == 'student'){
//=       console.log("in student componentWillMount");
//=       var localloginComponent=[];
//=      localloginComponent.push(
//=         <MuiThemeProvider>
//=           <div>
//=            <TextField
//=             hintText="Enter your College Rollno"
//=              floatingLabelText="Student Id"
//=              onChange = {(event,newValue) => this.setState({username:newValue})}
//=              />
//=           <br/>
//=             <TextField
//=                type="password"
//=                hintText="Enter your Password"
//=                floatingLabelText="Password"
//=                onChange = {(event,newValue) => this.setState({password:newValue})}
//=                />
//=              <br/>
//=              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
//=          </div>
//=          </MuiThemeProvider>
//=       )
//=       this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
//=     }
//=     else if(this.props.role == 'teacher'){
//=       console.log("in teacher componentWillMount");
//=      var localloginComponent=[];
//=       localloginComponent.push(
//=         <MuiThemeProvider>
//=           <div>
//=            <TextField
//=              hintText="Enter your College Rollno"
//=              floatingLabelText="Teacher Id"
//=              onChange = {(event,newValue) => this.setState({username:newValue})}
//=              />
//=            <br/>
//=              <TextField
//=               type="password"
//=                hintText="Enter your Password"
//=                floatingLabelText="Password"
//=                onChange = {(event,newValue) => this.setState({password:newValue})}
//=                />
//=              <br/>
//=              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
//=          </div>
//=          </MuiThemeProvider>
//=       )
//=       this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'teacher'})
//=     }
//=   }
//=   }

//   handleClick(event){
//	 var apiBaseUrl = "http://localhost:4000/api/";
//     var self = this;
//     var payload={
//       "userid":this.state.username,
// 	    "password":this.state.password,
//=       "role":this.state.loginRole
//     }
//     axios.post(apiBaseUrl+'login', payload)
//    .then(function (response) {
//      console.log(response);
//      if(response.data.code == 200){
//        console.log("Login successful");
//        var uploadScreen=[];
//        uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
//        self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//      }
//      else if(response.data.code == 204){
//        console.log("Username password do not match");
//        alert(response.data.success)
//      }
//      else{
//        console.log("Username does not exists");
//        alert("Username does not exist");
//      }
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//   }

//   handleMenuChange(value){
//     console.log("menuvalue",value);
//     var loginRole;
//     if(value==1){
//       var localloginComponent=[];
//       loginRole='student';
//       localloginComponent.push(
//         <MuiThemeProvider>
//           <div>
//            <TextField
//              hintText="Enter your College Rollno"
//              floatingLabelText="Student Id"
//              onChange = {(event,newValue) => this.setState({username:newValue})}
//              />
//            <br/>
//              <TextField
//                type="password"
//                hintText="Enter your Password"
//                floatingLabelText="Password"
//                onChange = {(event,newValue) => this.setState({password:newValue})}
//                />
//              <br/>
//              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
//          </div>
//          </MuiThemeProvider>
//       )
//     }
//     else if(value == 2){
//       var localloginComponent=[];
//       loginRole='teacher';
//       localloginComponent.push(
//         <MuiThemeProvider>
//           <div>
//            <TextField
//              hintText="Enter your College Rollno"
//              floatingLabelText="Teacher Id"
//              onChange = {(event,newValue) => this.setState({username:newValue})}
//              />
//            <br/>
//              <TextField
//                type="password"
//                hintText="Enter your Password"
//                floatingLabelText="Password"
//                onChange = {(event,newValue) => this.setState({password:newValue})}
//                />
//              <br/>
//              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
//          </div>
//          </MuiThemeProvider>
//       )
//     }
//     this.setState({menuValue:value,
//                    loginComponent:localloginComponent,
//                    loginRole:loginRole})
//   }
//   render() {
//     return (
//       <div>
//         <MuiThemeProvider>
//         <AppBar
//              title="Login"
//            />
//         </MuiThemeProvider>
//         <MuiThemeProvider>
//         <div>
//         <p>Login as:</p>
//         <DropDownMenu value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
//           <MenuItem value={1} primaryText="Student" />
//           <MenuItem value={2} primaryText="Teacher" />
//         </DropDownMenu>
//         </div>
//         </MuiThemeProvider>
//         {this.state.loginComponent}
//       </div>
//     );
//   }
// }

// const style = {
//   margin: 15,
// };

// export default Login;