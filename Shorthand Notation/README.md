## Shorthand Notation

<br  />
  
### JS Shorthand

#### Longhand Variable Declaration

```js
let  alpha

let  beta

let  chi = "dj"
```
  
#### Shorthand Variable Declaration

```js
let  alpha,beta, chi = "dj";
```
  
#### Longhand Ternary Operator
  
```js

let  numOne;
 
if(num > 11){
    numOne = true;
}
  

else{
    numOne = false
}
```

<br />
  
#### Shorthand Ternary Operator

```js
let  numOne = x > 11 ? true : false
```

<br />  
  
#### Longhand Assignment Operator

```js
let  numOne; 

numOne = numOne + numTwo;

numOne = numOne - numTwo;
```

#### Shorthand Assignment Operator

```js  

let  numOne;

numOne += numTwo;

numOne -= num
```

### CSS Shorthands  

#### Shorthand for Background

```css

/*Change This*/
/*

.style{
    background-color: black;

    background-image: url(URL);

    background-repeat: no-repeat;

    background-position: top;

    background-attachment: fixed
}

*/

/*To This: */

.style{
    background: black  url(URL) no-repeat  top  fixed;
}

```

#### Shorthand for Border

```css

/*Change This*/

/*

.style{
    border-style: solid;

    border-width: 1px;

    border-color: black;
}

*/

/*To This: */

.style{
    border: solid  1px  black;
}
```

#### Shorthand for Font

```css

/*Change This*/

/*

.style{

font-style: normal;

font-variant: normal;

font-weight: normal;

font-size: 16px;

line-height: normal;

font-family: sans-serif;

}

*/

/*To This: */

.style{
    font: normal  normal  normal  16px  normal  inherit;
}

```

#### Shorthand for List Style

```css

/*Change This*/

/*

.style{
    list-style-type: circle;

    list-style-position: inside;

    list-style-image: url(image.jpeg);
}

*/

/*To This: */

.style{
    list-style: circle  inside  url(image.jpeg);
}

```

#### Shorthand for Margin

```css

/*Change This*/

/*
.style{
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
}
*/

/*To This: */

.style{
    margin: auto  auto  auto  auto;
}

```

#### Shorthand for Margin II

```css
/*Change This*/

/*
.style{
    margin-top: 20px;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 20px;
}
*/

/*To This: */

.style{
    margin: 20px  5px;
}
```

#### Shorthand for Outline

```css
/*Change This*/

/*
.style{
    outline-width: 1px;
    outline-style: solid;
    outline-color: #000;
}
*/

/*To This: */

.style{
    outline: 1px  solid  #000;
}

```

#### Shorthand for Padding


```css

/*Change This*/

/*

.style{

padding-right: auto;

padding-left: auto;

padding-top: auto;

padding-bottom: auto;

}

*/

/*To This: */

.style{

padding: auto;

}

```