### The UseEffect Hook In React

- Determine a set of events that are going to happen everytime that the page rerender
- happens after the component has rendered to the DOM
- UseEffect can determine things everytime the page rerenders
- i.e. telling the component what to do after render
- hook runs both after every update and after the first render
- Use property and state to calculate the output. 
- When functional component make a calculation that don't target the output then these calculations are called side effects
- This hook enables be perform side effects
- Side Effects can fetch requests or manipulate DOM elements directly aka reach out to the outside world/data fetching from an API
- Side effects are essentially operations that take place outside the component's render cycle
- When React wants to render a component there is nothing you can do to stop it
- However, I can tell React to add code after rendering the component using the useEffect Hook
- Depending on the arguments I pass in to the useEffect function this can alter the behavior
- Use the useEffect Hook when:
  - you want to fetch data from an API
  - want to read from local storage
  - interact with the browser API
  - schedule a call with setTimeout, setInterval
  - DOM Manipulation
  - Subscriptions
  - Cleanup Tasks
- Use Effect takes two arguments:
1. callback function which contains the side effect logic
2. Dependency where you can supply an array of dependencies of your choice

- Hook is a combination of:
  - componentDidMount Lifecyle Method
  - componentDidUpdate Lifecycle Method
  - componentWillUnmount Lifecycle Method
React Class Lifecycle Methods


### Syntax Of UseEffect

```js
useEffect(<function>, <dependency>)
```

### UseEffect In Detail

```js
import React, {useEffect} from "react";

function MyComponent(){
  useEffect(()=>{
    /*Side effect code here... runs after every render of a component*/

    //clean up function
    return() =>{
      /** 
       * runs before the components unmounts or before the next re-render, 
       * depends on the dependencies
       * 
      */
    };
  }, [dependency1, dependency2, etc.]);

  return <div> ... </div>;
}
```


### Part II explanation of function syntax in detail

```js
useEffect(< function/>, <dependency/>);

/*
first argument is the effect function called after the component
has rendered and its where you place the code for your side effect

second argument is the array of dependencies optional 
Case 1- Empty: if the dependency array is empty the effect will only run once

Case 2- if the dependency array is not provided, the effect will run after every render of the component

Case 3- If the dependency array contains variables, the effect will only be 
re-executed when any of those variables change
*/

```

### Clean Up Function

```js
useEffect(<function>, <dependency>);
```

- Optional and used to perform any cleanup or resource disposal
- Used when the component unmounts or before running the next side Effect 
- e.g. for setInterval it's cleanup function is clearInterval()



### Do something when my dependencies change
```js
useEffect(()=>
{
  console.log("the Effect Hook")
},[placethedependenciesyouwanttotrackhere])
/*
callback will run when any of the values in the array changes
an array of no dependency means the callback will be called when mounting
*/
```


### Risks 

- modifying the state within the hook that consumes the state 
- i.e. infinite render

### Do Some Cleanup for me

- i.e. when my component unmounts from the DOM
- It is necessary to not have to experience memory leaks within your app

```js

useEffect(()=>
{
  console.log("the Effect Hook");
  return () =>{
    console.log("Performing some cleanup")
  }
},[placethedependenciesyouwanttotrackhere])
```


### Data fetching from An API

```js
```js
useEffect(()=>
{
  console.log("the Effect Hook")
},[placethedependenciesyouwanttotrackhere])
```

### Do Some Cleanup for me

- i.e. when my component unmounts from the DOM
- It is necessary to not have to experience memory leaks within your app



### Basic Data Fetching from an API
```js

const fetchTheDataForMePlease = async() => {
  const response = await axios.get("https://swapi.dev/api/people");
  const {resuls} = response.data;
  setData(resuls)
}


useEffect(()=>
{
  fetchTheDataForMePlease()
},[])
```
