## Higher Order Components

- Incorporates the DRY principle
- Takes a component as an argument and returns a new supercharged one
- Useful for when wanting to create a supercharged component A which takes component B as an argument
- Not related to the State and Props Principle whereby Component Z gets passed props D
- Preserves the component Identity

### Rules

- Useful for code reuse
- i.e. Help us to reuse component logic
- Pure i.e. no side effects
- Never use a HOC within the render method or else you will destroy its pure identity

### Structure:

- Component
- Takes in another component as an argument
- Has the ability to render to the DOM the component you passed to it


### Higher Order Functions

- Functions that take other functions as arguments
-

1. forEach()

- visit each element in the array and run some logic to every element.
- Keeps the array intact

2. .map()

- transforms your array into a new array by executing a chunk of code
- it executes the chunk of element on each element in the array

3. .filter()

- Run a certain block of code logic if any item passes that condition ....
- Place in the new array
- Throw out any elements that do not pass the condition
- Return the new array which holds the elements that passed the condition



### Example

##### hoc.js

```js
import React,  { Component } from "react";


function LogSomeProps(MyComp){

    class NewCompon extends Component{
        componentDidMount(){
            console.log(this.props);
        }

        render(){
            return <MyComponent {...this.props} />;
        }

    }

    return NewCompon;
}

export default LogSomeProps

```


##### Using my hoc in my Greeting component

```js
import React from "react";
import LogSomeProps from "./hoc";

function Greeting(myprops){
    return <h1>Hello there {myprops.name} !!!! </h1>
}

/*
passing Greeting component as an arg so that 
I can see Greeting component props within 
the Browser
*/
export default LogSomeProps(Greeting);

```


##### App.js file


```js
import React from "react";
import Greeting from "./Greeting";

function App(){
    return(
        <div className="App">
            <h1>Hello My Friend</h1>
            <Greeting name="Kevin" />
        </div>
    )
}
```
