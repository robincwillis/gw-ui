import React, { Component } from 'react';

import StripeCard from '../StripeCard/StripeCard';

import '../../css/style';
import './app.css';

export default class Order extends Component {

	render () {

		return (
			<div className="centered-content">
				<div className="pay-me">
					<h1 className="stagger-1">Sign Up For Hosting</h1>
					<div className="stagger-2 pay-row">
						<div className="fancy-input-wrap">
							<input type="text" id="name" required />
							<label htmlFor="name">Name</label>
						</div>
					</div>
					<div className="stagger-3 pay-row">
						<div className="fancy-input-wrap">
							<input type="text" id="email" required />
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<StripeCard/>
				</div>
			</div>
		);

	}
}