import React, { useState } from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';


function App() {
  const [registrationFormStatus, setRegistrationFormStatus] = useState(false);
  //register the click method and I must monitor the click event by using the onClick event handler

  //creating the properties for login and Register
  const loginProperty = useSpring({
    left: registrationFormStatus ? -500 : 0,
    //opacity: registrationFormStatus ? 0 : 1
  });

  const registerProperty = useSpring({
    right: registrationFormStatus ? 0 : 500,
    //opacity: registrationFormStatus ? 1 : 0
  })

  const loginButtonsProperties = useSpring({borderBottom: registrationFormStatus ? 'solid 0px transparent': 'solid 2px #1059FF'})

  function loginClicker(){

    setRegistrationFormStatus(false);
  }

  function registerClicker(){
    setRegistrationFormStatus(true);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons"> 
      {/*      Your 429 Buttons Go Here */}

        <animated.button onClick={loginClicker} id="loginBtn" style={loginButtonsProperties}>Login</animated.button>
        <button onClick={registerClicker} id="registerBtn">Register</button> 
      </div>
      {/*Your 375 Forms Go Here */}
      <div className="form-group">
          <animated.form action='' id='loginform' style={loginProperty}><LoginForm/></animated.form>
          <animated.form action='' id='registerform' style={registerProperty}><RegisterForm/></animated.form>
      </div>
      <animated.div className="forget-panel" style={loginProperty}>Your 227243 32 Forgot Panel Goes Here</animated.div>
 
    </div>
  );
}

function LoginForm(){
  return(
      //return <p>The Login Form</p> react.fragment is called a wrapper class
    <React.Fragment>
        <label htmlFor="username">Your USERNAME</label>
        <input type="text" label="Enter Your Username Please" id="username"/>
        <label htmlFor="password">Your PASSWORD</label>
        <input type="Password" label="Enter Your Password Please" id="password1"/>
        <input type="submit" value="Submit" className="submit" />
    </React.Fragment>
  )
}

function RegisterForm(){
  return(
      <React.Fragment>
        <label htmlFor="fullname">Your Full Name</label>
        <input type="text"id="fullname"/>
        
        <label htmlFor="email">Your Email </label>
        <input type="text"id="email"/>
        
        <label htmlFor="Password">Your Password</label>
        <input type="text"id="password"/>

        <label htmlFor="Confirm Password">Confirm PASSWORD</label>
        <input type="text" id="confirmpassword"/>
        <input type="submit" value="Submit" className="submit" />
      </React.Fragment>
  )
}

export default App;
