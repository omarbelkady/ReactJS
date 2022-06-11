## Custom Hooks Within React

- Just a util Javascript Function that can be re-used in the React app

Steps: <br />
    - Define it <br />
    - Fill It <br />
    - Access It <br />


```js
let [myVar, setMyVar] = useState(''); //Filling the hook

//Filling the hook
const useMyCustHook = () => {
    setMyVar();
};

//Filling the hook
return [myVar, useMyCustHook];

const [myVar, myMethod] = useMyCustHook()

<button onClick = {myMethod}> Click Here </button>

//How to access the variable within your custom hook

<div> The variable value is {myVar} </div>
```
