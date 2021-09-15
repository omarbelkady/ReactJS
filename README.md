# React Repo Which 63526 843 2-56837 263 27736259 56837 HELPED ME Make

### Datatypes:
1. Numbers
2. Text
3. Boolean
4. Consts
5. Objects


### Fragments In React:
```
<> </>
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
│   ├── index.html ------ to bootstrap your react app import it here
│   └── manifest.json
└── src
    ├── App.css ---------------- styling
    ├── App.js ----------------- root component
    ├── App.test.js ------------ unit tests
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


### Useful Resources for the FE

1. Mozilla Developer
  - https://developer.mozilla.org

2. W3 School
  - https://www.w3schools.com/

3. CSS Reference For Visual CSS Guides 
  - https://cssreference.io/

4. JS Learning
  - https://javascript.info/

5. CSS Tricks ... To learn the ins and outs of CSS with some cool tricks
  - https://css-tricks.com

6. Code Pen .... Super Useful Resource
  - https://codepen.io

7. Useful Snippets for the Front End
  - https://30secondsofcode.org


### Tutorials

1. HTML5 Rocks

2. Smashing Magazine

3. Tuts+

4. Geeksforgeeks

5. W3Schools

### Quickly Generate An Express App

```bash
npx express-generator --no-view api
```


### Cool Libraries to Use 


- AniJS
- AutoComplete.js : simple pure vanilla js lib for autocompletion
- Base Web: Ready to use Components
- Darkmode.js: uses CSS mix-blend mode in order to bring dark mode to your WS
- FrenchKiss.js: For simple and fast soln to handling internationalization
- Freezeframe.js: Library that pauses animated gifs and animated them on mouse hover/click/touch
- HotKeys.js: For capturing keyboard input
- Indigo Player: xtensible js lib for playing videos
- Lax.js: for Parallax Effect
- Lottie JS
- MOJS
- Moveable: Draggable, Resizable, Scallable, Rotatable, Wrapable, Pinchable Elements
- Optimole: Manage and Resize Images depending on how much resources you have
- Popmotion Pure
- Rallax.js: VanillaJS plugin to implement parallax scrolling effect
- React Image Magnifiers: Responsive, image magnifying react component on mouse and touch
- React Redux Loading Bar: component providing loading bar for long running tasks
- React Simple Img: React lazy loading images iwth IntersectionObserver API
- SceneJS: JS Animation for creating animated Web Sites
- ScrollReveal JS
- Simple Keyboard: simple, fast, customizable virtual keyboard
- Zdog: Walkthrough on how to design, display and animate a design
- fslightbox: for display various types of sources in a box


### Free Hosting Providers
    
    - Most Common
      - Heroku
      - Netlify
      - Vercel
      - Firebase

    - Others
      - Begin
      - Fleek
      - Fly
      - Glitch
      - Hostman
      - Render
      - Stormkit
      - Surge

### Free Website Templates

- https://www.startbootstrap.com/
- https://www.onepagelove.com/
- https://www.bootstrapmade.com/
- https://free-css.com/
- https://freewebsitetemplates.com/

### Cool APIs to work with in React

- Google Maps
  - https://developers.google.com/maps/

- Unsplash
  - https://unsplash.com/developers/

- Spotify
  - https://developer.spotify.com/discover/

- Facebook
  - https://developers.facebook.com/

- Mail Chimp
  - https://mailchimp.com/developer/

- Instant Mojo
  - https://instantmojo.com/developer/


### ReactJs VS. NodeJS
- ReactJS: UI Library
- NodeJS: Server Side/Back End ====> API Exposer/Kitchen
- API: Communicator/Waiter

### Roadmap
![ReactJS Roadmap](https://user-images.githubusercontent.com/31806568/115142227-2a17a880-a030-11eb-8568-982ccd05bc3a.png)

### What is onChange Event
- An onChange Event is when the state/value of anything changes

### How Is Data Passed in ReactJS
- Primitive(by, ch, short, int, long, fl, dou) data types in ReactJS are passed by value as in any other programming language
- Variables which aren't primitives are passed by reference aka Arrays, Objects and Functions




## Mistakes Commonly Made And How To Fix?

1.  Module Not Found: Cannot Resolve ...
- This means that you are trying to use a file that isn't created or its path is incorrect when you imported it
<br />

2. Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
- Place a return statement to remove this error
<br />

3. JSX expressions must have one parent element.ts(2657)
- You have a closing tag placed in the wrong location (8355 63526 86 5683 227243)

<br />

4.  Found 2 elements with non-unique id
- Just make sure your first input type tag has a different id(prop) value than the second input type tag
<br />

5. Identifier 'App' has already been declared
- Your functional/Root Component is already called App and you are importing another functional component
- To fix this just give your import a different name and this will make the problem disappear

<br />

6. The < blabla> is unrecognized
- Usually function names and file names in JS are lowercased
- But in React this is a NONO! If you want to render a react component names of Functional Comp must start with Lowercase
- To Fix this if you want to keep your functional component lowercased change your imported file name to Upppercase
- It is better to have your component and File Names as uppercase
```js
import './App.css'
//Change the below statement to the following one
//import message from './components/message'
import Message from './components/message';

function App(){
  return(
    <div className="App">
      <Message />
    </div>
  )
}

export default App;
```
<br />

7. Importing Named Exports As Default Exports: Generates the error: './components/MyNamedExport' is imported as 'MyNamedExport'
```js
export const MyNamedExport = () => {
  return(
    <div>
      Named Export
    </div>
  )
}
```

#### Root Component: App.js ... To Solve this wrap my MyNamedExport in Curly Braces
```js
//import MyNamedExport from './components/MyNamedExport';
import { MyNamedExport } from './components/MyNamedExport';


function App(){
  return(
    <div className="App">
      <MyNamedExport />
    </div>
  )
}

export default App;
```
<br />

8. Unknown DOM property for. Did you mean htmlFor
- Change the for prop in your form tag to an htmlFor prop and this error will go away
<br />

9. Too Many Rerenders
- I goto my Setter Function of UseState Hook Take My file Count.js
```js
import { useState } from 'react';
export const MyNamedExport = () => {
  const [count, setTheCount] = useState(0);
  return(
    <div>
      <button onClick={setTheCount(count+1)}>Count - {count} </button>
    </div>
  )
}
```
<br />

10. A Component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.


- This is due to not passing anything to the UseState Hook. When you pass undefined or null to a value within a React component along with an onChange that means this is an uncontrolled component
<br />
- You are essentially going from uncontrolled to controlled input and this is a big NONO
<br />
- To Fix this just pass in an empty string to the useState hook

<br />
11. React Hook useEffect has a missing dependency: 'userOne'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

- This is saying we are using a variable in my useEffect hook but I am not including it in my dependency array
- To fix this just include the variable in the dependency array



- I goto the Root component to include it and it generates the error Too Many Rerenders

```js
import './App.css';
import { MyNamedExport } from './components/MyNamedExport';

function App(){
  return(
    <div className="App">
      <MyNamedExport />
    </div>
  )
}

export default App;
```

- Instead of passing the function by value I pass an arrow function to the event handler
```js
import { useState } from 'react';
export const MyNamedExport = () => {
  const [count, setTheCount] = useState(0);
  return(
    <div>
      <button onClick={()=>setTheCount(count+1)}>Count - {count} </button>
    </div>
  )
}
```


12. Attempted import error: 'x' is not exported from './components/x'.
If your remove the curly brace of your in your import statement this error goes away


13. Class constructor X cannot be invoked without 'new'
Make sure you tell react that you are trying to create a component by extending React.component

<br />
Instead of doing this: 

```js
class Book extends React.Component 
```
<br />

 Change it to a default class component
```js
export default class Book extends Component
```


### JSX
- React's Syntax for writing stuff a mix of XML and VanillaJS

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

### Webpack
- module that bundles our JS code for it to be understood by multiple browsers
- AKA it is resource loader 
- Any foreign module dependency is published for it to be understood by the browser

#### Webpack Bundler
- npm module that bundles our JS code. It is in charge of collecting the app's dependencies and merging them
- ... for it to be consumed by the web browser 


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
	- useState	
	- useEffect

<br />

### ReactJS Advanced Topics
1. Hooks
	
	
	a. Custom Hooks
	
	b. Common Hooks:			
	- [ ] useCallback
	- [x] useRef
	- [x] useMemo
	- [ ] useReducer
	- [x] useContext


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
- Range Of Ports: [0,65535]  .... I am using Interval Notation FYI

<br />


#### How To Install Components Features Through NPM
```bash
npm install -g create-react-component
```


#### Files Which Are Usually Deleted
- App.css
- App.test.js
- logo.svg
- setupTests.js

### What is the difference between State And Props in React? When To Use State? When To Use Props
- State houses the object vals which belong to a component
- Props are we pass in between components... Typically between parent comp and child comp
- Properties in a react component are vars that we pass to it by its parent component
- State on the other hand is an immutable variable that is directly managed by the component
- We can initialize state thanks to properties(props) and vice versa
- When I want to display something in my component I use props
- When I want to update something in my component or track something in my component I use state
- When I want to print something use functional component with props
- When Updating something I use state(more precisely the built in hook react provides me with useState)


<br />

### How To Pass Data From One Part Of Your App to annother

- The end goal of passing data is for it to reach the tree of the child component. Now to move data from the child to the parent component I use props.

### What Is State? You will always here this keyword when dealing with ReactJS

- State is just an object. State is used in the class component, and we must remember that state stores the component data and determines the component behavior


<br />

#### Memoization
- The process by which we store a super heavy functional component in memory 
- I reuse this component thanks to Caching

#### Virtual DOM vs Real DOM
- Virtual DOM has the exact same properties as Real DOM but virtual DOM doesn't have the power to change things directly
- DOM Manipulation is slow
- Virtual DOM Manipulation is fast

### IF YOU DO NOT KNOW WHAT THE DOM IS:
- process by which we take all the nasty html elements and put them in a object that has tree structure
- IOW it takes all the nasty HTML elements and gives it a nice structure
- e.g.:
  - < document > is the parent:
  - < html > is the child of < document >
  - < head > and < body > are the children of < html >
  - < title > is the child of < head >
  - < h1-h6 > and < a > are the children of < body >
- HTML DOM is a standard way of GETTING, CHANGING, ADDING, REMOVING html elements

#### How To Create A Component
```bash
create-react-component nameofyourcomponent
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

### How To Get the FE communicate with the BE: FOLLOW THESE STEPS EXACTLY

0. Configure the BE first[NodeJS]--- have Nodemon and NodeJS installed

1. Create a folder inside your project and call it backend
2. within the folder run npm init to create a package.json
3. Install express, cors, body-parser, morgan
4. Create an index.js file and throw this stuff in it
5. I create a db to have data in it so that my FE can consume it call it db.js
```js
let games = [
  { _id: 1, name: "San Andreas", runs: "PC" },
  { _id: 2, name: "Valorant", runs: "PC" },
  { _id: 3, name: "GTA 5", runs: "PC" }
];
module.exports = games;
```

#### Creating Routes
<br />
6. I want a route for games so I define routing for it I create it inside a folder called routes

```js
//the games.js file
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const myGameRouter = require("./routes/games");

const port = process.env.PORT || 3001;


app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/games", myGameRouter);

//I listen to the port I defined

app.listen(port, function() {
  console.log("Runnning on Port: " + port);
});


//creating a route to get the list of games
router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: games
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

//creating a route to get a single game
router.get("/list/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let game = games.find(game => game._id === id);
    res.status(200).json({
      data: game
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;
```
<br />

### Backend
<br />
7. I goto my index.js file

```js
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const myGameRouter = require("./routes/games");



app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/games", myGameRouter);

//I listen to the port I defined

app.listen(port, function() {
  console.log("Runnning on Port: " + port);
});


module.exports = app;
```
<br />
8. I run my backend 

```bash
nodemon index.js
```

### Frontend

9. I create A react application

```bash
npx create-react-app react-fe
```

10. Add Bootstrap to the index.html file in the react-fe folder
<br />

11. goto your root component and make App.js a class based component and export it
<br />

12. have some state in your constructor

```js
import React, { Component } from "react";

export default class App extends Component {


      constructor(someprops) {
          super();
          this.state = {
            list: true, //list of games will show if true
            card: false, //single game will be displayed if true
            games: [], //has the list of games stored in the be here
            game: {} //has 1 single game stored in the be here
          };
      }

      /*
      I need to get the list of games from the API
      using the lifecycle hook componentDidMount to have list of 
      games stored inside the state before I mount the component
      */
      componentDidMount() {
        fetch("http://localhost:3001/games/list")
        .then(response => response.json())
        .then( responseJson=> {
          this.setState({ games:responseJson.data });
        },
      )}

      // Be able to view a single game
      showGame= id => {
          fetch(`http://localhost:3001/games/${id}`)
          .then(response => response.json())
          .then(
              responseJson=> {this.setState({ game:responseJson.data })},
          );

        this.setState({
            list:false,
            game:true
        });
      };

      render(){
          return(
              <div className ="container">
                  {this.state.list ? (
                      <div className="list-group">
                        {this.state.games.map(game => (
                            <li onClick={() => this.showGame(game._id)}
                                className="list-group-item list-group-item-action"
                              >
                            {game.name}
                            </li>
                        ))}
                      </div>
                  ) : null}
              </div>

              {this.state.card ? (
                    <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">{this.state.player.name}</h5>
                            <p class="card-text">{this.state.player.runs}</p>
                            <div onClick={() => this.showGame()} class="btn btn-primary">Back</div>
                        </div>
                    </div>
              ) : null}
        )
      }

```

14. I run my frontend
```bash
npm start
```

### Prevents the form from submiting
```js
ev.preventDefault()
//when you submit an application the whole page refreshes in the case of forms
```

### How to Render Sth In React 
<br />
 I can put 27375 in place of this.state.pascal and it will render

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

<br />

#### Without Destructuring
```js
//Without destructuring I would have the following
var example = useState('yourStateGoesHereAndAskNelanToLearnLLP');
var firstElement = example [0];
var secondElement = example[1];
```
<br />


#### Using Destructuring
```js
const [firstElement, secondElement] = useState('yourStateGoesHereAndAskNelanToLearnLLP');
```
<br />


### Example 2
```js
//Without destructuring
const hookForNumbers = useState(2);
const number = hookForNumbers[0];
const setNumber = hookForNumbers[1];

//with destructuring
const [number, setNumber] = useState(2);
```

<br />



### Some Good Practices
- Fetch Your Data not in the render function but in the lifecycle method componentDidMount Why?
- componentDidMount will run only if your component has been mounted to the dom AT LEAST ONCE
- To know if you have fetched the data or completed the data we use state

<br />


#### 8. Data Fetching From An API Misconception

- Wrong: Fetch the Data from An API then you render it to the DOM and no render if you haven't fetched the data
- True: Fetch the data from A Resource(aka API). When the data comes in, you update the state thanks to the hook and we render the new state to the dom

<br />


#### How To Fetch Data Using the Fetch Function From An API using the desired HTTP Method

```js
fetch('https://localhost:3000/pages', { 
  method: 'POST', 
  headers: {"Content-type": "application/json"}, 
  body: JSON.stringify({ title, codes, category })
})
```

<br /><br />



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
- Context provides a way to pass data through multiple components tree without having to pass props down manually at every level starting from the parent component
- Props drilling is the process by which we pass data from component A to Component B thanks to props and the more components we have the more complex it gets
- Thanks to ContextAPI I have a central store where my data lives 
- We can treat ContextAPI similar to Redux which gives me a central store which houses my data
- The store can be inserted into any component
- ContextAPI provides a way to pass data through the component tree without having to pass props down manually at every level
- The consumer is a component which is consuming the value 
There are three levels of ContextAPI
1. Level 1: Context
2. Level 2: Provider --> Used in the parent component
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

## ContextAPI Stuff

### I goto my index.js
```js
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter} from "react-router-dom";

import Theme from "./Context/Theme";

ReactDOM.render(
    <BrowserRouter>
        <Theme/>
    </BrowserRouter>,
    document.getElementById("root")
);
```

### I goto my Theme.js file which will have a parent component(Theme class) and  a Child Component(CurrentTheme )
```js
import React, { Component } from "react";

//creating the context and specifying a default value
const ThemeContext = React.createContext("light");
/*
line 643 is where I make a call to the provider and I place my parent component there
I can change the theme from light to dark by passing a value prop to my prop and supply it with an argument of dark
Instead of passing props from one compoent to another in the form of layer in context api I do not have to pass props to any component actually
Just wwrap your component within a provider
*/
//parent component
export default class Theme extends Component{
  render(){
    return(
      <div>
          <ThemeContext.Provider value="Dark">
                <CurrentTheme />
          </ThemeContext.Provider>

      </div>
    );
  }
}
//child component 1
function CurrentTheme(){
  return(
    <div>
      <SecondChild />
    </div>
  )
}

class SecondChild extends Component{
  //way #2 to initialize context
  static contextType = ThemeContext()

  render(){
    return(
      <div>
        <h1>Using Context API</h1>
      </div>
    )
  }
}

/*initializing context property outside of class
Way#1 to initialize context

SecondChild.contextType = ThemeContext
*/
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
│   ├── index.html ------ to bootstrap your react app import it here
│   └── manifest.json
└── src
    ├── App.css ---------------- styling
    ├── App.js ----------------- root component
    ├── App.test.js ------------ unit tests
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




### 8. Unable to enter data in a form?

- Make sure you take a look at the value prop you passed to the form element
- Passing a value prop X means the value will always be X
- Removing the value prop altogether transforms your input field from controlled to uncontrolled