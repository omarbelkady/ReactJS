### Conditional Rendering



#### && Conditional Rendering
```js
const WrapperClass = ({showTheButton}) =>
<>
    <SuperCoolTextBox/>
    {showTheButton && SuperCoolButton}
</>
```

#### Ternary Conditional Rendering
```js
const WrapperClass = ({showLoginDetails}) =>
    showLoginDetails ? <Login /> : <Signup />
```
