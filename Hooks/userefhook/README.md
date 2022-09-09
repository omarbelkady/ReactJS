### The UseRef Hook in React
```js
const varName = useRef(initialvalue);
```

- Enables access to the DOM Element directly so we can manipulate it
- Used to save a value between re-renders in its current property which doesn't cause a re-render while being updated 
- Before I would change and store an input value thanks to useState hook and onChange event handler
- Now I can use the useRef hook to do that all at once

```js
import { useRef } from "react";

function App(){
    const titleRefer = useRef();

    return(
        <div className = "App">
            <input
                ref={titleRefer}
                type="text"
                value={titleRefer.current?.value}
                placeholder="title"
            />
        </div>
    );
}

export default App;
```

### Difference Between useState and useRef

- useState hook rerenders the page whenever the state is updated 
- useRef on the other hand return an object with a current property holding the actual value


### How to add focus to an input

- I can take advantage of the useEffect hook