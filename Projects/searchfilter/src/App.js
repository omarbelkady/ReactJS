import './App.css';
//importing mock data
import mockdata from './MOCK_DATA.json';
//our data is just an array of objects to display it just place it within a curly brace;


//importing useState to help me filter the data
import {useState} from 'react';

//instead of mapping through basic JSON data I want to map through json data that is filtered

function App() {
  const [theSearchTerm, setTheSearchTerm] = useState("")
  return (
    <div className="App">
      <input type="text" placeholder="Search For Something" onChange={ev => {setTheSearchTerm(ev.target.value)}}/>
      { mockdata.filter((aval)=>{
        if(theSearchTerm == ''){
          return aval;
        }
        else if(aval.first_name.toLowerCase().includes(theSearchTerm.toLowerCase())){
          return aval
        }
      }).map((vals, id)=>{
        return(
          <div className="myuser" key={id}>
            <p>{vals.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App
