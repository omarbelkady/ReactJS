
# React Repo Which 63526 843 2-56837 263 27736259 56837 HELPED ME Make


### 1 How to install prereqs for react and all other dependencies necessary to your project
```bash
mkdir my-react-app
cd my-react-app
npm init --y
npm install react react-dom 
npm install --save-dev webpack webpack-dev-server html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react 
```

### 2: 
```bash
touch webpack.config.js
mkdir src
cd src/
touch index.js
touch index.html
```

### 3: Paste the required script in the webpack.config.js file for webpack setup
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },
  // add a custom index.html as the template
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
};
```

### 4: Paste the required script in the index.js file that is in your src directory aka source
```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Helloworld React!</h1>, document.getElementById('root'));
```


### 5: Paste the required script in the index.html file that is in your src directory aka source
```html
<html>
  <head>
    <title>Hello world App</title>
  </head>
  <body>
  <div id="root"></div>
  <script src="bundle.js"></script>
  </body>
</html>
```


### 6: Paste the required script in your package.json file so that you can automate with scripts your projects
```json
{
	"name": "my-react-tutorial-app",
	"version": "0.1.0",  
	"private": true,
	"dependencies": {
    	"react": "^16.5.2",
	    "react-dom": "^16.5.2",
	},
	"devDependencies": {
    	"react-scripts": "1.0.7"
  	},
  	"scripts": {
		"start": "react-scripts start",
		"build": "react-scripts build",
		"test": "react-scripts test --env=jsdom",
		"eject": "react-scripts eject"
	}    
}
```

### 7. React Project Layout. If you are build a SPA no need for components dir ignore this step and any subsequent one
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
### 8. Go to your main component(App.js) to setup the routing
```js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, NameOfYourSecondPage, NameOfYourThirdPage, NameOfYourFourthPage} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/NameOfYourSecondPage" exact component={() => <NameOfYourSecondPage />} />
          <Route path="/NameOfYourThirdPage" exact component={() => <NameOfYourThirdPage />} />
	  <Route path="/NameOfYourFourthPage" exact component={() => <NameOfYourFourthPage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
```

### 9. If you are a build a MPA run this command to setup routing
```bash
npm i react-router-dom
```

### 10. If you want bootstrap here is the boiler plate index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

