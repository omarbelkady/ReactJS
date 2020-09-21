import React from 'react';

{/*This file App.js is called my root component Class Based Component Need State. Data received here is from props. This is from the Container component. This means we do not need a class to create the component. Class Based Components need State and we do not need State. I will changed hte Class Based Component into a Functional Component
I will remove the Clover Class and replace it with a const that has a function
class Clover extends Component{
I get rid of the render method and 
I replace const Clover = (props) => {    with const Clover = {{clover}} => {
This is because I am directly destructuring and receiving the property aka props clover
If I am receiving more than one prop I can just separate them with a comma. If say I were receiving clover prop
Nelan prop and pintos prop it would be: const Clover= {{clover, nelan, pintos}} => {
This is how container components with State work in App.js vs UI Components without state made by functions 
*/}
const Clover = ({clover}) => {

	{/*destructuring
		const {clover} = props;
		This will generate an error because we are referencing clover from clover of this.props
		what we must do is have it passed in as a parameter in line 7
		Instead of having access thanks to this.props because we are not referring to the class instance anymore we are just referencing the props that we are passing in into the function as a parameter 
	In functional components we pass the props in as a parameter to the function and we gain access to them just by saying props
	We only use functional components when we don't need the state. */}
		const cloverList = clover.map(clover =>{
			return (
				<div className="clover" key={clover.id}>
					<div>Name: {clover.name}</div>
					<div>Major: {clover.major}</div>
					<div>FavLang: {clover.favLang}</div>
				</div>
			)
		})

		return(
			<div className="clover-list">
				{cloverList}
			</div>
		)
}


{/*Remember to Export Your App to Render it*/}
export default Clover;
