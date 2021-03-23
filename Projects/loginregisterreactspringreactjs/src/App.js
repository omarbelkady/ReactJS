import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons"> 
      {/*      Your 429 Buttons Go Here */}

        <button id="loginBtn" class="active">Login</button>
        <button id="registerBtn">Login</button> 
      </div>
      {/*Your 375 Forms Go Here */}
      <div className="form-group">
          <LoginForm />
          <RegisterForm />
      </div>
      <div className="forget-panel">Your 227243 32 Forgot Panel Goes Here</div>
 
    </div>
  );
}

function LoginForm(){
  return(
      //return <p>The Login Form</p>
      <form action="" id="loginform">
        <label for="username">Your USERNAME</label>
        <input type="text" label="Enter Your Username Please" id="username"/>
        <label for="password">Your PASSWORD</label>
        <input type="password" label="Enter Your Password Please" id="password"/>
        <input type="submit" value="Submit" className="submit" />
      </form>
  )
}

function RegisterForm(){
  return <p>The Register Form</p>
}

export default App;
