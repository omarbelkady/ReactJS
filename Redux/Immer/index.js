import { produce } from 'immer';
let favProg = { name: "Pascal" };

function output(favProg){
    //favProg.isTheBest = true;
    //produce(initialState, object);
    //sayTheBestThingEverIsLLP is a proxy which records every action we are taking to the favProg object
    return produce(favProg, sayTheBestThingEverIsLLP => {
        //mutating code
        sayTheBestThingEverIsLLP.isTheBest = true;
    }); 
}

let updatedOut = output(favProg);

console.log(favProg);
console.log(updatedOut);