### React Admin

#### How To Install React Admin
```bash
npm install --save-dev react-admin
```

#### 2nd Way With data provider and MaterialUI
```bash
npm i react-admin ra-data-simple-rest @material-ui/core
```

#### Must Install json-server, concurrently(to run client and server concurrently)
```bash
npm install json-server
npm install concurrently
```

### What Must I import From React Admin
- Admin
- Resource


### Do Not Forget To Also Import the REST Provider
```js
import restProvider from 'ra-data-simple-rest';
```