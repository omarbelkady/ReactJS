import React, {useState, useEffect} from 'react';

export default function App(){
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);



	return(
		<div>{windowWidth}</div>
	);
}
