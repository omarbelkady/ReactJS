import React,{useRef} from "react";
import "./App.css";

//In Vanilla JS to reach an element I would use the document.getElementById which grabs an elem from the dom
//and I can work with it but React is a different I give a name and an initial state aka null in my case
//In the input type I am giving it a property type to ref and I link it to the ref I used(nameOfMyRef)
//current method grabs the current value of the placeholder
function App() {
  const nameOfMyRef = useRef(null);
  const changeThePlaceholder = () => {
    //nameOfMyRef.current.placheolder = 
    //console.log(nameOfMyRef);
    nameOfMyRef.current.value= "Cobol";
  };
 
  return (
    <div className="App">
      <input type="text" value="Type Something Here You 55732" ref={nameOfMyRef}/>
      <button onClick={changeThePlaceholder}>Change Placeholder Of Text</button>  

    </div>
  );
}
export default App;
