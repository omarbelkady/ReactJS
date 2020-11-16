### The UseEffect Hook In React
- a way to determine a set of events that are going to happen everytime that the page rerender
- Unlike the useState Hook the UseEffect can determine things everytime the page rerenders

### UseEffect Syntax second parameter is used to alert the user whenever sth changes
```js
useEffect(()=>{
    console.log("What you want to call goes here!");
}, [number])
```