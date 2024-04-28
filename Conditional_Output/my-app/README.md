### Conditional Rendering



#### && Conditional Rendering
```js
const WrapperClass = ({showTheButton}) =>
<>
    <SuperCoolTextBox/>
    {showTheButton && SuperCoolButton}
</>
```

<br />

#### Ternary Conditional Rendering
```js
const WrapperClass = ({showLoginDetails}) =>
    showLoginDetails ? <Login /> : <Signup />
```

<br />

### Example 1 - Based on a boolean condition

```js
import React from 'react';

const Component = () => {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in to continue.</p>}
    </div>
  );
};

export default Component;
```

<br />

### Example 2 - Based on State


```js
import React from 'react';

const MyComponent = () => {
    const [isToggleOn, setToggleOn] = useState(true);

    const handleClick = () => {
        setToggleOn(!isToggleOn);
    };

    return (
        <div>
        <button onClick={handleClick}>
            {isToggleOn ? 'ON' : 'OFF'}
        </button>
        </div>
    );
};

export default MyComponent;
```

<br />


### Example 3 - Based on an Array or Object

<br />


```js
import React from 'react';

const MyComponent = () => {
  const fruits = ['apple', 'banana', 'orange'];

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
      {fruits.length === 0 && <p>No fruits available.</p>}
    </div>
  );
};

export default MyComponent;

```

<br />

### Render Based upon User Authentication


```js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Component = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

export default Compnent;
```