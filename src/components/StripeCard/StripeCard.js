import React, { Component } from 'react';

export default class StripeCard extends Component {

	componentDidMount () {
		var stripe = Stripe('pk_test_qg5zyO54SokyL97QFhG42ZZa');
		var elements = stripe.elements();

		// Custom styling can be passed to options when creating an Element.
		var style = {
		  base: {
		    // Add your base input styles here. For example:
		    fontSize: '16px',
		    lineHeight: '24px',
		    fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, sans-serif',
		    iconColor: '#000',
		    lineHeight: '60px'
		  }
		};

		// Create an instance of the card Element
		var card = elements.create('card', {style: style});

		// Add an instance of the card Element into the `card-element` <div>
		var cardElement = document.querySelector('#card-element');
		card.mount(cardElement);

		console.log(cardElement)
	}

	render () {

		return (
			<div>
				<form action="/charge" method="post" id="payment-form">
				  <div className="stagger-4 pay-row">
				    <div id="card-element" className="stripe-wrapper"></div>

				    <div id="card-errors"></div>
				  </div>

				  <div className="stagger-5 pay-row terms">
				    <input type="checkbox" value="accept" id="acceptTerms" />
				    <label htmlFor="acceptTerms"><span/>I accept the <a>terms of service</a></label>
				  </div>

				  <button className="stagger-6">Sign Up</button>
				</form>
			</div>
		);

	}
}