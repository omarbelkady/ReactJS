### Redux

- Redux is a central data store for all the application data
- Any component within my application can access data from the central data store
- Dealing with state management is very easy to cope with
- Denoted as an object which represents the global state of the application
- Uses Functional Programming rules such as: I cannot directly modify the state directly
- 3 Important Ideas in Redux: Store, Action, Reducer
- Inspired By Flux(architectural pattern and library)
- Redux Cycle: Action Creator ==> Action ==> Dispatch ==> Reducers ==> Store
- Redux in a sentence:
  1. To change the state of my redux application I make a call to the action creator.
  2. The action creator outputs an action.
  3. This action gets fed to the dispatcher.
  4. The dispatcher forwards the action to the reducer.
  5. This reducer renders the new state.
- Redux is used to be the big boss of State in a large Scale Application

### Important People in Redux To Remember
1. Store: person who houses the state of the reducers 
2. Action: person aka function who returns an object.. Object must contain the name of action aka type
3. Reducer: person aka function that updates the state depending on the action
4. Dispatcher


```js
//I cannot do this. This is unacceptable because I directly modifying the state
store.currentUser = { name: "cstsffbandcobollover"}
```

```js
//Instead I have to create a function aka a reducer which does the modification.
//The function take the store as an argument and returns the updated Store
//I use below the spread operator to create a copy of the store
//
function reducer(store,action){
  const updated = { ...store};
}
```

#### Flux Structure(This was where Redux was inpired from)

- In Flux there have two properties:
  - type: description of what is happening in your application e.g. bugAdded or bugRemoved
  - payload: js object which contains all the data about an action

```js
{
  type: "add429AsTheBestClassEver",
  payload: {
    description: "Best Class is actually introduction to Pascal and LLP"
  }
}
```

#### What is a Reducer in Redux?

- A Reducer is a function that takes the current instance of the store and action.
- This function in Redux MUST BE PURE(meaning any input I supply it will always return the same output of that specific input)
- A Reducer has two parameters: the current state and an action
- The job of a reducer is to output the new state based on the supplied action
- An action is a thorough description of what just happened in the store aka object(user login, user logout, adding item to shopping cart)
- Based on the supplied action the reducer will automatically know which property of the state it should update
- Every Reducer is responsible for a specific slice in a redux store
- Reducer can be considered as Event Handlers in JS

##### Example Of A Reducer In JS

```js
//Have an id so that every bug has its own unique id when submitting a ticket to the db
let lastId = 0;
//initial state of my reducer is undefined if I do not supply it with the empty array
//This is so that when Redux finds an empty state it will reinitialize the state to an empty array
function reducer(state=[], action){
  if(action.type === 'newBug'){
    return [
      ...state,
      {
        id: ++lastid,
        description: action.payload.description,
        resolved: false
      }
    ];

  }
  else if(action.type === 'bugRemoved'){
    return state.filter(bug=> bug.id !== action.payload.id);
  }
  return state;//used so that to prevent our system from blowing up if the title of our action is nonexistant
}
```

#### What is a Store in Redux?

- Single JS Object that houses my application state which represents what just took place aka events in JS
- We cannot set the state of a Store In Redux we can only get the State. To Set the state of a Redux Store I must dispatch an action

#### What is An Action in Redux?

- An Action can be regarded as an Event. It is a JS Object that describes what just happened in your application.
- An Action takes two propertys a type and a description
- The type property is what Redux enforces to supply to it in your object. Failure to supply the property will raise an error
- For the type property we can use only data types that are serializable aka String or Integer. Better use a string to be more descriptive
- The description property is the data associated with the action. This is used so that when the user types something in the textbox e.g. to add a bug I store the value in the description property.

```js
{
  type: "ADD_BUG",
  description: "2526 must listen to TS, be a DJ 32, code low level, take 27-375, give more advice 27-429(his fav class) and watch barbie."
}
```

#### Why do we have to dispatch actions in Redux

- Action Dispatching is like an entry point to the store. By dispatching actions I send every action through the same entry point
- A central place is supplied to us by default by Redux which enables us to control what should happen everytime the user does sth

##### Some Examples Of What we can do at the central place

- Log Every Action
- Implement Undo and Redo Mechanisms


#### Steps to Take To Create A Redux App

- Design the store
- Define the Actions(What you permit the user to do whilst being in your application)
- Create 1 or More Reducers
- Setup the store with respect to your reducer


#### Hpw To Install Redux To your Application

```bash
npm i redux@4.0.5
```

#### State

- When using Redux, we store our application state inside a JS object called a Store
- The store is accessible by all parts of the UI

#### The component Structure of Our React Application

```

Top Of The Hierarchy: App.js
Attached to the Root Component is Blog Component and Homepage Component
Blog Has Two Components: Latest Blogs and Comments
Homepage Has Two Components: Sidebar and Main Content

```

#### What I want

- I want to show the latest blogs on my Blogs and I want to show on the sidebar also
the latest blogs as well

#### Sharing Data Bottom Line

- I want to share the latest data between Sidebar and Latest Blogs

#### How Can This Be Done With Data Passed To Blogs but I want to share with the Sidebar in Homepage

1. Go To My Blog Component and reach out to grab data from an external source
2. Store it in the state of the Blog Component 
3. pass it down as props to Latest Blogs and Comments.

#### Now How can I send the data to my Sidebar which is in the Homepage Component?

- do I have to rewrite the same code? NO!

1. I use Redux which is the central data store and can help me send data from one component to the other. 
2. This data stored in the data store is going to be shared between components
3. So if Blog Component wants data(Latest Blogs) it can reach to the central data store(Redux)
 and listen to it and grab the data and pass it down to the component (Blog)
4. If Sidebar wants the latest posts as well it can reach out to the Redux Central Store and grab the data.

#### How Does The Architecture of Redux Look Like
![redux](https://user-images.githubusercontent.com/31806568/98481240-371aab00-21f9-11eb-8fc1-3f888bb40490.png)

If in a component I want to access some data, the component subscribes to changes to that
data, then redux passes the component of the data as props to the component. This gives me
access to the data.

So If I want to make any changes I cannot just go and tell react to change it. There is a process
I must follow for this to happen to ensure that my application is predictable.

1. Come up with a change
2. Dispatch an action(describe the changes I want to make e.g. addPost to add a new item
to the data )
3. With the action dispatched, I can pass along an optional payload(any kind of data I
want to pass along the action). I pass along the data of the new post along with the dispatch
4. Once the action is dispatched the action is passed to a reducer. A reducer takes an
 action as an input and looks at the type and knows that it is a addacstsfpost action
5. The reducer takes the data given to it and goes to the central data store aka
the state and updates.

#### Example Of A Redux Store
```js
//I use this as my cdn: https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0-rc.1/redux.js
const { createStore } = Redux;
/*I pass in a reducer to the store to make the two
are linked together. A reducer is just a function
that interracts with the store
*/

const initState = {
  todos: [],
  posts: []
}
/*The first time the reducer fires it will not know
what state was passed in and take initState as the
default value for the state
*/
function myReducer(state=initState, action){
  console.log(action, state);
}

const store = createStore(myReducer);

//1: Create the action
const todoAction = {type: 'ADD_TODO', todo: 'buy a cobol textbook'};

//2: Dispatch the action
store.dispatch(todoAction);
```
