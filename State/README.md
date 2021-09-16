## State: A Very Important Concept in React

- State is the identity of a component
- It belongs to a specific component
- An example of a state is someone's age 
- You can modify the state ONLY if you own it aka component


### How To Modify the state(Wrong Way)
```js
this.setState{{ val: this.state.val+1 }};
```

### How To Modify the State(Right Way)
```js
this.setState(oldSt => ({ x: oldSt.x + 1 }));
```

### How To Modify the State(Cleaner Way)
```js
this.setState(({ x }) => ({ x: x + 1 }));
```

- To modify the state in a class based component

    - I use setState method

- To give my functional(stateless) component some state:

    - I use the useState hook