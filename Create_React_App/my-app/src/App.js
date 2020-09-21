import React from 'react';
import Clover from './Clover';

/*This file App.js is called my root component*/
function App() {
  return (
         <div className="App">
            <h1>My First React App</h1>
            <p>Learn to love 746867 like 63526</p>
	  	<Clover name= "Pintos Lover" major="C Architecture" favLang="Pascal"/>
	  	<Clover name="Assembly Lover" major="Low Level Languages" favLang="Assembly" />
         </div>
  );
}

export default App;
