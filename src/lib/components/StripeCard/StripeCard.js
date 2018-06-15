import React, { Component } from 'react';
import './stripe_card.scss';

import Input from 'components/Input';
import Button from 'components/Button';
import Loader from 'components/Loader';
import SuccessModal from 'components/SuccessModal';
import TermsOfService from './TermsOfService';

import './StripeCard.scss';

export class StripeCardResult extends Component {

	componentWillMount () {
		this.props.updateState({
			cancelVisible : false,
			confirmLabel : 'Done',
			modalClass : 'normal'
		})
	}

	render () {
		const { customer, card } = this.props.user;
		const error = this.props.errors['create_customer'];

		if(!customer && !error) {
			return (<Loader />);
		}

		return (
			<SuccessModal
				{...this.props}
				icon={customer ? "check" : "error"}
				iconColor={customer ? "success-color" : "alert-color"}
				headline={customer ? (<div>Success</div>) : (<div>Error</div>)}
				text={error ? error : false}
				textSize="small"
			/>
		);
	}
}

export default class StripeCard extends Component {

	state = {
		name : null,
		ccNumber : null,
		expMM : null,
		expYY : null,
		cvv : null,
		customer : {},
		card : {},
		tosAccepted : false,
		errorMessage : null,
		tosAccepted : false,
		showingTos : false,
		errors: {},
		complete : false
	};

	componentWillMount () {
		const name = this.props.user.profile.firstName +' '+ this.props.user.profile.lastName;
		const email = this.props.user.email;
		const customer = { name, email};

		this.setState({customer});
		this.props.updateState({
			title : false,
			cancelLabel : this.props.cancelLabel ? this.props.cancelLabel : 'Cancel',
		})
	}

	componentDidMount () {
		var cardElement = document.querySelector('#card-element');
		if(cardElement) {
			this.props.card.mount(cardElement);
			this.props.card.addEventListener('change', this.updateCardStatus);
		}
	}

	componentWillUnmount () {
		var cardElement = document.querySelector('#card-element');
		if(cardElement) {
			this.props.card.unmount(cardElement);
			this.props.card.removeEventListener('change');
		}
	}

	inputClass (name) {
		return '';
	}

	buttonContent () {
		var btnContent = 'Sign Up';
		if (this.props.acceptTOS === true && this.props.complete === false) {
			btnContent = 'Loading';
		}
		return btnContent;
	}

	enableConfirm () {
		const { tosAccepted, customer, complete } = this.state;
		if (complete && tosAccepted && customer.name && customer.email) {
			this.props.updateState({confirmDisabled : false});
		} else {
			this.props.updateState({confirmDisabled : true});
		}
	}

	updateCardStatus = (event) => {
		this.setState({complete : event.complete, error : event.error});
	}

	updateCustomer = (event) => {
		let customer = Object.assign({}, this.state.customer);
		customer[event.target.name] = event.target.value;
		this.setState({customer});
	}

	acceptTOS = (event) => {
		this.setState({ tosAccepted : event.target.checked });
	}

	showTOS = (event) => {
		event.preventDefault();
		this.setState({ showingTos : true });
		this.props.updateState({
			title : 'Terms of Service',
			cancelAction : (event) => { this.hideTOS(event, false) },
			confirmAction : (event) => { this.hideTOS(event, true) },
			cancelLabel : 'Back',
			confirmLabel : 'Accept',
			confirmDisabled : false,
			modalClass : 'wide scrollable'
		})
	}

	hideTOS = (event, accept) => {
		this.setState({
			showingTos : false,
			tosAccepted : accept
		});
		this.props.updateState({
			title : false,
			cancelAction : () => { this.props.handlePrev() },
			confirmAction : () => { this.props.handleClose(true) },
			cancelLabel : this.props.cancelLabel ? this.props.cancelLabel : 'Cancel',
			confirmLabel : 'Save',
			confirmDisabled : true,
			modalClass : 'normal'
		})
	}

	componentDidUpdate (prevProps, prevState) {
		const { tosAccepted, customer, complete } = this.state;

		if (tosAccepted !== prevState.tosAccepted ||
				customer.name !== prevState.customer.name ||
				customer.email !== prevState.customer.email ||
				complete !== prevState.complete )
		{
			this.enableConfirm();
		}

		if(!this.state.showingTos) {
			var cardElement = document.querySelector('#card-element');
			if(cardElement) {
				this.props.card.mount(cardElement);
			}
		}
	}

	render () {
		const { name, email } = this.state.customer;

		return (
			<div className={this.state.showingTos ? ("stripe-card form-area scrollable-content") : ("stripe-card form-area")}>
				{this.state.showingTos ? (
					<div className="tos-wrapper">
						<TermsOfService/>
					</div>
				) : (
					<div>
						{this.props.headline ? (<h4 className="wide-space-right">{this.props.headline}</h4>) : false}
						{this.props.text ? (<p className="md light-text-color medium-weight wide-space-right">{this.props.text}</p>) : false}
						{this.props.headline || this.props.text ? (<div className="tight-space-after"/>) : false}

						<form id="payment-form">
							<div className="flex-grid v-spaced-tight tight-padding-after">
								<div className="col-12">
									<Input
										className={this.inputClass('name')}
										onChange={this.updateCustomer}
										value={name || ''}
										name="name"
										type="text"
										id="name"
										label="Name"
										required
									/>
								</div>

								<div className="col-12">
									<Input
										className={this.inputClass('email')}
										onChange={this.updateCustomer}
										value={email || ''}
										name="email"
										type="text"
										id="email"
										label="Email"
										required
									/>
								</div>

							  <div className="col-12">
							    <div id="card-element" className="stripe-wrapper"></div>
							    <div id="card-errors"></div>
							  </div>

							  <div className="col-12 terms slim-padding-before">
							    <Input
							    	onChange={this.acceptTOS}
							    	type="checkbox"
							    	checked={this.state.tosAccepted}
							    	id="acceptTerms"
							    	label={<div className="p sm light-text-color medium-weight ellipsis">I accept the <a onClick={this.showTOS} >terms of service</a></div>}
							    />
							  </div>

				  		</div>
					  </form>
				  </div>
			  )}
			</div>
		);

	}
}
