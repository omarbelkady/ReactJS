## Forms



#### Controlled Inputs in React using the React.Component library
```js
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    

   // I must bind the handleChange method to the state
   this.handleChange = this.handleChange.bind(this)
  }
  
  //anytime we change anything in my form this function runs
  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```
