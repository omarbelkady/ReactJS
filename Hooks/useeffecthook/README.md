### The UseEffect Hook In React
- Determine a set of events that are going to happen everytime that the page rerender
- UseEffect can determine things everytime the page rerenders
- Use property and state to calculate the output. 
- When functional component make a calculation that don't target the output then these calculations are called side effects
- This hook enables be perform side effects
- Side Effects can fetch requests or manipulate DOM elements directly aka reach out to the outside world/data fetching from an API
- When React wants to render a component there is nothing you can do to stop it
- However, I can tell React to add code after rendering the component using the useEffect Hook
- Depending on the arguments I pass in to the useEffect function this can alter the behavior
- Use the useEffect Hook when:
  - you want to fetch data from an API
  - want to read from local storage
  - interact with the browser API
  - schedule a call with setTimeout, setInterval
- Use Effect takes two arguments:
1. callback function which contains the side effect logic
2. Dependency where you can supply an array of dependencies of your choice


### Do something when my dependencies change
```js
useEffect(()=>
{
  console.log("the Effect Hook")
},[placethedependenciesyouwanttotrackhere])
```

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
