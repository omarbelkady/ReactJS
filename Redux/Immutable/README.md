## Immutability in Redux
- Most strings in JS are immutable when using the let keyword
- Objects on the other hand, can be mutated directly
- Application Behavior more predictable
- Very Fast in Detecting Changes e.g. State so that it rerenders the DOM
- Concurrency benefit

### Immutability Downsides
- When An Object is Changed all the values must be copied to the new object 
    - which will rerender to the DOM will impact performance
- Memory Issues when copying when the number of objects is e.g. >1000


### BOTTOM LINE FOR REDUX:
- Never Mutate Data



### Const Object Misconception

- When declaring a const object in JS we are not creating an immutable object

```js
const favNelanActivities = {};
favNelanActivities.favClass= "CS375";
//favNelanActivities = {};
```

- I cannot however set the favNelanActivities to a different object like on line 13 that is illegal