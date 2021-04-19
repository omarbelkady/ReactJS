import  React from "react";

//Class Based Component
class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      //data we will fetch from the API
      mydata: [],

      /*
      hasLoaded state checker to notify me when the
       elemens have been loaded from the API endpoint
      
       */
       hasLoaded: false
    }
  }

  //to notify me when the items have been mounted into the DOM
  componentDidMount(){  
    //using the API call fetch method which takes the url as an argument
    //getting the result from the api and converting it to json format
    fetch('http://jsonplaceholder.typicode.com/users/')
    .then(result=>result.json())
    .then(json =>{
      this.setState({
        mydata: json,
        hasLoaded: true
      })
    }).catch((theerror)=>{
      console.log(theerror)
    });

  }
  
  render(){
    var { hasLoaded , mydata} = this.state;

    if(!hasLoaded){
      return <div>The API is loading </div>
    }

    return (
      <div className="App">
        {/*Loop Through The Data that has beeen loaded*/}
        <ul>
          {/*I want to fetch the name, email and the website from the resource*/}
          { mydata.map(idx=>(
              <li key={idx.id}>
                PolancoName: {idx.name} | 429ers Email: {idx.email} | 375ers Website: {idx.website}
              </li>
          ))};
        </ul>
      </div>
    );
    
  }
}

export default App;
