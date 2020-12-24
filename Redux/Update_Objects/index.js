// How Does Immutability Take Place Here?!!!!
const individual = { name: "Javafb"};

//How To Copy the content of one object to another obj in JS first argument is the object I want to create
//2nd argument is the object I am grabbing the data from
//I can have a 3rd argument which is used for rerendering new properties of the object
//const updatedIndividual = Object.assign({}, individual, {name: "CS37532", favActivity: "Coding In Pascal"});

//Using the spread operator to dump all the properties of the individual object to the updatedIndividual Object
const updatedIndividual = {...individual, name: "CS37532", favActivity:"Coding In Java", favThings:
{
    anotherFavClass:"CS429",
    bestOS: "Windows10"
}};
updatedIndividual.favThings.bestOS="Pintos";

//the right way to update
const updatedIndividualA = {
...updatedIndividual,
name: "CS37532", 
favActivity:"Coding In Pascal", 
...updatedIndividual.favThings.bestOS="Pintos"
}
console.log(updatedIndividualA);//Pascal
console.log("\n\n");
console.log(updatedIndividual);//Java
