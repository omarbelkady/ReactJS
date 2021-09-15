import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
//I create my OnChange Methods outside my constructor before my render
class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            username: '',
            email: '',
            password: '',
            lovesPolanco: ''
        }
        this.changeTheFullName = this.changeTheFullName.bind(this)
        this.changeTheEmail = this.changeTheEmail.bind(this)
        this.changeTheUserName = this.changeTheUserName.bind(this)
        this.changePassword = this.changePassword.bind(this)
        //this.onSubmit = this.onSubmit.bind(this)
    }
    changeTheFullName(ev){
        this.setState({
            fullName: ev.target.value
        })
    }

    changeTheUserName(ev){
        this.setState({
            username: ev.target.value
        })
    }

    changeTheEmail(ev){
        this.setState({
            email: ev.target.value
        })
    }

    changePassword(ev){
        this.setState({
            password: ev.target.value
        })
    }

    Submit(ev){
        //prevents the form from acting in the default way
        ev.preventDefault()

        //the onSubmit event will save all those details and save it in registered
        
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        /*so what do we do when I finish with registered?
                    -------->
            Everything the user typed in the form will be saved in registered when
            the user hits the click event sign up
            so what do I do with registered info...
            I send it to the backen
            sending all the info to the backend means send all the data
            the user has typed in on the front end to the backend
            how do we do this send to the backend I use axios
        */

        //post request send the data to the backend
        //Where do I make post request I send it to the api endpoint meaning I want to send to the server

        //post the data in the registerd object to that endpoint
        axios.post('http://localhost:4000/app/signup', registered)
        .then(res=> console.log(res.data));
        //after this has been send to the backend I want to return this to the signup form

        //had I had a different window to goto I would call the function window
        //window.location='/home'

        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
            <br/>
            <br/>
            <br/>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.Submit}>
                            {/* Field1 */}
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeTheFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />
                             {/* onChange is an event listener changeTheFullNAme */}
                             {/* Field2 */}
                             <input type='text'
                             placeholder='Username'
                             onChange={this.changeTheUserName}
                             value={this.state.username}
                             className='form-control form-group'
                            />
                            {/* Field3: Email */}
                            <input type='text'
                             placeholder='E-mail'
                             onChange={this.changeTheEmail}
                             value={this.state.email}
                             className='form-control form-group'
                            />
                             {/* Field4: Password */}
                             <input type='password'
                             placeholder='Password'
                             onChange={this.changePassword}
                             value={this.state.password}
                             className='form-control form-group'
                            />

                           

                           
                            <div align="center">
                            <input type="checkbox" checked={this.state.lovesPolanco.value}/>
                             {/* Field5: Loves Polanco */}
                             &nbsp; 2526 loves Polanco
                             </div>
                            <br/>
                            <input type="submit" className="btn btn-danger btn-block" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;