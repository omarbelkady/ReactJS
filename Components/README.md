# Components In ReactJS
- Strict Rule For Components:
   - All Components must have a render method 
- StateLess Components aka Called UI Components
  - Receive their data from Props and they pass the down to UI Components  as properties
  - Only are concerned With the UI
  - UI Components do not have state of their own
  - We use functions to create these UI Components as opposed to classes

- Use Functional Components in Your React App and not Class Components
- Functional Components enables me to use Hooks which means shorter code than Class Components

## Root Component aka App.js
- The Root Components is always at the top of the hierarchy which in our case in App.js and is the container
- The Root Components go fetch its data from a DB via a lifecycle hook and then stores it in the State
- Then the data is passed as a property to the UI Component/Functional Component
- The Clover get its data from Props(App.js) container component. The Clover doesnt need sate
- It is also possible to nest containers within Containers that is absolutely fine

2 Types of Components:
- Containers(have state)/Class Based Components
- UI Components(do not have state) aka Functional Components

### Functional Components
- Do NOT have Lifecycle Methods because they are simply a Pure JS Function
- Cannot have setState method within a functional Component because it doesn't have State
- We can however use Hooks:
1. useEffect: mimic lifecycle behavior
2. useState: store the functional state
```js
const MyComponent = (props) => {
  // With useState
  const [loaded, setLoaded] = React.useState(false)
  // With useReducer
  const [state, dispatch] = React.useReducer(reducer, initialState)
  	if (!loaded)
  		return null
		React.useEffect(() => void setLoaded(true))
  return <div {...props} />
}
```

#### Example 2 of A Functional Comp
```js
import React from 'react';
 
function App() {
  const sayHI = 'Hello 7652626 Functional Component!';
 
  return <h1>{sayHI}</h1>;
}
 
export default App;
```



### Class Based Component
1. Usually you will see it extending the React.component
2. are stateful because they have logic within them and of course state
3. MUST have a render method
4. The type of data we pass into a class based component are props. To access them we use this.props(the local instance)

### Example of A Class Based Component
```js
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>Hello There 2526 56837 26265</div>
    );
  }
}

export default MyComponent;
```

### 2nd Example of A Class-Based Comp
```js
class MyComponent extends React.Component {
  	state = { loaded: false }
  	componentDidMount = () => this.setState({ loaded: true })
  	render() {
    		if (!this.state.loaded) 
				return null
				return <div {...this.props} />
  	}
}

```

- The code above is used so that it can be outputted to DOM but nothing will be rendered

```html
<!DOCTYPE html>
<html>
<head>
	 <meta charset="utf-8">
	 <title>Hello world</title>
	 <!-- Script tags including React -->
	 <script
	src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"
	></script>
	 <script
	src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/reactdom.min.js"></script>
	 <script src="https://unpkg.com/babel-standalone@6/babel.min.js">
	</script>
</head>
<body>
	 <div id="app"></div>
	 <script type="text/babel">
		 class App extends React.Component {
			render() {
				return <h1>Hello from our app</h1>
			}
		 }
	 </script>
	<script src="app.js"></script>
</body>
</html>

```

##### Now it will render
```js
var mount = document.querySelector('#app');
ReactDOM.render(<App />, mount);
```

- I must create an external script called app.js to tell it to the render
