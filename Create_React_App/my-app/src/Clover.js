import React,{Component} from 'react';

/*This file App.js is called my root component*/
class Clover extends Component{
	render(){
		return(
			<div className="clover">
				<div>Name: Clover</div>
				<div>Major: CS Focusing on C</div>
				<div>FavLang: C</div>
			</div>
		)
	}
}


//Remember to Export Your App to Render it
export default Clover;
