## Hooks
- A hook is a React Component making a call to a specific function within your application
- Also a hook is a function that lets hop into the State and lifecycle from a functional componet
- Hooks are not operational within a class instead they allow us to use React features without having to create a new class
- Every hook starts with the prefix "use"


####  The useState Hook
- This hook is used so that it can enable you to have a certain state within your functional component
- The way its used is by passing as an argument the initial state to the function(useState) and it outputs the current state
- However, another function must be present to update the value of the state because you must remember to never update the state directly

####  The useEffect Hook
- This hook is used to perform side effects from a functional component
- This hook is similar to the lifecycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount 
- The useEffect is a postprocess hook meaning run the effect function AFTER you perform the changes to the DOM
- This effect hook has access to the state and props because this hook is declared within the component
- A useEffect is ran after we render to the DOM


### When To Call A Hook
- You only want to call a hook at the very high level. Do not call a hook
	- when it is a function within a function aka a nested function
	- when you are using a condition
	- within a loop
- Call A hook also from a React functional component NOT from a React regular JS function
