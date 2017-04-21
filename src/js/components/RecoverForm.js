import React, { Component } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

export default class RecoverForm extends Component {

	constructor (props) {
		super(props);

		this.state = {
			email : ''
		};
	}

	handleInputChange (event) {
		let state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state);
	}

	render () {
		return(
			<form className="request-code">
				<Input
					inputClass="stagger-in-2"
					onChange={this.handleInputChange.bind(this)}
					value={this.state.email}
					placeholder="Email"
					type="email"
					name="email"
				/>
				<Button
					onClick={this.props.sendRecoveryEmail.bind(this, this.state.email)}
					buttonClass="block centered stagger-in-3"
					label="Email Recovery Code"
				/>
			</form>
		);
	}

}

