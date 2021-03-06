import React from "react";
import "./ModalConductor.css";
import Modal from "react-modal";
import Button from "../Button";
import Login from "../Login";
import Register from "../Register";
import Success from "../Success";


const ModalConductor = (props) => {

	const customStyles = {
		  overlay : {
		    position          : 'fixed',
		    top               : 0,
		    left              : 0,
		    right             : 0,
		    bottom            : 0,
		    backgroundColor   : 'rgba(0, 0, 0, 0.35)'
		  },
		  content : {
		    position                   : 'absolute',
		    width                      : '40%',
		    height                     : '50%',
		    top                        : '20%',
		    left                       : '35%',
		    right                      : '40px',
		    bottom                     : '40px',
		    border                     : '1px solid #ccc',
		    background                 : '#fff',
		    overflow                   : 'auto',
		    WebkitOverflowScrolling    : 'touch',
		    borderRadius               : '4px',
		    outline                    : 'none',
		    padding                    : '20px'
		 
		  }
	};

		switch (props.currentModal) {

			case "SIGN_IN":
				return( <Modal 
					isOpen={props.isOpen}
					style={customStyles}
					contentLabel="Modal"
					>
					<h3>User Login</h3>
					<Login currentModal={props.currentModal} />
					
					<div id="cancel">
						<Button onClick={props.closeMe} name="Cancel"/>
					</div>
				</Modal>);
				break;

			case "SIGN_UP":
				return( <Modal 
					isOpen={props.isOpen}
					style={customStyles}
					contentLabel="Modal"
					>
					<h3>Register as User</h3>
					<Register currentModal={props.currentModal} />
					
					<div id="cancel">
						<Button onClick={props.closeMe} name="Cancel"/>
					</div>
				</Modal>);
				break;

			// case "Tracker":
			// 	return( <Modal 
			// 		isOpen={props.isOpen}
			// 		style={customStyles}
			// 		contentLabel="Modal"
			// 		>
			// 		<h3>Track User Activities</h3>
			// 		<Register currentModal={props.currentModal} />
					
			// 		<div id="cancel">
			// 			<Button onClick={props.closeMe} name="Cancel"/>
			// 		</div>
			// 	</Modal>);
			// 	break;

			// 	case "Resources":
			// 	return( <Modal 
			// 		isOpen={props.isOpen}
			// 		style={customStyles}
			// 		contentLabel="Modal"
			// 		>
			// 		<h3>Resource Links</h3>
			// 		<Register currentModal={props.currentModal} />
					
			// 		<div id="cancel">
			// 			<Button onClick={props.closeMe} name="Cancel"/>
			// 		</div>
			// 	</Modal>);
			// 	break;



				
			case "SUCCESS":
				return(<Modal 
					isOpen={props.isOpen}
					style={customStyles}
					contentLabel="Modal"
					>
					<Success />
					<div id="done">
						<Button onClick={props.closeMe} name="DONE"/>
					</div>
				</Modal>)
				break;

			default:
				break;



		}
//use:
//login
//register
//tracker
//resources













	// return(
	// 		<Modal 
	// 			isOpen={props.isOpen}
	// 			style={customStyles}
	// 			contentLabel="Modal"
	// 			>
	// 			<Login currentModal={props.currentModal} />
	// 			<div id="cancel">
	// 				<Button onClick={props.closeMe} name="Cancel"/>
	// 			</div>
	// 		</Modal>
	// 	)

};






export default ModalConductor;