import React, { Component } from 'react';
import '../../assets/home.css';

class Footer extends Component {
	render() {
		return (
			<div className='container-fluid' style={{ backgroundColor: 'grey' }}>
				<div className='row'>
					<p>InstaDriver</p>
				</div>
				<div className='row'>
					<div className='col-sm-2'>
						<p style={{ color: 'white' }}>Useful Links</p>
						<ul id='list'>
							<li>About Insta Driver</li>
							<li>Verified Search(For Employees and Drivers)</li>
							<li>Top Ad Deature (For Drivers)</li>
						</ul>
					</div>
					<div className='col-sm-2'>
						<p>Useful Links</p>
						<ul id='list'>
							<li>Driver Sign up</li>
							<li>Driver Sign in</li>
						</ul>
					</div>
					<div className='col-sm-2'>
						<p>Useful Links</p>
						<ul id='list'>
							<li>FAQs</li>
							<li>Contact Us</li>
							<li>Terms and Conditions</li>
						</ul>
					</div>
					<div className='col-sm-2'>
						<p>Useful Links</p>
					</div>
					<div className='col-sm-2'>Social Media</div>
					<div className='col-sm-2'>
						Contact Information
						<br />
						<p>@saysomething@instadriver.co</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;
