### Login And Register Form Using:
- ReactJS
- React Spring Library For Animations

### Important Parts of the Form You Must Remember:
- Container
- Login Register Wrapper
- Nav Buttons
- Form Group
- Login Form
- Register Form

### What this looks like on code
```js
<div class="container">
    <div className="login-register-wrapper">
        <div className="nav-buttons">
            <button id="loginBtn" className='active'>Login</button>
            <button id="registerBtn" className=''>Register</button>
        </div>
        <div className="form-group">
            <form action="" id="loginForm">login</form>
            <form action="" id="registerForm">register</form>
        </div>
        <div id="forgot-panel"></div>
    </div>
</div>
```


- I goto my public/index.html file and after the root id attribute given to the div tag i add a class
- attribute and give it a value of container