### Lifecycle Methods In React

#### Component Lifecycle Phases
- There are three phases in a Component Lifecycle
    1. Mounting
    2. Updating
    3. Unmounting
1. In the Mounting phase react will call
    - the constructor()
    - static getDerivedStateFromProps
    - render()
    - componentDidMount()

### The Mounted.js file
```js

import React, { Component } from 'react';


export default class Mounted extends Component{
    
    constructor(props){
        super(props)
        //creating a simple
        this.state = { favColor: "Blue"}
        console.log("You just fired your constructor!");
    }

    static getDerivedStateFromProps(props, thestate){
        console.log('getDerivedStateFromProps just fired');
        return { favColor: props.myfav};
    }

    render(){
        return(
            console.log("You just fired your render!");
            <div>
                <h1>{ this.state.favColor}</h1>
            </div>
        )
    }
    /*
    as you can see when the component is mounted to dom. React will first call the constructor method then call the render method

    What if I want to output something(aka modify the state) after the constructor but before the render method?

    I use the getDerivedStateFromProps method


    componentDidMount
    */
}
```

### The index.js file
```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

//React Router
import { BrowserRouter } from 'react-router-dom'


//importing the component
import Mounted from './Api/Mounted'


//rendering
ReactDOM.render(
  <React.StrictMode>
    <Mounted myfav="Green"/>
  </React.StrictMode>,
  document.getElementById('root')
);
```
### componentWillMount Lifecycle Hook

- A PreProcess Lifecycle hook meaning it executes before the render method
- aka fires before the initial render

### componentDidMount Lifecycle Hook

- A PostProcess Lifecycle Hook meaning it executes after the render method
- ComponentDidMount Lifecycle Hook is fired immediately after the component is mounted in the UI
- ComponentDidMount only executes after the first render only on the Client Side

### componentWillReceiveProps Lifecycle Hook

- fires when the component received new props


### I goto my Mounted.js File
```js
import React, { Component } from 'react';


export default class Mounted extends Component{
    
    constructor(props){
        super(props)
        //creating a simple
        this.state = { favColor: "Blue"}
        console.log("You just fired your constructor!");
    }

    static getDerivedStateFromProps(props, thestate){
        console.log('getDerivedStateFromProps just fired');
        return { favColor: props.myfav};
    }

    //I place it here so that react runs it before rendering the data to the dom
    componentDidMount(){
        console.log("The Component did Mount to the UI Now Go Code 26265");

        setTimeout(()=>{
            this.setState({favColor: "Red"})
        },1000)
    }

    render(){
        return(
            console.log("You just fired your render!");
            <div>
                <h1>{ this.state.favColor}</h1>
            </div>
        )
    }
  
    //now after the render method react automatically calls the componentDidMount lifecycle hook if it is not defined
}
```

### The Updating Phase in a React Component Lifecycle
- We say we have updated a component whenever you modify the component's state or property
- There are five built-in methods that ReactJS calls when a component is updated
1. The first hook React calls when updating the component is:
    - getDerivedStateFromProps()
2. The second hook React calls is shouldComponentUpdate
    - shouldComponentUpdate()
    - this hook is fired before rendering the new state or props
3. The third hook React calls is componentWillUpdate
    - this hook fires immediately before rendering new props or state
4. The fourth method called in this process is:
    - render()
5. The fifth hook called:
    - getSnapshotBeforeUpdate()
6. The sixth hook React calls:
    - componentDidUpdate()

- The render is always called no matter what however the other methods remain optional

2. 
- The shouldComponentUpdate react lifecycle hook return type is a boolean.
- We can return a boolean val which specifies whether or not React should continue or not continue with the rendering


#### The Update Component
```js
import React, { Component } from 'react'

export default class Updating extends Component {
    // FYI when compon gets mounted to the UI React first calls the constructor
    constructor(someprops){
        super(someprops)
        this.state = { favTA: 'DJ'}
        console.log(this.state.favTA);
        console.log('This is firing from the constructor method')
    }

    //used when you do not want react to render the new component when there is a change in State/props:
    shouldComponentUpdate(){
        return false;
    }

    changeBest82=()=>{
        this.setState({favTA:'Chen7864'});
        //print the updated State
        console.log(this.state.favTA);
    }
    render() {
        return (
            <div>
                <h1>The Best TA is {this.state.favTA}</h1>
                <button onClick= {this.changeBest82}>Change Best TA</button>
            </div>
        )
    }
}
```

#### I goto my index.js and import the Update Component
```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

//React Router
import { BrowserRouter } from 'react-router-dom'


//importing the component
//import Mounted from './Api/Mounted'
import Updating from './Api/Updating';


//rendering
ReactDOM.render(
  <React.StrictMode>
    {/*<Mounted myfav="Green"/>*/}
    <Updating />
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### The Fourth Hook in the Updating Phase of A Component Lifecyle 
##### getSnapshotBeforeUpdate
- This hook is very special because it gives me access to the props and state before the component is updated
- This is where we check the values of the component before the update
- It has two parameters the first is the previous Property and second is the previous State


##### I goto my Updating.js file

```js
import React, { Component } from 'react'

export default class Updating extends Component {
    // FYI when compon gets mounted to the UI React first calls the constructor
    constructor(someprops){
        super(someprops)
        this.state = { year: '2019'}
        console.log(this.state.year);
        console.log('This is firing from the constructor method')
    }

    /*
    when the component is mounted to the UI/DOM it will call the componentDidMount Lifecycle Method
    I want this function to execute 4 seconds after the component has been mounted to DOM
    */
    componentDidMount(){
        setTimeout(()=>{
            this.setState({year: '2020'})
        },4000)
    }

    getSnapshotBeforeUpdate(previousProp, previousState){
        console.log('getSnapshotBeforeUpdate Method Called',previousState)
        document.getElementById('before').innerHTML = "Before the update, the previous year was: "+previousState.year;
        //failure to have a return statement in this lifecycle hook will raise an error saying this function must return something
        return previousState;
    }

    //consequently since I implemented a getSnapshotBeforeUpdate Lifecycle Method I must have a componentDidUpdate Lifecycle Method
    componentDidUpdate(){
        document.getElementById('after').innerHTML = "After the update, the current year is: "+this.state.year;
    }

    changeYear=()=>{
        this.setState({year:'2021'});
        //print the updated State
        console.log(this.state.year);
    }
    render() {
        return (
            <div>
                <h1>The Current Year is {this.state.year}</h1>
                <h1 id="before"></h1>
                <h1 id="after"></h1>
                <button onClick= {this.changeYear}>Change Year</button>
            </div>
        )
    }
}
```


#### ComponentDidUpdate Lifecycle Hook: Called when a component is updated called after the render method

- I goto my Updating.js file
- The componentDidUpdate hook is used to access the previous property and previous state of a component
- This lifecycle hook is executed after the render method

```js
import React, { Component } from 'react'

export default class Updating extends Component {
    // FYI when compon gets mounted to the UI React first calls the constructor
    constructor(someprops){
        super(someprops)
        this.state = { level: 'noob'}
        console.log(this.state.year);
        console.log('This is firing from the constructor method', this.state.level)
    }


    //consequently since I implemented a getSnapshotBeforeUpdate Lifecycle Method I must have a componentDidUpdate Lifecycle Method
    componentDidUpdate(previousProperty, previousSate){
        document.getElementById('after').innerHTML = "After the update, the current year is: "+this.state.year;
    }

    render() {
        return (
            <div>
                <h1 style={
                    {
                        margin: 'auto',
                        width: '50%',
                        padding: 20,
                        marginTop: '10%'
                        border: 'solid 1px #e5e5e5',
                        textAlign: 'center',
                        fontSize: 18 

                    }}>
                    <div id="after"></div>
                    </h1>
            </div>
        )
    }
}
```

#### The unmounting phase of React Component: The last phase of the react component
- Only 1 method in this phase:
1. componentWillUnmount() hook allows me to execute react code when the component gets destroyed or unmounted from the dom element
2. When I remove or destroy my component from the UI this hook will automatically execute
- the componentwillunmount lifecycle is the last hook called before I remove a component from the UI/DOM and is used to perform cleanup
3. I create a file called Unmount.js
```js
import React, { Component } from 'react'

export default class Unmount extends Component {
    


    state = {display: true};
    
    delete = ()=>{
        this.setState({ display: false})
    }

    render() {

        let comp;
        if(this.state.display){
            //when The component is mounted it will display the component and when the button is clicked it will remove aka destroy the component from the UI
             comp = <ComponentOne />
        }
       

        return (
            <div>
                { comp }
                <button onClick= {this.delete}>Delete This Button</button>
            </div>
        )
    }
}

class ComponentOne extends React.Component(){
    componentWillUnmount(){
        console.log("The component will be unmounted")
    }
    /*
    if I do not have a render method this will raise an error
    Every component in React must have a render method
    */
    render(){
        return <h1>Unmounting Component</h1>
    }
}
```

4. I use this file inside the index.js file
```js

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

//React Router
import { BrowserRouter } from 'react-router-dom'


//importing the component
//import Mounted from './Api/Mounted'
import Unmount from './Api/Unmount';


//rendering
ReactDOM.render(
  <React.StrictMode>
    {/*<Mounted myfav="Green"/>*/}
    <Unmount />
  </React.StrictMode>,
  document.getElementById('root')
);
```
