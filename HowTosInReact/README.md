
  

Q. Create a multilevel dropdown menu in React?

Input:

  

```js

[

{

label: "Menu 1",

},

{

label: "Menu 2",

submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],

},

{

label: "Menu 3",

submenu: [

{ label: "Sub Menu 1" },

{ label: "Sub Menu 2" },

{ label: "Sub Menu 3" },

{ label: "Sub Menu 4" },

],

},

{

label: "Menu 4",

submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],

},

];

```

  
  


Q. Create a functional component that displays data from https://reqres.in/api/users?



```js
import  React, { useEffect, useState } from  "react";
import  axios  from  "axios";

export  default  function  App() {
const [users, setUsers] = useState([]);

useEffect(() => {
	axios.get("https://reqres.in/api/users?page=1").then((response) => {
	setUsers(response.data.data);
});

}, []);
  

	return (
		<div>
			<ul>
				{users.map((user) => (
					<li  key={user.id}>
						{user.first_name}  {user.last_name}
					</li>
				))}
			</ul>
		</div>
	);
}

  

```

  
  

Q. Write a program to display searched keyword in React?

Answer

  

```js
function  App() {	
	const [search, setSearch] = useState("");

	
	return (

	<div className="App">
	<h2>Update Data from an input</h2>

		<div className="input-display">
			Seached Keyword: <b>{search}</b>
		</div>

	  

		<div className="inputs">
			<input
			className="input"
			type="text"
			value={search}
			placeholder="Seach Here"
			onChange={(e) =>  setSearch(e.target.value)}
			/>

		</div>
	</div>

	);
}
```

  
  


  
  

Q. Create a functional component to show an alert message based on user input?

Answer

  

```js

function  App() {

const [phrase, setPhrase] = useState("");

  

if (phrase === "Hello React") {

alert("You may pass!");

}

  

return (

<div  className="App">

<h2>What's the secret phrase?</h2>

  

<input

type="text"

value={phrase}

onChange={(e) =>  setPhrase(e.target.value)}

placeholder="Enter a secret"

/>

  

<p>

Hint: It's <strong>Hello React</strong>

</p>

</div>

);

}

  

```

  
  

Q. Create a functional component in react to add two numbers?

Answer

  
  

```js
function  App() {
	const [number1, setNumber1] = useState();
	const [number2, setNumber2] = useState();
	const [total, setTotal] = useState(number1 + number2);

	function  calculateTotal() {
		setTotal(number1 + number2);
	}

	return (
		<div  className="App">
			<h1>Adding Two Numbers</h1>
			<div>

				<input
					type="number"
					value={number1}
					onChange={(e) =>  setNumber1(+e.target.value)}
				/>
				<input
					type="number"
					value={number2}
					onChange={(e) =>  setNumber2(+e.target.value)}
				/>
			</div>
			<button  onClick={calculateTotal}>Add Them!</button>
			<h2>Total: {total}</h2>
		</div>
	);
}
```

  

  
  

Q. Create a simple counter in react?

Answer

```js
const  App = () => {
const [counter, setCounter] = useState(0);

const  handleClick = (type) => {
type === "increment" ? setCounter(counter + 1) : setCounter(counter - 1);
};

	return (
		<div>

			<h2>Counter: {counter}</h2>
				<div  className="buttons">
					<button  onClick={() => handleClick("increment")}>Increment</button>

					<button  onClick={() =>  handleClick("decrement")}>Decrement</button>
				</div>
		</div>

		);
};
```

  


Q. Write a program to pass values to child using context in React?

Answer

  

```js
// Counter.js

const { useState, createContext } = React;
const  CountContext = createContext();

const  Counter = () => {
const { count, increase, decrease } = useContext(CountContext);
	return (
		<h2>
			<button  onClick={decrease}>Decrement</button>
			<span  className="count">{count}</span>
			<button  onClick={increase}>Increment</button>
		</h2>
	);
};
```

  

```js
// App.js
const  App = () => {
	const [count, setCount] = useState(0);

	const  increase = () => {
	setCount(count + 1);
};

	const  decrease = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<CountContext.Provider  value={{ count, increase, decrease }}>
				<Counter />
			</CountContext.Provider>
		</div>
	);

};

```
  
  
Q. Create a ToDo list app using React?

Answer

  

```js
class  App  extends  Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: "",
			list: []
		};
	}

	// Set a user input value
	updateInput(value) {
		this.setState({
			userInput: value
		});
	}
 
	// Add item if user input in not empty
	addItem() {
		if (this.state.userInput !== "") {
			const  userInput = {
			// Add a random id which is used to delete
			id: Math.random(),
			// Add a user value to list
			value: this.state.userInput
		};  
		// Update list
		const  list = [...this.state.list];
		list.push(userInput);

		// reset state
		this.setState({
			list,
			userInput: ""
		});

	}
}

  

// Function to delete item from list use id to delete
	deleteItem(key) {
		const  list = [...this.state.list];
		// Filter values and leave value which we need to delete
		const  updateList = list.filter((item) =>  item.id !== key);
		// Update list in state

		this.setState({
			list: updateList
		});
	}

  

	render() {
		return (
			<>
			<h1>TODO LIST</h1>
			<div>
				<input
				type="text"
				placeholder="add item . . . "
				value={this.state.userInput}
				onChange={(item) =>  this.updateInput(item.target.value)}
				/>

				<input 
				type="button" 
				onClick={() =>  this.addItem()}  value="ADD"
				/>
			</div>
			<div>
				<ul>
					{/* map over and print items */}
					{this.state.list.map((item) => {
						return (
						<li  key={item.id}  onClick={() =>  this.deleteItem(item.id)}>
					{item.value}

						</li>
					);
					})}
				</ul>
			</div>

			</>
		);
	}
}

```


Q. Create a search filter component in react?

  

Input:

```js
const  people = [
"Amanda Tang",
"Arturo Scott",
"Gregory Herring",
"Jackson Winters",
"Karlee Stout",
"Kylee Hobbs",
"Lance Stokes",
"Liana Young",
"Mitchell Roberts",
"Selena Douglas"];
```
  

Answer

  

```js

import { useEffect, useState } from  "react";

function  App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const  handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

  

	useEffect(() => {
		const  results = people.filter((person) =>
		person.toLowerCase().includes(searchTerm.toLowerCase())
	);
		setSearchResults(results);
	}, [searchTerm]);


	return (
		<div className="App">
			<input
			type="text"
			placeholder="Search"
			value={searchTerm}
			onChange={handleChange}
			/>
			<ul>
				{searchResults.map((item) => (
				<li>{item}</li>
				))}
			</ul>
		</div>
	);
}

```

  

Q. Create a Fizz Buzz program in React?

Counting incrementally, replacing any number divisible by three with the word "fizz",

and any number divisible by five with the word "buzz".

  
  

```js

class  FizzBuzz  extends  Component {
	state = {
		count: 1
	};
  
	handleDecrement = () => {
		if (this.state.count > 1) {
			this.setState((prevState) => ({ count: prevState.count - 1 }));
		}
	};

  

	handleIncrement = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};
  
	render() {
		return (
			<div>
				<h1> React Fizz Buzz </h1>
				<p> Counting incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word
	"buzz". </p>

			 <h2>{this.state.count % 15 === 0 ? "FizzBuzz": this.state.count % 3 === 0 ? "Fizz" : this.state.count % 5 === 0 ? "Buzz" : this.state.count} </h2>

				<button onClick={this.handleDecrement}> - </button>
				<button  onClick={this.handleIncrement}> + </button>
			</div>

		);
	}
}
```
  

Q. Write a program to call child method from parent in React?
Answer

  

1. Using React.forwardRef():

```js
import { forwardRef, useRef, useImperativeHandle } from  "react";
const  Child = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		getMessage() {
			alert("Message from Child");
		}
	}));
	return <h1>Child Component</h1>;
});
```

  
  

```js
const  Parent = () => {
	const  childRef = useRef(); 
	return (
		<div>
			<Child  ref={childRef} />
			<button  onClick={() =>  childRef.current.getMessage()}>Click</button>
		</div>
	);
};
```

  

2. Using Class Component:

  

```js
class  Parent  extends  Component {
	constructor(props) {
		super(props);
		this.child = createRef();
	}

	onClick = () => {
		this.child.current.getMessage();
	};

	render() {
		return (
			<div>
				<Child  ref={this.child} />
				<button  onClick={this.onClick}>Click</button>
			</div>
		);
	}
}
```

  

```js
class  Child  extends  Component {
	getMessage() {
		alert("Message from Child");
	} 
	render() {
		return <h1>Child Component</h1>;
	}
}
```

  
  
  

3. Using callback Ref API:

  

```js

class  Parent  extends  Component {
	render() {
		return (
			<div>
				<Child  ref={(instance) => { this.child = instance; }} />
				<button  onClick={() => { this.child.getMessage(); }} >Click</button>
			</div>
		);
	}

```

  

```js
class  Child  extends  Component {
	getMessage() {
		alert("Message from Child");
	}

	render() {
		return <h2>Child Component</h2>;
	}
}
```

  

  

Q. Write a program to show and hide element in React?

  

Answer

  

```js
import {useState} from  "react";
export  default  function  App() { 
	const [show, toggleShow] = useState(true);
	  return (
		<div>
			<button  onClick={() =>  toggleShow(!show)}> Toggle: {show ? "Show" : "Hide"} </button> {show && <h2>Hello World!</h2>}
		</div>
	);
}
```

  

Q. How to update the parent state in React?

Answer

Using function as a Prop:

  

```js

class  Parent  extends  Component {
	state = {
		text: "Click Me !"
	};

	// Function to update state
	handleUpdate = (newState) => {
		this.setState({ text: newState });
	};
  
	render() {
		return (
			<div>
				<Child
				text={this.state.text}
				// Passing a function to child
				updateState={this.handleUpdate}
				></Child>
			</div>
		);
	}
}
```

  

```js

class  Child  extends  Component {
	render() {
		return (
			<button
			// Using parent props to update parent state
			onClick={() =>  this.props.updateState("Parent State Changed")}
			>
				{this.props.text}
			</button>
		);
	}
}
```

  

Q. How do I reference a local image in React?

Answer

  

```js

import  React, { Component } from  "react";
import  logo  from  "./react_photo-goose.jpg";

export  default  class  Header  extends  Component {

	render() {
		return (
			<div  className="row">
				<div  className="logo">
					<img  src={logo}  width="100%"  alt="Googe Pic" />
				</div>
			</div>
		);
	}
}
```


Q. How to access a child state in React?

  

Answer

Using createRef():

  
```js

import  React, { createRef } from  "react"

export  default  class  App  extends  Component {
	constructor(props) {
		super(props);
		this.ChildElement = createRef();
	}
	handleClick = () => {
		const  childelement = this.ChildElement.current;
		alert("Current state of child is: " + childelement.state.name);

	};
	render() {
		return (
			<div>
				<Child  ref={this.ChildElement} /
				<h2>Access child state from parent component</h2>
				<button  onClick={this.handleClick}> CLICK ME </button>
			</div>

		);
	}
}
//stopped here
```

  

```js

class  Child  extends  Component {
	state = {
		name: "Hello React"
	};

	render() {
		return <></>;
	}
}
```


Q. How to access custom attributes from event object in React?

  

event.target.getAttribute:

  

```js
export  default  class  Header  extends  Component {	
	handleClick(event) {
		console.log(event.target.getAttribute("name"));
	}

	render() {
		return (
			<h2 name="Header" onClick={this.handleClick}>CLICK ME !</h2>
		);
	}
}
```

  
  

Q. How to update state on props change in React?

  
  

// Counter.js

  

```js

const  Counter = (props) => {
return (

<div>

<button  onClick={props.handleClick}>CLICK ME</button>

<h1>{props.text}</h1>

</div>

);

};

```

  

// App.js

```js

class  App  extends  Component {

constructor() {

super();

this.state = {

count: 1

};

this.handleClick = this.handleClick.bind(this);

}

  

handleClick() {

this.setState({

count: this.state.count + 1

});

}

render() {

return (

<div>

<Counter  handleClick={this.handleClick}  text={this.state.count} />

</div>

);

}

}

```

  

Q. Write a program to delete an item from array in React?

Answer

  

```js

const  userData = [

{ id: "101", name: "Ken Jackson" },

{ id: "102", name: "Richard Smith" },

{ id: "103", name: "Samantha McCarthy" },

{ id: "104", name: "Jason Lee" },

{ id: "105", name: "Amanda Tang" }

];

  

export  default  class  ListComponent  extends  Component {

constructor(props) {

super(props);

this.state = {

users: userData

};

}

  

onDeleteByIndex(index) {

this.setState({

users: this.state.users.filter((item, i) =>  i !== index)

});

}

  

render() {

return (

<div>

<h2> Delete an item from state array </h2>

<ul>

{this.state.users.map((item, index) => (

<li  key={item.id}>

<input

type="button"

value="Delete"

onClick={() =>  this.onDeleteByIndex(index)}

/>

<span>{item.name}</span>

</li>

))}

</ul>

</div>

);

}

}

```

  

Q. How to pass bearer token with axios

Autherization token in axios:

  

```js

const  api = 'your api';

const  user = JSON.parse(sessionStorage.getItem('data'));

const  token = user.data.id; /*take only token and save in token variable*/

  

axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })

.then(res  => {

console.log(res.data);

.catch((error) => {

console.log(error)

});

  

```

  
  

Q. Pass props in Link react-router

render props:

  

```js

import { Link, BrowserRouter  as  Router, Route, Switch } from  "react-router-dom";

  

const  IndexPage = () => {

return <h2>Home Page</h2>;

};

  

const  PropsPage = ({ title }) => {

return <h2>{title}</h2>;

};

  

const  App = () => {

return (

<section  className="App">

<Router>

<Link  to="/">Home</Link> |

<Link  to="/props-through-component">Props through component</Link> |

<Link  to="/props-through-render">Props through render</Link> |

<Switch>

<Route  exact  path="/"  component={IndexPage} />

<Route

exact

path="/props-through-component"

component={() => <PropsPage  title={`Props through component`} />}

/>

<Route

exact

path="/props-through-render"

render={(props) => (

<PropsPage  {...props}  title={`Props through render`} />

)}

/>

</Switch>

</Router>

</section>

);

}

```


  

Q. How to disable a button when an input is empty?

  

```js

class  App  extends  Component {

state = {

email: ""

};

  

handleChange = (e) => {

this.setState({

email: e.target.value

});

};

  

render() {

return (

<div>

<input

placeholder="Email"

value={this.state.email}

onChange={this.handleChange}

/>

<button  disabled={this.state.email.length < 1}>Submit</button>

</div>

);

}

}

```

  

Q. Update style of a component onScroll in React.js

  

```js

import  React, { useState, useRef } from  "react";

  

export  default  function  App() {

  

const  prevScrollY = useRef(0);

const [goingUp, setGoingUp] = useState(false);

  

const  onScroll = (e) => {

const  currentScrollY = e.target.scrollTop;

if (prevScrollY.current < currentScrollY && goingUp) {

setGoingUp(false);

}

if (prevScrollY.current > currentScrollY && !goingUp) {

setGoingUp(true);

}

prevScrollY.current = currentScrollY;

console.log(goingUp, currentScrollY);

};

  

return (

<div  onScroll={onScroll}  style={{ height: 300, overflowY: "scroll" }}>

{Array(50)

.fill("Get the scroll position on scroll in react.")

.map((f, i) => {

return <p  key={i}>{f}</p>;

})}

</div>

);

}

```

  

Q. How to generate unique IDs for form labels in React?

  

Functional Components through Hooks:

```js

import  React, { useState } from  "react";

import  _uniqueId  from  "lodash/uniqueId";

  

export  default  function  App() {

// id will be set once when the component initially renders, but never again

// (unless you assigned and called the second argument of the tuple)

const [id] = useState(_uniqueId("prefix-"));

return (

<div>

<input  id={id}  type="checkbox" />

<label  htmlFor={id}>label</label>

</div>

);

}

  

```

  
  

Class Components:

```js

import  React, Component  from  "react";

import  _uniqueId  from  "lodash/uniqueId";

  

export  default  class  App  extends  Component {

constructor(props) {

super(props);

this.id = _uniqueId("prefix-");

}

  

render() {

const  id = this.id;

return (

<div>

<input  id={id}  type="checkbox" />

<label  htmlFor={id}>label</label>

</div>

);

}

}

```

 

Q. How can one tell the version of React running at runtime in the browser?

React.version:

  

```js

import  React  from  "react";

  

const  REACT_VERSION = React.version;

  

export  default  function  App() {

return (

<div  className="App">

<h1>React version: {REACT_VERSION}</h1>

</div>

);

}

```

  

Q. Update React component every second

  

```js

class  TimeComponent  extends  Component {

constructor(props) {

super(props);

this.state = { time: Date() };

}

componentDidMount() {

this.interval = setInterval(() =>  this.setState({ time: Date() }), 1000);

}

componentWillUnmount() {

clearInterval(this.interval);

}

  

render() {

return <h3>Current Time: {this.state.time} </h3>;

}

}

```


  

Q. How to declare a global variable in React?

Window Object:

  

```js

window.$name = "Hello React"; // global variable

  

export  default  function  App() {

// access global variable

const  name = window.$name;

  

return (

<div  className="App">

<h2>Global variable using window object</h2>

<h3>{name}</h3>

</div>

);

}

```

  


Q. Instance vs state variables in React

  
  

```js

/**

* If you use class variable, React will be unaware

* of it and won't re-render your component.

*

**/

  
  

export  default  class  Test  extends  Component {

  

constructor() {

super();

this.value = 10; // class variable

this.state = { value: 20 }; // state variable

}

  

render() {

return (

<>

<h3>Class Variable: {this.value}</h3>

<h3>State Variable: {this.state.value}</h3>

</>

);

}

}

```


  

Q. How to create dynamic href in react render function?

  

```js

const  posts = [

{ id: 10, title: "Link One" },

{ id: 20, title: "Link Two" },

{ id: 30, title: "Link Three" }

];

  

export  default  function  App() {

return (

<ul>

{posts.map(function (post) {

return (

<li  key={post.id}>

<a  href={"/posts/" + post.id}>{post.title}</a>

</li>

);

})}

</ul>

);

}

```


  

Q. How to toggle boolean state of react component?

  
  

```js

function  App() {

const [state, setState] = useState(true);

  

function  toggle() {

setState(!state);

}

  

return (

<div  className="App">

<h2  onClick={toggle}>

<p>Do you feel good today?</p>

<div  className="toggle">

{state ? (

<span  role="img"  aria-label="Thums Up">

Yes! 👍

</span>

) : (

<span  role="img"  aria-label="Thums Down">

No! 👎

</span>

)}

</div>

</h2>

</div>

);

}

```

  

  

Q. Dynamically add child components in React

```js

// Parent.js

  
  

export  default  class  Parent  extends  Component {

render() {

return (

<>

<h1> Parent Component! </h1>

{this.props.children}

</>

);

}

}

```

  

```js

// Child.js

  

export  default  class  Child  extends  Component {

render() {

return (

<>

<h2> Child Component! </h2>

</>

);

}

}

```

  

```js

// index.js

  

import  Parent  from  "./Parent";

import  Child  from  "./Child";

  

const  rootElement = document.getElementById("root");

ReactDOM.render(

<StrictMode>

<Parent>

<Child  name="Child Component Props" />

</Parent>

</StrictMode>,

rootElement

);

```

  

Q. Disable back button in react navigation

  

```js

// App.js

  

import  React, {Component} from  "react";

import { Redirect, Switch, Route, withRouter } from  "react-router";

  

import  Page1  from  "./Page1";

import  Page2  from  "./Page2";

import  Page3  from  "./Page3";

  

class  App  extends  Component {

constructor(props) {

super(props);

  

// Store the previous pathname

this.currentPathname = null;

}

  

componentDidMount() {

const { history } = this.props;

  

history.listen((newLocation, action) => {

if (action === "PUSH") {

if (newLocation.pathname !== this.currentPathname) {

// Save new location

this.currentPathname = newLocation.pathname;

  

// Clone location object and push it to history

history.push({

pathname: newLocation.pathname

});

}

} else {

// Send user back if they try to navigate back

history.go(1);

}

});

}

  

render() {

return (

<Switch>

<Route  exact  path="/"  render={() => <Redirect  to="/page1" />} />

<Route  path="/page1"  component={Page1} />

<Route  path="/page2"  component={Page2} />

<Route  path="/page3"  component={Page3} />

</Switch>

);

}

}

  

export  default  withRouter(App);

```

  
  

// Page1.js

```js

import  React  from  "react";

import { withRouter } from  "react-router";

  

class  Page1  extends  Component {

render() {

const { history } = this.props;

  

return (

<div>

<h2>This is the first page.</h2>

<br />

<button

onClick={() => {

history.push("/page2");

}}

>

Go to Page 2 &#x2192;

</button>

</div>

);

}

}

  

export  default  withRouter(Page1);

```

  

```js

// Page2.js

  

import  React, {Component} from  "react";

import { withRouter } from  "react-router";

  

class  Page2  extends  Component {

render() {

const { history } = this.props;

  

return (

<div>

<h2>This is the second page.</h2>

<br />

<button

onClick={() => {

history.push("/page3");

}}

>

Go to Page 3 &#x2192;

</button>

</div>

);

}

}

  

export  default  withRouter(Page2);

```

  

```js

// Page3.js

  

import  React, {Component} from  "react";

import { withRouter } from  "react-router";

  

class  Page3  extends  Component {

render() {

return (

<div>

<h2>This is the last page.</h2>

</div>

);

}

}

  

export  default  withRouter(Page3);

```

  

```js

// index.js

  

import  React  from  "react";

import  ReactDOM  from  "react-dom";

import { BrowserRouter, Route } from  "react-router-dom";

  

import  App  from  "./components/App";

import  "./styles.css";

  

const  rootElement = document.getElementById("root");

ReactDOM.render(

<BrowserRouter>

<Route  path="/"  component={App} />

</BrowserRouter>,

rootElement

);

```

  
  
  
  

Q. How do I set multipart in axios with react?

  

```js

class  App  extends  Component {

state = {

file: null

};

  

handleFile(e) {

let  file = e.target.files[0];

this.setState({ file });

}

async  handleUpload(e) {

console.log(this.state.file);

await  uploadImage(this.state.file);

}

  

render() {

return (

<div  className="App">

<h1> File Upload in React </h1>

<input  type="file"  name="file"  onChange={(e) =>  this.handleFile(e)} />

<button  onClick={(e) =>  this.handleUpload(e)}>Upload</button>

</div>

);

}

}

  

const  uploadImage = async (file) => {

try {

console.log("Upload Image", file);

const  formData = new FormData();

formData.append("filename", file);

formData.append("destination", "images");

formData.append("create_thumbnail", true);

const  config = {

headers: {

"content-type": "multipart/form-data"

}

};

  

const  url = "FILE_DIRECTORY";

  

const  result = await  axios.post(url, formData, config);

console.log("REsult: ", result);

} catch (error) {

console.error(error);

}

};

  

const  rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

```

  
  

Q. How to start search only when user stops typing?

  

```js

import { useState, useEffect } from  "react";

  

function  App() {

  

const [value, setValue] = useState("");

  

const  handleOnChange = (event) => {

setValue(event.target.value);

};

  

useEffect(() => {

const  timeoutId = setTimeout(

() =>  console.log(`Search function called: "${value}"`),

300

);

return () =>  clearTimeout(timeoutId);

}, [value]);

  

return (

<>

<input  onChange={handleOnChange}  value={value}  placeholder="Search" />

<h1>{value}</h1>

</>

);

}

```

  
 
  

Q. How to implement default or NotFound page?

  

```js

import { Link, BrowserRouter  as  Router, Route, Switch } from  "react-router-dom";

  

const  IndexPage = () => {

return <h3>Home Page</h3>;

};

  

const  AboutPage = () => {

return <h3>About Page</h3>;

};

  

const  NoMatchPage = () => {

return <h3>Page Not Found</h3>;

};

  

const  App = () => {

return (

<section  className="App">

<Router>

<Link  to="/"> Home | </Link>

<Link  to="/about"> About | </Link>

<Link  to="/page-not-found"> 404 </Link>

<Switch>

<Route  exact  path="/"  component={IndexPage} />

<Route  exact  path="/about"  component={AboutPage} />

<Route  component={NoMatchPage} />

</Switch>

</Router>

</section>

);

};

```

  

Q. How to focus an input element on page load?

  

autoFocus:

  

```js

class  App  extends  Component {

render() {

return (

<div>

<input  placeholder="It Won't focus" />

<input  autoFocus  placeholder="It will focus" />

</div>

);

}

}

```

  
  

Q. Give a simple example of Jest test case?

  

```js

// App.js

  

function  App() {

let [count, setCount] = useState(0);

  

const  decrement = () =>  setCount((count -= 1));

const  increment = () =>  setCount((count += 1));

  

return (

<div  className="App">

<h1>Testing React Hooks</h1>

<p>{count}</p>

<button  onClick={decrement}>-</button>

  

<button  onClick={increment}>+</button>

</div>

);

}

```

  
  

// App.test.js

```js

import  React  from  "react";

import  ReactDOM  from  "react-dom";

import  App  from  "../index";

  

import  Enzyme, { shallow } from  "enzyme";

import  Adapter  from  "enzyme-adapter-react-16";

  

Enzyme.configure({ adapter: new Adapter() });

  

it("renders without crashing", () => {

const  div = document.createElement("div");

ReactDOM.render(<App />, div);

ReactDOM.unmountComponentAtNode(div);

});

  

it("App loads with initial state of 0", () => {

const  wrapper = shallow(<App />);

const  text = wrapper.find("p").text();

expect(text).toEqual("0");

});

```

  
  

Q. How to use font-awesome icons in React?

  

```js

import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";

import { faAddressBook, faHome } from  "@fortawesome/free-solid-svg-icons";

  

function  App() {

return (

<div  className="App">

<h2> React Font Awesome Icons </h2>

<nav>

<ul>

<li><FontAwesomeIcon  icon={faHome} /> Home </li>

<li><FontAwesomeIcon  icon={faAddressBook} /> Contact Us </li>

</ul>

</nav>

</div>

);

}

```

  
  

  

Q. How to use SVGs in React?

  

```js

function  App() {

return (

<div  className="App">

<h1> SVG in React </h1>

<div>

<img

src={"http://s.cdpn.io/3/kiwi.svg"}

alt="Kiwi Bird"

width="200px"

/>

</div>

</div>

);

}

```

  
  
  

Q. How to repeat an element n times using JSX?

```js

export  default  function  App() {

  

let  inputFields = [];

for (let  i = 0; i < 5; ++i) {

inputFields.push(

<div> Field {i}: <input  type="text"  placeholder="Search" /> </div>

);

}

  

return (

<>

<h2> Repeat an element n times using JSX </h2>

<div>{inputFields}</div>

</>

);

}

```

  


  
  

Q. How can I set a cookie in react?

  

```js

import { CookiesProvider } from  "react-cookie";

import  ReactDOM  from  "react-dom";

  

import  App  from  "./App";

  

const  rootElement = document.getElementById("root");

ReactDOM.render(

<CookiesProvider>

<App />

</CookiesProvider>,

rootElement

);

```

  

```js

import  React, { useState } from  "react";

import { useCookies } from  "react-cookie";

  

const  App = () => {

  

const [name, setName] = useState("");

const [cookies, setCookie] = useCookies(["user"]);

  

const  handle = () => {

setCookie("name", name, { path: "/" });

};

return (

<div  className="App">

<h1> Cookies in React </h1>

<input

placeholder="Cookie value"

value={name}

onChange={(e) =>  setName(e.target.value)}

/>

<button  onClick={handle}>Set Cookie</button>

{cookies.name && (

<div>Name: {cookies.name}</div>

)}

</div>

);

};

export  default  App;

```

  
  
  



  
  

Q. How to Create dependent dropdowns that populates data with each other in React.js?

/**
* Dependent Dropdown in React
*/

  

```js

import { useState } from  "react";
const  data = [

{ name: "California",
	cities: ["Long Beach", "Los Angeles", "Sacramento", "San Diego", "San Francisco"]
},

{ name: "Michigan",
	cities: ["Dearborn","Detroit", "Grand Rapids", "Pontiac", "Southfield"]
},

{ name: "New Mexico",
	cities: ["Albuquerque", "Artesia", "Clovis", "Raton","Tularosa"]
},

{ name: "Texas",
	cities: ["Austin", "Beaumont", "Corpus Christi", "Fort Worth", "Houston"]
}

];

  

export  default  function  App()

{
	const [capitals, setCapitals] = useState("");
	const [cities, setCities] = useState([]);

function  updateSelect(e) {

setCapitals(e.target.value); // Saving state of current selected drop down 1

if (capitals !== undefined) {

// Finding and saving the data for drop dop 2 related to the data of drop down 1

setCities(data.find((data) =>  data.name === e.target.value).cities);

}

}

return (

<div>

<select  value={capitals}  onChange={updateSelect}>

<option  disabled> --- SELECT --- </option>

{data.map((capital) => {

return <option  value={capital.name}>{capital.name}</option>;

})}

</select>

<select>

<option  selected  disabled> --- SELECT --- </option>

{cities.map((city) => {

return <option  value={city}>{city}</option>;

})}

</select>

</div>

```
