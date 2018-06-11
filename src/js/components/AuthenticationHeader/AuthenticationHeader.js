import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from 'components/Button';

export default class AuthenticationHeader extends Component {

	link () {
		if (this.props.path === 'login') {
			return (<Link className="button secondary blue" to="/signup"><span className="btn-content">I don't have an account</span></Link>);
		}
		if (this.props.path === 'signup') {
			return (<Link className="button secondary blue" to="/login"><span className="btn-content">I already have an account</span></Link>);
		}
		return false;
	}

	render () {
		return (
			<div className="content-header auth">
				<div className="container">
					<h1>Colvardlearning.com</h1>
					{this.link()}
				</div>
			</div>
		);
	}

}