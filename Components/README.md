## Components
- Strict Rule For Components:
   - All Components must have a render method 
- StateLess Components aka Called UI Components
  - Receive their data from Props and they pass the down to UI Components  as properties
  - Only are concerned With the UI
  - UI Components do not have state of their own
  - We use functions to create these UI Components as opposed to classes

## Root Component aka App.js
- The Root Components is always at the top of the hierarchy which in our case in App.js and is the container
- The Root Components go fetch its data from a DB via a lifecycle hook and then stores it in the State
- Then the data is passed as a property to the UI Component/Functional Component
- The Clover get its data from Props(App.js) container component. The Clover doesnt need sate
- It is also possible to nest containers within Containers that is absolutely fine

2 Types of Components:
- Containers(have state)
- UI Components(do not have state)

### Example of A React Component
```js
class App extends React.Component{
	render(){
		return <h1>Hello There 2526 56837 26265</h1>
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
