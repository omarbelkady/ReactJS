import React,{Component} from 'react';

{/*This file App.js is called my root component*/}
class Clover extends Component{
	render(){
		{/*Renders an object into the console will all the different properties that I passed down*/}
		{/*I will change line 15 from <div>Name: Clover</div> to <div>Name: {this.props.name} </div>*/}
		{/*I will change line 16 from <div>Major: CS Focusing on C</div> to <div>Major: {this.props.major} </div>*/}
		{/*I will change line 17 from <div>FavLang: C</div> to <div>FavLang: {this.props.favLang} </div>*/}
		
		//console.log(this.props);
		//I change the above code to below thanks to destructuring
		//And Now Below instead of this.props I change to name major and favLang
		{/*const {name, major, favLang} = this.props;*/}
		//same as saying const clover = this.props.clover
		const {clover} = this.props;
		const cloverList = clover.map(clover =>{
			return (
				<div className="clover" key={clover.id}>
					<div>Name: {clover.name}</div>
					<div>Major: {clover.major}</div>
					<div>FavLang: {clover.favLang}</div>
				</div>
			)
		})

		return(
			<div className="clover-list">
				{cloverList}
			</div>
		)
	}
}


{/*Remember to Export Your App to Render it*/}
export default Clover;
