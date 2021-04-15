## Hooks
- A hook is a React Component making a call to a specific function within your application
- Also a hook is a function that lets hop into the State and lifecycle from a functional componet
- Hooks are not operational within a class instead they allow us to use React features without having to create a new class
- Every hook starts with the prefix "use"



### When To Call A Hook
- You only want to call a hook at the very high level. Do not call a hook
	- when it is a function within a function aka a nested function
	- when you are using a conditional
	- within a loop
- Call A hook also from a React functional component NOT from a React regular JS function or a class Based Component




####  The useState Hook
- This hook is used so that it can enable you to have a certain state within your functional component
- The way its used is by passing as an argument the initial state to the function(useState) and it outputs the current state
- However, another function must be present to update the value of the state because you must remember to never update the state directly

####  The useEffect Hook
- This hook is used to perform side effects from a functional component
- This hook is similar to the lifecycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount 
- The useEffect is a postprocess hook meaning run the effect function AFTER you perform the changes to the DOM
- This effect hook has access to the state and props because this hook is declared within the component
- A useEffect is ran after we render to the DOM

#### The useMemo hook
- This hook is used to increase performance in your application
- useMemo is the process of using Memoization
- Memoization is an optimization utility where I pass a complex function in order for it to be memoized
- When using memoization the result is remembered whenever I pass in the same parameters in the future

##### Without memoization
```js
function compute(){
	return 1+1
}
```

##### With Memoization
```js
//now thanks to memoization react is smart enough to not have to perform the calculation it will just output 2
function compute(){
	return 2;
}
```
##### File1 Memo.js
```js
import React,{ useState, useEffect, useMemo } from 'react';

/*

Creating a function which will do data fetching aka make the api call
This function is essentially returning data from the API
*/
const fetchMyData = () =>{
	return Math.random();
}

//function which will use my data
const theHeavyCalc = somedata => {
	//if there is no data exit this function
	if(!somedata){
		return
	}

	console.log('Computing some heavy function with the data', somedata);
	return Math.floor(somedata * 100)
}

export default function Memo(){
	
	const [mycount, setMyCount] = useState(0);
	const [mydata, setmydata] = useState()
	console.log('Here is my app rendered to the dom with the mycount variable', mycount)
	useEffect(()=>{
		/*
		i am getting the data and storing it in the mydata variable
		then I pass mydata to the state
		*/
		const mydata = fetchMyData();
		setmydata(mydata);
	},[])

	//const res = theHeavyCalc(mydata)
	/*
		we should only make the api call only once. Then why do we call the function again and again?
		If we already successfully made a calculation we do not have to perform the calculation again and again.
		The more difficult and complex your calculation is the more time it will take for your application to load
		I want to make the calculation only once when the component is mounted. To solve this problem I use the hook
		useMemo 
		I resplay res variable with the useMemo hook which takes a callback function as an argument
		the second argument should be the dependencies and the first one is the callback
	*/
	const res = useMemo(()=>theHeavyCalc(somedata),[somedata])

	return(
		<div>
			<h1>The Number Counter</h1>
			<p>Counter: {mycount}</p>
			<p>The Result is: {res}</p>
			<button onClick={()=> setMyCount(mycount+1)}>
			Increment
			</button>
		</div>
	)
}
```


##### File2 index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import Memo from './App/Memo';

ReactDOM.render(
  <BrowserRouter>
    <Memo />
  </BrowserRouter>,
  document.getElementById('root')
);

```



#### The useRef Hook

- This hook enables me create references to an element/component

##### File1 index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import Ref1 from './App/Ref1';

ReactDOM.render(
  <BrowserRouter>
    <Ref1 />
  </BrowserRouter>,
  document.getElementById('root')
);

```


##### File2 Ref1.js
```js
import React,{useState} from 'react';

export default function Ref1(){

	const [count, setCount] = useState(0);
	
	/*
	I will use this hook to access the dom element
	The DOM element I will create must be within my div
	*/

	const myCounter = useRef(null)

	const increment = () => {
		setCount(count + 1)
		console.log(myCounter);
	}
	/*
	I have an object with a current key. Thanks to the createRef I can access the current object 
	using Current property. I have this current as a key which enables me 
	to access the span dom element  using current key

	Whenever I want to access the dom elements or its values I use the useRef Hook

	createRef will return a new reference on every render

	useRef however will return the same reference each time
	*/

	return(
		<div>
			Count<span ref={myCounter}>{count}</span>
			<button onClick={increment}>+</button>
		</div>
	)
}

```



## How To Create a Custom Hook.. To tell React this is not a Functional Component, this is a custom hook I prefix the function name with the keyword use
```js
import React,{useState} from "react";

export default function useCustomHook() {

	//iniitalizing numOfOrders to 0. Then the useState function will return the setNumOfOrder to change the value of my initial state(num of Orders) 
	const [numOfOrders, setNumOfOrders] = useState({ num: 0});

	const changeNumOrder= () =>{
		setNumOfOrders({ num: numOfOrders.num + 1});
	}

	return { numOfOrders, changeNumOrder}
}

```

### I goto my effect hook functional component
```js
import React,{useState, useEffect} from "react";
//importing my custom hook
import useCustomHook './useCustomHook';

//my custom hook
const bookOrder = useCustomHook();

export default function EffectHook() {
	return(
		<div>
			<p>You Clicked Me {bookOrder.numOfOrders.num} number of times</p>
			<button onClick={bookOrder.changeNumOrder}>
				Click Here
			</button>
		</div>
	)
}
```