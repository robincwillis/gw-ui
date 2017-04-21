import React, { Component } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

export default class LoginForm extends Component {

	constructor (props) {
		super(props);
		this.state = {
			email : '',
			password : ''
		};
	}

	//Todo, redirect if I am already logged in

	handleEmailChange (event) {
		this.setState({ email : event.target.value });
	}

	handlePasswordChange (event) {
		this.setState({password : event.target.value});
	}

	login (event) {
		event.preventDefault();

		this.props.firebase.login(this.state).then( (response)=> {

		})
		.catch((err)=>{

			console.log(err);
		});
	}

	render () {
		const { authError } = this.props;

		return (
			<form className="login">
				<Input
					inputClass="stagger-in-2"
					onChange={this.handleEmailChange.bind(this)}
					value={this.state.email}
					placeholder="Email"
					type="email"
					name="fb_email"
				/>
				<Input
					inputClass="stagger-in-3"
					onChange={this.handlePasswordChange.bind(this)}
					value={this.state.password}
					placeholder="Password"
					type="password"
					name="fb_password"
				/>
				<Button
					onClick={this.login.bind(this)}
					buttonClass="block centered stagger-in-4"
					label="Login"
				/>
				{/* TODO: Move to Alert */}
				{ authError && authError.message ? authError.message : false }
			</form>
		);
	}
}
