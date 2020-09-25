import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component{	
	state = {
		posts: []
	}
	componentDidMount(){
		axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
			console.log(response);
			this.setState({
				posts: response.data.slice(0,20)
			})
		});//returns a promise which means this action will complete at some point in time whenever you have a promise use .then method which fires once the promise has been fulfilled
	}
	render(){
		const {posts} = this.state;

		const postList = posts.length ? (
			posts.map(post => {
				return(
					<div className="post card" key={post.id}>
						<div className="card-content">
							<Link to={'/'+post.id}>
							<span className="card-title">{post.title}</span>
							</Link>
							<p>{post.body}</p>
						</div>
					</div>
				)	
			})
		) : (
			<div className ="center">No Posts Yet</div>
		)

		return (
		/*to use a lifecycle hook within a component we must first convert this component into class based component use Axios to grab data I change const Home = () => { to class Home extends Component {*/
		<div className="container">
			<h4 className="center">Home</h4>
			{postList}
		</div>
		)
	}
}

export default Home;
