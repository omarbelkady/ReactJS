## React Router - Used To Route You To Different Pages on Your WS
### Used For Routing In A Website

### How To Install
```bash
npm install react-router-dom
```
### How To Start your Development Server
```bash
npm start
```
#### File Structure Demo
```
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── About.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── CSFanb.js
    ├── Home.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── Navbar.js
    ├── NelanIsAFTNFB.js
    └── serviceWorker.js
```

###  Step 1: Goto Root Component(App.js) and do this
```js
import React from 'react';
import logo from './logo';
import "./App.css";
import Home from './Home';
import About from './About';
import NelanIsAFTNFB from './NelanIsAFTNFB';
import CSFanb from './CSFanb';

function App() {
	return <div className="App">
		<Home />
		<About />
		<NelanIsAFTNFB />
		<CSFanb />
	</div>;
}

export default App;
```


####  Home_Page
```js
import React from 'react';
function Home() {
	return(
		 <div>
			<h1>Welcome To The Home Page</h1>
		</div>
	)
}

export default Home;
```


####  About_Page
```js
import React from 'react';
function About() {
	return(
		 <div>
			<h1>About 2526 fav 82 is 35(DJ)</h1>
		</div>
	)
}

export default About;
```

####  NelanIsAFTNFB_Page
```js
import React from 'react';
function NelanIsAFTNFB() {
	return(
		 <div>
			<h1>2526 Favorite Class FTN</h1>
		</div>
	)
}

export default NelanIsAFTNFB;
```


####  CSFanb_Page
```js
import React from 'react';
function CSFanb() {
	return(
		 <div>
			<h1>CS Is The 2nd 2378 82 For 2526</h1>
		</div>
	)
}

export default CSFanb;
```

### Step 2: Goto Index.js 
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
	<BrowserRouter>
	<App />
	</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
```


### Step 3: Go Back To Root Component And Setup the Routing
```js
import React from "react";
import logo from "./logo";
import "./App.css";
import Home from "./Home";
import About from "./About";
import NelanIsAFTNFB from "./NelanIsAFTNFB";
import CSFanb from "./CSFanb";
import {Route, Link} from "react-router-dom";

function App() {
	return <div className="App">
		<Route exact path="/" component={Home}/>
		<Route exact path="/about" component={About}/>
		<Route exact path="/nelanisaftnfb" component={NelanIsAFTNFB}/>
		<Route exact path="/csfanb" component={CSFanb}/>
	</div>;
}

export default App;
```


###  Step 4: Make your user's life easier by adding a Navbar component that way the user can easily navigate
```js
import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
	return(
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/nelanisaftnfb">NelanIsAFTNFB</Link>
			</li>
			<li>
				<Link to="/csfanb">CSFanb</Link>
			</li>
		</ul>
	);
}

export default NavBar;
```

###  Step 5: Go Back to the Root Component(App.js) to bring in the Navbar
```js
import React from "react";
import logo from "./logo";
import "./App.css";
import Home from "./Home";
import About from "./About";
import NelanIsAFTNFB from "./NelanIsAFTNFB";
import CSFanb from "./CSFanb";
import {Route, Link} from "react-router-dom";
import {NavBar} from "./NavBar";

function App() {
	return <div className="App">
		<NavBar />
		<Route exact path="/" component={Home}/>
		<Route exact path="/about" component={About}/>
		<Route exact path="/nelanisaftnfb" component={NelanIsAFTNFB}/>
		<Route exact path="/csfanb" component={CSFanb}/>
	</div>;
}

export default App;
```

### Switch Tag Benefits
- The First Child it finds to the matched search criteria you supplied it with it will render that component to the DOM
```js
	<Switch>
		<Route path="/red" exact component={Red}/>
		<Route path="/blue" exact component={Blue}/>
		<Route path="/yellow" exact component={Yellow}/>
	</Switch>
```