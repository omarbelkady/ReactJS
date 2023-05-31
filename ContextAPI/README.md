## Context API In React

- How To Use The UseContext API In React

1. Create The Context
2. Provide The Context
3. Consume The Context


### Creating the Context

```js
import { createContext } from "react";

const myAppContext = createContext();

export default myAppContext;

```


### Providing the Context

```js
import "./styles.css"

import Header from "./components/Header";

import Body from "./components/Body";

import myAppContext from "./Context/myAppContext"

const { Provider } = myAppContext();


export default function App(){
    return(
        <Provider value="Coding is fun">
            <div className="App">
                <Header />
                <Body />
            </div>
        </Provider>
    )
}

```



### Consuming the Context

```js
import React, { useContext } from "react";
import myAppContext from "./Context/myAppContext"


const HiThere = () => {

    /*
        hook enables you to consume the nearest context value provided by 
        a Context. Provider component higher up in the component tree. It 
        provides a way to access shared data without passing props through intermediate components.
    */
    const myWebSName = useContext(myAppContext);

    return(
        <div>
            Welcome To The {myWebSName} club
        </div>
    );
};


export default HiThere;

```
