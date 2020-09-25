import React from 'react'

const Contact = (props) => {			
	setTimeout(() => {
		props.history.push("/about")
	}, 2000);
	return (
		<div className="container">
			<h4 className="center">Contact</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas sed tempus urna. Amet facilisis magna etiam tempor orci. Amet nisl suscipit adipiscing bibendum est. Eu sem integer vitae justo eget magna fermentum iaculis eu. Sit amet mattis vulputate enim nulla. Et ligula ullamcorper malesuada proin. Amet porttitor eget dolor morbi non arcu. Mi eget mauris pharetra et. Nunc faucibus a pellentesque sit amet porttitor eget. Id eu nisl nunc mi ipsum faucibus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas sed tempus urna. Amet facilisis magna etiam tempor orci. Amet nisl suscipit adipiscing bibendum est. Eu sem integer vitae justo eget magna fermentum iaculis eu. Sit amet mattis vulputate enim nulla. Et ligula ullamcorper malesuada proin. Amet porttitor eget dolor morbi non arcu. Mi eget mauris pharetra et. Nunc faucibus a pellentesque sit amet porttitor eget. Id eu nisl nunc mi ipsum faucibus vitae.</p>
		</div>
	)
}

export default Contact;
