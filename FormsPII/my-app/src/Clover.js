import React from 'react';


const Clover = ({clover}) => {

//	
// 	const cloverList = clover.map(clover =>{
//	if(clover.major === "CS"){
//			return (
//				<div className="clover" key={clover.id}>
//					<div>Name: {clover.name}</div>					
//					<div>Major: {clover.major}</div>
//					<div>FavLang: {clover.favLang}</div>
//				</div>
//			)
//		}
//	else{
//		return null;
//	}
//	})
	return(
		<div className="clover-list">
		{
			clover.map(clover =>{
				return clover.major === "CS" ? (
				
					<div className="C Architecture" key={clover.id}>
						<div>Name: {clover.name}</div>			
						<div>Major: {clover.major}</div>
						<div>FavLang: {clover.favLang}</div>
					</div>

				) :null;
			})
		}
		</div>
	)
}


{/*Remember to Export Your App to Render it*/}
export default Clover;
