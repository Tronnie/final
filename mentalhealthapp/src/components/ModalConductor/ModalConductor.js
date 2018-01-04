import React from "react";
import "./ModalConductor.css";
import Modal from "react-modal";
import Button from "../Button";
import Login from "../Login";


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


	return(
			<Modal 
				isOpen={props.isOpen}
				style={customStyles}
				contentLabel="Modal"
				>
				<Button onClick={props.closeMe} name="hehe"/>
				<Login currentModal={props.currentModal} />
			</Modal>
		)

};






export default ModalConductor;