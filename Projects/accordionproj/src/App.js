
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Accordion from "./components/Accordion";

/* I want to pass in some props to my Accordion
The first prop I will pass in is the title 
*/
function App() {
  return (
    <div className="App">
      <Accordion title="What is the best game out there?"
      content="PUBG is the best game out there which I highly recommend you play on mobile not on PC. Pubg on PC is trash however GTA5 and COD get the trophy."/>

      <Accordion title="What is the best programming language?"
      content="There isn't one. Its all catered to the specific individual and what he wants to build"/>

      <Accordion title="How much math do you need to know to be a programmer"
      content="<p>Some basic algebra. If someone says you need higher level mathematics they are lying to you. It helps to know but it is not a requirement.<p>
      <br>
      <p>2526 56837 727225 263 35<p>
      "/>
    </div>
  );
}

export default App;
