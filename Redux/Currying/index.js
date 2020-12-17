
import { compose, pipe } from "loadash/fp";

let favInpOfCSTSFFB = "       CodingInPascalWasTheBestThingEverAndHelpedTremendously       ";
let favOutOfCSTSFFB = "<div>"+favInpOfCSTSFFB.trim()+"</div>";

const trimming = str => str.trim();
//const divWrapper = str => `<div>${str}</div>`;
//const spanWrapper = str => `<span>${str}</span>`;
//const wrapping = (type, str) => `<${type}>${str}</${type}>`
//I rewrite the wrapping with the arrow function and currying
wrapping = type => str => `<${type}>${str}</${type}>`
const lower = str=> str.toLowerCase();

//compose is a HOF that takes multiple arguments and returns a new function however order is not taken into consideration
//const transform = compose(divWrapper, toLowerCase, trim);

const transformwithpipe = pipe(trim,toLowerCase,wrapping("div"));
console.log(transformwithpipe(favInpOfCSTSFFB));
//const output = divWrapper(lower(trimming(favInpOfCSTSFFB)));