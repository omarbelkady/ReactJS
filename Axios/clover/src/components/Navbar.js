import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) =>{
	//setTimeout(()=> {
	//	props.history.push("/about")
	//}, 2000)
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a className="brand-logo">Clover</a>
				<ul className="right">
					<li><Link to="/">Home</Link></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}
//I have to export the function withRouter and pass in as a parameter Navbar which is the component wrapper
export default withRouter(Navbar);
