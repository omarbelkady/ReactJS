import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import FetchRandUser from './components/FetchRandUser';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <FetchRandUser />
      </div>  
    );
  }
 
}

export default App;
