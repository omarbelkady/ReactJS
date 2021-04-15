### The UseEffect Hook In React
- a way to determine a set of events that are going to happen everytime that the page rerender
- Unlike the useState Hook the UseEffect can determine things everytime the page rerenders
- As it is known I use property and state to calculate the output. 
- If the functional component makes a calculation that doesn't target the output value then these calculations are called side effects
- This hook enables be perform side effects
- Side Effects can fetch requests or manipulate DOM elements directly aka reach out to the outside world/data fetching from an API
- I use the useEffect Hook to make API Calls in My APP
- When React wants to render a component there is nothing you can do to stop it
- However, I can tell React to add code after rendering the component using the useEffect Hook
- Depending on the arguments I pass in to the useEffect function this can alter the behavior
- Use Effect takes two arguments:
1. callback function which contains the side effect logic
2. Dependency where you can supply an array of dependencies of your choice
### UseEffect Syntax second parameter is used to alert the user whenever sth changes
```js
import React, { useState, useEffect} from 'react';


export default function EffectHook(){

    //creating a state
    const [mycount, setMyCount] = useState(0);


    /*
    whenever I render my function to the dom this function(useEffect) will automatically execute
    The moment I add an array to my useEffect function as the second argument it will completely change 
    the behavior of my function. This will cause the hook to execute once after the initial rendering.

    Say I supply an array of dependencies e.g. state and props in my useEffect function as my second argument. this will 
    cause the hook to execute once during the initial rendering. Then, it will execute again if I change the property
    or state.

    Say I change the state of my component then the useEffect hook will fire automatically
    */
    useEffect(()=>{
        document.title=`You Click Me ${mycount} times`
    },[props, state]);

    return(
        <div>
            <p>You Have Clicked me {mycount} many times</p>
            <button onClick={()=> setMyCount(mycount+1)}>
            Click Here
            </button>
        </div>

    )

}
```

### I goto my index.js
```js

import React from 'react';
import ReactDOM from 'react-dom';
import EffectHook from './components/EffectHook'

ReactDOM.render(
  <React.StrictMode>
    <EffectHook />
  </React.StrictMode>,
  document.getElementById('root')
);

```

- This will generate an error because I cannot create a component with the name of a hook so I change useEffect to useEffectHook