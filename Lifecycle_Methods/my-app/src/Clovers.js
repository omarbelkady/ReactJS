import React from 'react';
import './Clovers.css';

const Clovers = ({clovers, deleteClover}) => {
 	const cloverList = clovers.map(clover =>{
	if(clover.major === "CS"){
			return (
				<div className="clover" key={clover.id}>
					<div>Name: {clover.name}</div>					
					<div>Major: {clover.major}</div>
					<div>FavLang: {clover.favLang}</div>
					<button onClick={() => {deleteClover(clover.id)}}>Delete clover}</button>
				</div>
			)
		}
	else{
		return null;
	}
	})
	return(
		<div className="clover-list">
		{
			clovers.map(clover =>{
				return clover.major === "CS" ? (
				
					<div className="C Architecture" key={clover.id}>
						<div>Name: {clover.name}</div>			
						<div>Major: {clover.major}</div>
						<div>FavLang: {clover.favLang}</div>
					</div>

				) :null
			})
		}
		</div>
	);
}


{/*Remember to Export Your App to Render it*/}
export default Clovers;
