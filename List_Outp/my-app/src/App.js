import React,{Component} from 'react';
import Clover from './Clover';

/*This file App.js is called my root component*/
class App extends Component {
	state = {
		clover: [
			{name: "Pintos Lover", major: "C Architecture", favLang: "Pascal", id: 1},
			{name: "Assembly Enthusiast", major: "TSwift", favLang: "Assembly", id: 2},
			{name: "Compilers  Lover", major: "CS With A Focus in SWE", favLang: "Machine Code", id:3},
		]
	}
	render(){
		return (
			<div className="App">
        			<h1>My First React App</h1>
            			<p>Learn to love 746867 like 63526</p>
			{/*	<Clover name= "Pintos Lover" major="C Architecture" favLang="Pascal"/>*/}
			{/*	<Clover name="Assembly Lover" major="Low Level Languages" favLang="Assembly" />*/}
				{/*Instead of having a name Property value of Pintos lover major Property value of C Architechture I will create a state object and pass it in the Clover Component*/}
				<Clover clover = {this.state.clover}/>
			</div>
		);
	}
}

export default App;
