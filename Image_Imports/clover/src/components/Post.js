import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component{
	state={
	//	id: null
		/*When the component first loads up it will be null but then componentdidmount fires I grab the id from the url and set the state and the id then becomes the id of the url*/
		post:null
	}

	componentDidMount(){
		//console.log(this.props);
		{/*how to identify what the route parameter is. Find the router parameter within this hook to allow us to proceed to fetch data all the info attached to the props object in regards to our route  grab the props object */}
		let id = this.props.match.params.post_id;
		axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
			.then(response=>{
				this.setState({
					post: response.data
				})
			})
	}
	render(){

		const post = this.state.post ? (
			<div className="post">
				<h4 className="center">{this.state.post.title}</h4>
				<p>{this.state.post.body}</p>
			</div>
		):(
			<div className="center">Loading 2-56837 or 727225 56837 Post...</div>
		);


		return(
			<div className="container">
				{post}
			</div>
		)
	}
}

export default Post;
