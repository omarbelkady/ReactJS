### State in React is Just An Object


#### The Use State Hook
- defines a state which is a variable that:
  -whenever changed it rerenders the page so that the page displays the new value

#### Example Of Changing The State
```js
import React,{useState} from "react";


//var bestLangForThePascFB="COBOL";

//I will use a hook instead which will change the State of the variable

//initial value of FavOS is Windows10

function App() {
  const [os,setFavOS] = useState("Windows10");
  return(
        <div className="App">
         {os} {" "} 
         <button 
         onClick={() =>{
           setFavOS("Pintos");
           }}>Change BEST OS</button>  
        </div>
  );
}
export default App;


```