### Data Handling

  

#### How To Deal With Data Having State

- I use a functional component which doesn't have a state and give it state by using a hook
- I use the useState hook in functional components
- State enables your component to rerender when there it detects changes in your data

  
  

```js
import  React, { useState } from  'react';
function  Counter()
{
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>Count: {count}</p>
				<button  onClick={() =>  setCount(count + 1)}>Increment</button>
		</div>
	);
}
```
  
<br />

#### Pass Data From Parent Component To Child Component

```js
function  ParentComponent() {
	const  data = 'Hello from parent!';
	return <ChildComponent  dataProp={data} />;
}
function  ChildComponent(props) {
	return <p>{props.dataProp}</p>;
}
```
<br />

#### Retrieve Data from a resource i.e. from an api
```js
import  React, { useState, useEffect } from  'react';
import  axios  from  'axios';
function  DataFetching() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('https://api.example.com/data')
			.then(response  =>  setData(response.data))
			.catch(error  =>  console.error(error));
	}, []);

	return (
		<ul>
			{data.map(item  => <li  key={item.id}>{item.name}</li>)}
		</ul>
	);
}
```

  
  

#### Managing Forms and User Input

- React handles form elements and user input by binding form fields to component state.
- We use controlled components to ensure that React manages the form state.


```js
function  FormExample() {
	const [inputValue, setInputValue] = useState('');
	const  handleSubmit = ev  => {
		ev.preventDefault();
		console.log('Submitted:', inputValue);
	};
	return (
		<form  onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={ev  =>  setInputValue(ev.target.value)}
			/>
			<button  type="submit">Submit</button>
		</form>
	);
}
```
