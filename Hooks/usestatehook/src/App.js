import React,{useState} from "react";


//var bestLangForThePascFB="COBOL";

//I will use a hook instead which will change the State of the variable

//const [nameOfTheStateYouWishToChange, functionWhichWillDoIt] = useState("whatitwasoriginally")

function App() {
  const [bestLangForThePascFB,setTheBestLangForThePascFB] = useState("Java");
  return(
  <div className="App">
    {bestLangForThePascFB} {" "}
    <button 
      onClick={() =>{
        setTheBestLangForThePascFB("PASCAL");
      }}
      > CHANGE THE BESTPROGLANG OF 27-37532
      </button>
  </div>
  );
}
export default App;


