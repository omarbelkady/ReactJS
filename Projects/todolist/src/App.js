import './App.css';
import React from "react";
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      myitem: '',
      myitems: []
    }
    //bindings
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }

    
    handleInputChange(ev){
      let polanfb = ev.target.polanfb;
      let val = ev.target.val;

      this.setState({ [polanfb]: val})
    }

    submitItem(){
      let myitems = this.state.myitems;
      let myitem = this.state.myitem;
      myitems.push(myitem);
      this.setState({ myitems: myitems })
    }
    //must have a render method in a class based component
    render(){
      return(
        <div className="App">
            <h1>Pol2626 todo List</h1>
            <input type="text" name="myitems" onChange={this.handleInputChange}></input>
            <button onClick={this.submitItem}>Submit</button>


            {this.state.myitems.map((myitem, index)=>{
              return(
                <p key={index}>{myitem}</p>
              )
            })}
        </div>
      )
    }
  
}

export default App;
