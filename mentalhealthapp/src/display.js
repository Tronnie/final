 function display(clicked,img,instructions) => {
		console.log('Hello')
		console.log(this.state.clicked)

		if(!clicked) {
			return(
				<img src={img} alt='hehe no pic for u'/>
			)
		} else {
			return(
				<h3>{instructions}</h3>
			)
		}

	}