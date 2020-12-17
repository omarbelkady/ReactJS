/*
function addTheNums(x,y){
    return x+y;
}
*/

//I rewrite the above function using currying
function addThem(x){
    return function(y){
        return x+y;
    };
}
addThem(6)(7);

//I will rewi
/*Currying allows us to take a function that has n args
and convert it to a function with a single argument
Reg function: add(3,5)
Currying: add(3)(5)
*/

//Using Arrow Notation for the function addThem
const addTem = x => y => x+y;
