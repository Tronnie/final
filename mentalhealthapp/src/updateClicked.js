updateClicked = (e) => {
		if (this.state.clicked === false){
			this.setState({clicked: true})
		} else {
			this.setState({clicked: false})
		}
	}

module.exports = updateClicked;