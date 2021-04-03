


# React Repo Which 63526 843 2-56837 263 27736259 56837 HELPED ME Make

### Fragments In React:
```
<> </>
```

### ReactJs VS. NodeJS
- ReactJS: Client Side/Front End ====> API Consumer/Customer
- NodeJS: Server Side/Back End ====> API Exposer/Kitchen
- API: Communicator/Waiter


### What is onChange Event
- An onChange Event is when the state/value of anything changes

### Module Not Found: Cannot Resolve ...
- This means that you are trying to use a file that isn't created or its path is incorrect when you imported it

### Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
- Place a return statement to remove this error


### JSX expressions must have one parent element.ts(2657)
- You have a closing tag placed in the wrong location (8355 63526 86 5683 227243)


### Found 2 elements with non-unique id
- Just make sure your first input type tag has a different id(prop) value than the second input type tag


### Unknown DOM property for. Did you mean htmlFor
- Change the for prop in your form tag to an htmlFor prop and this error will go awayg

### JSX
- The ReactJS Syntax for writing stuff a mix of XML and VanillaJS

### How to resize images in React
- Pass in an id prop to your img tag in your js file
- Head over to your styles.css file and place a # in front of the value of the id you supplied without the quotes

### How To accept the default package.json
```bash
npm init -y
```

#### How Do You Pass Data from One Class Based Component To Another Class-Based Component? You use Props!
```js
import React, { Component } from 'react';
import logo from './logo.svg';
import "App.css"

//Functional Component
const Body = () => {
   <p className="App-Intro">
          Welcome Here 
          </p>
}


//Header Component aka class Based Component
class Header extends Component{
  render(){
    return(
      <header className="App-header">
        <img src="{logo}" className="App-logo" alt="logo" />
        <h1 className="App-title"> Welcome Here </h1>
      </header>
    );
  }
}

//Root Component and I pass the Header Component as props
class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
          <Body />
      </div>
    );
  } 
}
```


### Default Port Which React Runs On:
- 3000


### Truthy or False Vals
```js
//checking for truthy or falsy values
//toBeNull matches only to null
//toBeUndefined matches only to Undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

```

### ReactJS Fundamentals You Must Know:

 
 1. Create React App Command 
 2. JSX Syntax
 3. Components
	 - Functional
	 - Class Based Components
4. The Difference between Props And State
5. Conditional Rendering
6. Component Lifecycle
7. Lists And Keys
8. The Difference Between Composition And Inheritance
9. The Basic Hooks
	
	i. useState
	ii. useEffect

### ReactJS Advanced Topics
1. Hooks
	
	
	a. Custom Hooks
	b. Common Hooks:			
	- [ ] useCallback
	- [ ] useRef
	- [ ] useMemo
	- [ ] useReducer
	- [ ] useContext
2. Context
3. Refs
4. Render Props
5. Code Splitting
6. Higher Order Components
7. Portals
8. Error Boundaries
9.  Fiber Architecture


### Next Step: Keep Learning...........


### CodeSnippets
 1. rfc: React Functional Component
 2. race: React Arrow Function Component Export
 3. rafce: React Arrow Functional Component Export
 4. rcc: class component skeleton
 5. rfcp: React Functional Component With Prop Types
 6. rrc: class component skeleton with react-redux connect
 7. rrdc: class component skeleton with react-redux connect and dispatch
 8. rccp: class component skeleton with prop types after the class
 9. rcjc: class component skeleton without import and default export lines
 10. rcfc: class component skeleton that contains all the lifecycle methods
 11. rwwd: class component without import statements
 12. cwm: component will mount method skeleton
 13. cdm: componentDidMount method skeleton
 14. cwr: componentWillReceiveProps method
 15. scu: shouldComponentUpdate method
 16. cwup: componentWillUpdate method
 17. cdup: componentDidUpdate method
 18. cwun: componentWillUnmount method
 19. ren: render method
 20. sst: this.setState with object as parameter
 21. ssf: this.setState with function as parameter
 22. props: this.props
 23. state: this.state
 24. bnd: binds the this of method inside the constructor
 25. disp: MapDispatchToProps redux function
 26. html5: Blank html5 document



### Other Ports To Run React On:
- 37532
- 42932
- Range Of Ports: [0,65535]  .... I am using Interval Notation FYI

#### How To Install Components Features Through NPM
```bash
npm install -g create-react-component
```


#### Files Which Are Usually Deleted
- App.css
- App.test.js
- logo.svg
- setupTests.js

#### What is the difference between State And Props in React? When To Use State? When To Use Props
- State houses the object vals which belong to a component
- Props are we pass in between components... Typically between parent comp and child comp
- Properties in a react component are vars that we pass to it by its parent component
- State on the other hand is an immutable variable that is directly managed by the component
- We can initialize state thanks to properties(props) and vice versa
- When I want to display something in my component I use props
- When I want to update something in my component or track something in my component I use state
- When I want to print something use functional component with props
- When Updating something I use state(more precisely the built in hook react provides me with useState)

### An Example of Parent and Child Component
```js
import React, { Component } from 'react';

//Parent
export default class PropsVsChild extends Component{

  render(){
    return(
      <div>
      <Child color="Blue" />
      </div>
    )
  }
}

//Child
class Child extends Component{
  constructor(props){
    super(props);
    //creating a simple state but I do not want to modify the state directly I want to modify it using props(properties)
    //this.state = {myFavColor: 'Blue'}
    this.state = { myFavColor: props.color}
    //now I can specify this color property in the parent component
    console.log(this.state.myFavColor)
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}

```



### How To Pass Data From One Part Of Your App to annother
- The end goal of passing data is for it to reach the tree of the child component. Now to move data from the child to the parent component I use props.

### What Is State? You will always here this keyword when dealing with ReactJS
- State is just an object. State is used in the class component, and we must remember that state stores the component data and determines the component behavior

### What is a Component?
- Your application is made up of thousands of pieces. Every piece is what we call a "component"
	- Example: navigation bar, sidebar


### Difference between Functional And Class Based Components:
- We Use a Class Based Ccmponent when you want a specific component to be aware of another component
- We use a Functional Component aka functions to perform certain tasks indepedent of another. Say Function A is unaware and doesn't know Function B nor of its role




#### Memoization
- The process by which we store a super heavy functional component in memory 
- I reuse this component thanks to Caching

#### Virtual DOM vs Real DOM
- Virtual DOM has the exact same properties as Real DOM but virtual DOM doesn't have the power to change things directly
- DOM Manipulation is slow
- Virtual DOM Manipulation is fast

### IF YOU DO NOT KNOW WHAT THE DOM IS:
- process by which we take all the nasty html elements and put them in a object that has tree structure

#### How To Create A Component
```bash
create-react-component thepasccomponentisthebestcompfor27375fb
```
#### Smart Components Vs Dumb Components
- Smart Components are components which are at the application level that have the ability to execute functions and manage data
- Dumb Components are components that strictly deal with the User Interface


#### How To Create A Column in file Whatever.js
```js
import React { Component } from 'react';

export default Whatever extends Component {
	render() {
		return (
			<div className="col-md-4"></div>
		)
	}
}
```

#### How To Create A Row in file Whatever.js
```js
import React { Component } from 'react';

export default Whatever extends Component {
	render() {
		return (
			<div className="row"></div>
		)
	}
}
```

#### How To Get the FE communicate with the BE:
- axios

#### prevents the form from acting in the default way
```js
ev.preventDefault()
//when you submit an application the whole page refreshes in the case of forms
```

### How to Render Sth In React 
#### I can put 27375 in place of this.state.pascal and it will render
```js
import React, { Component } from "react";

class Pasc extends Component{
	state = {
		pascal: 1
	};

	render(){
		return(
			<div>{this.state.pascal}</div>
		);
	}
}

export default Pasc;
```

### Destructuring Explained in React

#### Without Destructuring
```js
//Without destructuring I would have the following
var example = useState('yourStateGoesHereAndAskNelanToLearnLLP');
var firstElement = example [0];
var secondElement = example[1];
```

#### Using Destructuring
```js
const [firstElement, secondElement] = useState('yourStateGoesHereAndAskNelanToLearnLLP');
```

### Example 2
```js
//Without destructuring
const hookForNumbers = useState(2);
const number = hookForNumbers[0];
const setNumber = hookForNumbers[1];

//with destructuring
const [number, setNumber] = useState(2);
```


### 1 How to install prereqs for react and all other dependencies necessary to your project
```bash
mkdir my-react-app
cd my-react-app
npm init --y
npm install react react-dom 
npm install --save-dev webpack webpack-dev-server html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react 
```

### 2: Create React Application using the create-react-app command
```bash
npx create-react-app 
```
### 3: Remove the following 5 files that come shipped with the create-react-app command
- App.test.js
- index.css
- logo.svg
- serviceWorker.js
- setupTests.js



### 4. React Project Layout. If you are build a SPA no need for components dir ignore this step and any subsequent one
```
├── README.md
├── node_modules
├── package.json
├── .gitignore ------- list the files you do not want git to track here
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
        ├── Home.jsx
	├── NameOfYourSecondPage.jsx
	├── NameOfYourThirdPage.jsx
	├── NameOfYourFourthPage.jsx
	├── NameOfYourNthPage.jsx
	├── Navigation.jsx
	├── Footer.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js

```
## For Projects

### 5. Create a components folder in your src folder
```
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    └── components
      └── Footer
      └── Navbar
         ├──index.js
         ├──
    └── images
    └── pages
    └── videos
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js

```

### 5. React Typescript Project Layout
```
.
├── .gitignore
├── .editorconfig
├── .env
├── README.MD
├── package.json
├── package-lock.json
├── tsconfig.json
├── tslinst.json
├── public/
│   ├── index.html
│   └── loader.css
├── srcipts/
│   └── mjml-compile.js
└── src/
    ├── assets/
    │   └── logo.svg
    ├── components/
    │   └── button/
    │       ├── index.tsx
    │       └── button.specs.ts
    ├── middlewares/
    │   └── auth.tsx
    ├── pages/
    │   ├── root.tsx
    │   ├── home.tsx
    │   └── login.tsx
    ├── routes/
    │   └── index.tsx
    ├── services/
    │   └── http.ts
    ├── styles/
    │   ├── ant-override.scss
    │   ├── _variables.scss
    │   └── index.scss
    ├── utils/
    │   └── index.ts
    ├── app.tsx
    └── index.tsx
```

### 6. If you are a build a MPA run this command to setup routing
```bash
npm i react-router-dom
```


### 7. Schema hasn't been registered for model
- Check your arguments for mongoose.model call


### 8. Data Fetching From An API Misconception
- Wrong: Fetch the Data from An API then you render it to the DOM and no render if you haven't fetched the data
- True: Fetch the data from A Resource(aka API). When the data comes in, you update the state thanks to the hook and we render the new state to the dom

### How To Fetch Data Using the Fetch Function From An API using the desired HTTP Method
```js
fetch('https://localhost:3000/pages', { 
  method: 'POST', 
  headers: {"Content-type": "application/json"}, 
  body: JSON.stringify({ title, codes, category })
})
```



### Some Good Practices
- Fetch Your Data not in the render function but in the lifecycle method componentDidMount Why?
- componentDidMount will run only if your component has been mounted to the dom AT LEAST ONCE
- To know if you have fetched the data or completed the data we use state


### Some Useful Npm Packages to Use In React:
#### UI Component Libraries
- @material-ui/core: React MaterialUI components
- react-bootstrap: Bootstrap4 components built with React
- semantic-ui-react: React Component Library
- reactstrap: Stateless React Components for Bootstrap4

#### Individual UI Component Libraries
- react-spinners: loading spinners for your react app
- react-loader-spinner: spinner component which can be used in your async.await operation 
- react-dropdown: Simple Dropdown component 
- react-slick: Carousel component built with React
- react-responsive-carousel: A responsive carousel component 
- react-images: A responsive, mobile-friendly, highly-customizable carousel component for displaying media in React
- react-tabs: An easy-tab component for your React App


#### CSS In JS
- styled-components: super easy to use library which lets you style your components at ease

#### HTTP stuff
- axios: Promised based http client for the browser and NodeJS


#### Routing:
- react-router-dom: DOM Bindings in React Router

#### State Management:
- redux: state container for your JS apps
- react-redux: official React Binding for Redux

### Context API
- Context provides a way to pass data through the component tree without having to pass props down manually at every level
- Props drilling is the process by which we pass data from component A to Component B thanks to props and the more components we have the more complex it gets
- Thanks to ContextAPI I have a central store where my data lives 
- We can treat ContextAPI similar to Redux which gives me a central store which houses my data
- The store can be inserted into any component
- ContextAPI provides a way to pass data through the component tree without having to pass props down manually at every level
- The consumer is a component which is consuming the value 
There are three levels of ContextAPI
1. Level 1: Context
2. Level 2: Provider
3. Level 3: Consumer


```js
/*
createContext Function creates the context or we can see it creates a central data store for me to store my data

*/
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    //A provider is a component which is used to provide the value to all my components
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    //I wwrap the parent component in between my provider
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  //This is a consumer FYI
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
