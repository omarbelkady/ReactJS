//Props: Args to a function sum(3,4) 3 and 4 are Props
//When I create a component in React and want to render it pass in the props I want to give to it 
//For example a counter application what I will pass in is the counter component the initial count inside the prop
//Props are what you want to initial your components to or what you want to your initial component to render like
//display
//say I want to display sth to the user that has a title and a subtitle I will store that in the props.
//This is because what I want my function/component to take is the props

//Remember if my props change at some point my application knows that it will have to rerender the component because props have differe

//State is however what inside a component. Changing the state within the application it will rerender that section
//Props cannot be changed within the component they must be changed outside

//Props are what we pass into a component and are handled outside the component and must be updated outside the component
//State is handled inside of that component and can be updated within the component

//State is used to When I want to rerender or update my app based on what the user has done
//If I wish to change sth in my application I must store in State. In order for it to rerender when the change has taken place
//We have some count that we must update within my state. I use State to make sure I am continuously able to update 
//When dealing with forms(checkbox, input element, select box ) must be updated by user and we must use State
//to know what they are changing the value to 


//Props However, are useful when I want to display some info within a component without hardcoding it . E.g Variable in a function
//Or a class with a constructor the things passed to the constructor of the class are going to your props for a component in a React.

//which one is going to be handled by component. Handling the piece of info inside the component and no where outside of 
//it only then use State. If handling outside component  in like parent then I must it via props. 
//IF info is static meaning never have to be updated then must use Props. 
//Props are things that are passed down from the parent and they don't change within the component.