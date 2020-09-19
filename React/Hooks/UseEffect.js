import React, {useState, useEffect} from 'react';

export default function App(){
	const [resourceType, setResourceType] = useState("posts");

	const [items, setItems] = useState

	//Everytime I rerender my application render will be printed out to the console
	//useEffect takes a 2nd parameter used so that I want to do something  whenever a specific resource on my page changes
	//my hook will run
	useEffect(() =>{
		//console.log("resource type changed");
		.fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
		.then(response => response.json())
		.then(json=>setItems(json))
	}, [resourceType]);


	//So I have three resources: Comments, Users and Posts we want to query an API which has fields of Posts,comments and Users.

	return(
		<>
			<div>
				<button onClick={() => setResourceType("posts")}>Posts</button>
				<button onClick={() => setResourceType("users")}>Users</button>
				<button onClick={() => setResourceType("comments")}Comments</button>
			</div>
			<h1>{resourceType}</h1>
			{items.map(item => {
				return <pre>{JSON.stringify(item)}</pre>)
			})}
		</>
	);
}
