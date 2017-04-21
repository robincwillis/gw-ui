import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Input from 'components/Input';
import Button from 'components/Button';

export default class SignupForm extends Component {

	constructor (props) {
		super(props);
		this.state = {
			credentials : {
				email : '',
				password : ''
			},
			profile : {
				disabled : true,
				role : 'customer',
				company : ''
			}
		};
	}

	handleEmailChange (event) {
		let credentials = this.state.credentials;
		let profile = this.state.profile;

		credentials.email = event.target.value;
		profile.email = event.target.value;

		this.setState({
			profile : profile,
			credentials : credentials
		});

	}

	handlePasswordChange (event) {
		let credentials = this.state.credentials;
		credentials.password = event.target.value;
		this.setState({ credentials : credentials });
	}

	handleNameChange (event) {
		let profile = this.state.profile;
		profile.name = event.target.value;
		this.setState({ profile : profile });
	}

	signup (event) {
		event.preventDefault();
		this.props.firebase.createUser( this.state.credentials,this.state.profile)
		.then ( (response) => {
			browserHistory.push('/');
		})
		.catch( (error) => {
			console.log(error);
		});
	}

	render () {
		const { authError } = this.props;

		return (
			<div className="signup">
				<Input
					inputClass="stagger-in-2"
					onChange={this.handleNameChange.bind(this)}
					value={this.state.profile.name}
					placeholder="Name"
					type="text"
					name="fb_company"
				/>
				<Input
					inputClass="stagger-in-3"
					onChange={this.handleEmailChange.bind(this)}
					value={this.state.credentials.email}
					placeholder="Email"
					type="email"
					name="fb_email"
				/>
				<Input
					inputClass="stagger-in-4"
					onChange={this.handlePasswordChange.bind(this)}
					value={this.state.credentials.password}
					placeholder="Password"
					type="password"
					name="fb_password"
				/>
				<Button
					onClick={this.signup.bind(this)}
					buttonClass="stagger-in-5 block centered"
					label="Sign Up"
				/>
				{/* TODO: Move to Alert */}
				{ authError && authError.message ? authError.message : false }
			</div>
		);
	}
}
