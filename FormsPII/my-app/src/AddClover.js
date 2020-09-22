import React, {Component} from 'react';

class AddClover extends Component{
	state = {
		name: null,
		major: null,
		favLang: null
	}
	/*function which will fire when one of the input fields gets updated and I put the value I want to update it with*/
	handleChange= (e)=>{
		this.setState({
			/*e is the event object. target is the target element of whichever target element we are entering into and value is the text value within the input field.*/
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		console.log(this.state);
	}

	render(){
		return(
			<div>
			{/*Capturing both events of the user when he clicks the submit button and when he presses enter*/}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name</label>
			{/*I must create a function which will fire everytime one of three input fields changes which will update the state to store what the user will input in the fields*/}
					<input type="text" id="name" onChange={this.handleChange}/>
					
					
					<label htmlFor="name">Major</label>
					<input type="text" id="major" onChange={this.handleChange}/>

					
					<label htmlFor="name">Favorite Programming Language:</label>
					<input type="text" id="favLang" onChange={this.handleChange}/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddClover;
