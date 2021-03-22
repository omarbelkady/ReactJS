import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export default class App extends Component {
  state = {
    stillLoading: true,
    image: null,
  };


  async componentDidMount(){
    const myURL = "https://jsonplaceholder.typicode.com/photos";

    const myResp = await fetch(myURL);
    const data = await myResp.json;
    this.setState({image: data.results, stillLoading: false})
    console.log(data);
  }
  render(){
    return( 
      <div>
        {this.state.stillLoading || !this.state.image ? (
        <div> loading </div>) : (
            <div>
              <div><li><li>{this.state.image.id}</li>{this.state.image}</li></div>
            </div>
        )
        
        }
    </div>
   )
  }

}
    
