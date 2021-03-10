### Jest - Unit Testing In React
```bash
npm i -D Jest
```

### Create Your File
```bash
touch nameOfFile.js
```

### Create Your Your Second JS File and Jest will automatically know this is the testing file
```bash
touch nameOfFile.test.js
```


### To Run the Test In Your Package.json Replace the value for the key test to simply jest under your scripts
```json
"scripts": {
    "test": "jest"
},
```


### Now If You Have the above configuration all you have to do is run the command
```bash
npm test
```

### ToBe Vs. ToEqual
- ToBe used for Primitive Types: num, string
- ToEqual Used For Objects/Array(Reference Types)

### I will use Axios for my http client
```bash
npm i axios
```