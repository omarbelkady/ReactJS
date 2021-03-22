import React from 'react'

export default class FetchRandUser extends React.Component {
    
    state= {
        lovesPolanco: true,
        person: null
    };



    async componentDidMount(){
        //fetch the data here
        const aurl = "http://jsonplaceholder.typicode.com/users";
        //fetch is an asynchronous function and whenever you have asynchronous func you use async and 
        //await. Await is a keyword used to say wait for the asynchronous call I made to the API until it is finished
        const response = await fetch(aurl);
        const mydata = await response.json();
        this.setState ({ person: mydata.results[0], lovesPolanco: false})

    }


    render(){

          {/*Conditionally show some data*/}
        if (this.state.lovesPolanco) {
            return <div>Definitely a 7652626 56837...</div>;
          }
      
          if (!this.state.person) {
            return <div>didn't get a person</div>;
          }
      

        return (
            <div>
                 <div>{this.state.person.name.title}</div>
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
                <img src={this.state.person.picture.large} />
            </div>
        );
    }

}


