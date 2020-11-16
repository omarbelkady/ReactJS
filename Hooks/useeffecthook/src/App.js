import React,{useState, useEffect} from "react";
import "./App.css";

//var bestLangForThePascFB="COBOL";

//I will use a hook instead which will change the State of the variable

//const [nameOfTheStateYouWishToChange, functionWhichWillDoIt] = useState("whatitwasoriginally")

function App() {
  const [progLang, setTheProgLang] = useState("Cobol");

  useEffect(()=>{
    //set the steps what you want the dom to do everytime the page rerenders
    console.log("Page Rendered")
  },[progLang]);

  return( 
    <div className="App" style={{fontSize: 30}}>
      {progLang}
      <button onClick={()=>{
        setTheProgLang("Pascal");
      }}
      >
        {""}

        </button>
        </div>
  );
}
export default App;
