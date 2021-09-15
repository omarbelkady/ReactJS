## Higher Order Components

- Incorporates the DRY principle
- Takes a component as an argument and returns a new supercharged one
- Useful for when wanting to create a supercharged component A which takes component B as an argument
- Not related to the State and Props Principle whereby Component Z gets passed props D
- Preserves the component Identity

### Rules

- Useful for code reuse
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
