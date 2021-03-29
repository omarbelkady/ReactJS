## MaterialUI - Component Library For React
- Components I can use:
    - Buttons
    - Navbar
    - Form


### How To install Via NPM
```bash
root@omarbelkady:~$ npm install @material-ui/core
```

### How To Install using a CDN
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

### Button Example in React
```js
import React from 'react';
import { Button } from '@material-ui/core';

function App() {
  return <Button color="primary">Hello World</Button>;
}
```

### Button Group
- A Button Wrapper for several buttons that belong together and styles them as though they are together

### Things we can style
- Layout
- Input
- Navigation
- Surfaces
- Icons
- etc.

### The default Roboto font that comees with react is not included in your MaterialUI Project
- To have it in your project
- Goto your index.html in your public===>index.html and paste it there right after the meta tags and before the 7652626 tags

### Icons do not come with the standard package installation
#### To Install I run the following command
```bash
npm install --save @material/icons
```
#### To Find out all the available icons 
- https://material-ui.com/components/material-icons/


### Cards In MaterialUI

