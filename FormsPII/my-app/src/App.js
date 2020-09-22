import React,{Component} from 'react';
import Clover from './Clover';
import AddClover from './AddClover';

/*StateLess Components Info:
 *a) Also Called UI Components
 *b) Receive their data from Props and they pass the down to UI Components  as properties
 *c) Only are concerned With the UI
 *d) UI Components do not have state of their own
 *e) We use functions to create these UI Components as opposed to classes
 * */

/*Theory In Practice
 *The Root Components is always at the top of the hierarchy which in our case in App.js and is the container
 *The Root Components go fetch its data from a DB via a lifecycle hook and then stores it in the State
 * Then the data is passed as a property to the UI Component/Functional Component
 * The Clover get its data from Props(App.js) container component. The Clover doesnt need sate
 * It is also possible to nest containers within Containers that is absolutely fine
 * */

/*2 Types of Components: Containers(have state) and UI Components(do not have state)
 *
 * */



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
				<Clover clover = {this.state.clover}/>
				<AddClover />
			</div>
		);
	}
}

export default App;
