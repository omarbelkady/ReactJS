## Components
- StateLess Components aka Called UI Components
  - Receive their data from Props and they pass the down to UI Components  as properties
  - Only are concerned With the UI
  - UI Components do not have state of their own
  - We use functions to create these UI Components as opposed to classes

## Root Component aka App.js
- The Root Components is always at the top of the hierarchy which in our case in App.js and is the container
- The Root Components go fetch its data from a DB via a lifecycle hook and then stores it in the State
- Then the data is passed as a property to the UI Component/Functional Component
- The Clover get its data from Props(App.js) container component. The Clover doesnt need sate
- It is also possible to nest containers within Containers that is absolutely fine

2 Types of Components:
- Containers(have state)
- UI Components(do not have state)
