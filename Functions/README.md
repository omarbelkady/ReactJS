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


### Function In JS Structure

```js
function functionName(param1, param2, etc..){
	//func logic goes here
}
```

## Arrow Functions

### Function without Arrow Function

```js
coolfunc = function(){
	return "This is a cool function!";
}
```

### Arrow Function

```js
coolfunc = () => {
	return "This is a cool Arrow Function!";
}

```

- If the function has one statement I can omit:
	
	- the return statement
	- the curly braces

```js
coolfunc = () => "This is a cool Arrow Function!";
```


### Arrow Function With Parameters

```js
coolfunc = (myval) => {
	return "Hi there " + myval;
}
```

- IF the Arrow function has only one parameter I can omit:
	- the parentheses
	- the return statement
```js
coolfunc = myval => "Hi there " + myval;
```


### Important Functions

1. alert() function: outputs data in an alert box in a window
2. confirm() function: opens a yes/no option dialog box and returns a boolean value depending on the user click
3. console.log() function: writes stuff to the browser console
4. document.write() function: writes stuff directly to the HTML doc
5. prompt(): creates a dialogue for user input


### Array Methods

1. concat(): join several arrs into one
2. indexOf(): returns the index of a given element
3. join(): combines the elements into a single string and returns that string
4. lastIndexOf(): outputs the last position at which a given element exists in the array
5. pop(): removes the last element within the array
6. push(): add a new element to the end of the array
7. reverse(): reverse the order of the items in the array
8. shift(): remove the first item in the array
9. slice(): pulls a copy of a portion of the array into a new arr
10. sort(): sort the items in the array alphabetically
11. splice(): adds elements in a specific way and position 
12. toString(): converts the element to Strings aka the renowed Java must know method
13. unshift(): adds a new element to the array at the beginning

### Variables In JS

1. var: cannot be reassigned
2. const: cannot be reassigned and cannot be used before they are declared
3. let: can be reassigned but not redeclared

### 5 Must Know Functions 

1. ... : Spread operator expands an array into its elements
2. filter(): Filter method creates a new array and fills it up with the elements that meet a certain condition
3. map(): similar to filter but is used to modify elements instead
4. reduce(): transform the array into something else i.e. reduce the array into one value 
5. includes(): check if a specified string exists within the array
