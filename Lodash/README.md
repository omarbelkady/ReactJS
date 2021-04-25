## Loadash

- A JS Utility Library
- Useful when working with Nested Arrays, Objects and Strings


### Usage on FE:

```js
<script src="lodash.js"></script>
```


### How To Install the lodash library

```bash
npm install lodash
```

### Usage on the backend

```js
var _ = require("lodash");
var myArray = require("lodash/array");//for methods in a category
var oneMethod = require("lodash/array/chunk");//for one method in the lodash library

_.funcName(arg1, iteratee)
```

### How Lodash makes our lives easier

```js
/*
//the code below turns into the uncommented code
var myArray = [1,2,3]

var theSum = myArray.reduce(function(prev, current){
    return prev+current;
})
*/
var myArray = [1,2,3];
var theSum = _.sum(myArray);//suming up an array
var myObj = {"a": 1, "b": 2, "c":3}
var myObjSum = _.sum(myObj);//thanks to lodash I do not have iterate through an object using objectName.keys to add the keys
```

### Searching for a value within an object without lodash

```js
var myPets = [
    {name: "Eva", age:4, color: "beige"},
    {name: "Blanco", age:4, color: "black"},
    {name: "Diablo", age: 4, color: "black"}
];

var matchedPet = []
myPets.forEach(function(apet){
    if(apet.age === 4 & apet.color === "black"){
        matchedPet.push(apet)
    }

})
```

### Using lodash I can search for the element using one line

```js
var _ = require("lodash");
var myPets = [
    {name: "Eva", age:4, color: "beige"},
    {name: "Blanco", age:4, color: "black"},
    {name: "Diablo", age: 4, color: "black"}
];

var matched = _.where(myPets, {age: 4, color: "black"});
console.log("Here are the matched pets: ", matched)
```


### When updating data in MongoDB
```js
var _ = require("lodash");
var myPets = {name: "Eva", age:4, color: "beige"};
var updated =  {name: "Eva", age:5, color: "beige"};

//what I would usually do
/*
for(var key in myPets){
    if(myPets[key])
    {
        myPets[key] = updated[key]
    }
}
*/

//How To Properly Update
var theUpdated = _.merge(myPets, updated)
```


### Say you have a nested array and wanted to calc the sum you would have to use a nested for loop. Lodash can save time

```js
var _ require("lodash")
var anArr = [1,2,3,4,[1,2,[4,5,[5,6]],7,8],9];

var mySum = _.chain(anArr)
        .flattenDeep
        .map(num => num * num)
        .sum()
        .value();
//I must call the value method to extract the value of the computation
```

### Explicit Chaining Example
```js
var _ require("lodash")
var anArr = [1,2,3,4,[1,2,[4,5,[5,6]],7,8],9];
var mySum = _.chain(anArr) //creates a lodash object
        .flattenDeep        //recursively flattens the array
        .map(num => num * num) //square each elem in the array
        .sum()  //sum up the elements
        .value(); //unwrap the lodash object
```

### Implicit Chaining Example
```js
var _ require("lodash")
var anArr = [1,2,3,4,[1,2,[4,5,[5,6]],7,8],9];
var mySum = _(anArr) //creates a lodash object
        .flattenDeep        //recursively flattens the array
        .map(num => num * num) //square each elem in the array
        .sum()  //sum up the elements
```