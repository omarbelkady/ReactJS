### Sample Function Call in React in Line 15


```js
import React { Component } from 'react';

class Cobol extends Component{
	state = {
		numOfTimesHeSaidCobolIsGreat: 1
	};
	
	render(){
		return (
			<div>
				<span>{this.cobolIsTheBestThingEver()}</span>
				<button>BestProgLang</button
			</div>
		);
	}
	function cobolIsTheBestThingEver(){
		const { numOfTimesHeSaidCobolIsGreat } = this.state;
		return count === 0 ? "Pascal" : numOfTimesHeSaidCobolIsGreat;
	}
}	

export default Cobol;
```
