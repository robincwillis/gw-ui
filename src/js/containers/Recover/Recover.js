import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
import { addNotification } from 'actions/notifications';

import { firebaseConnect, helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

import Notifications from 'components/Notifications';

import InlineSVG from 'svg-inline-react';

import RecoverForm from 'components/RecoverForm';

import Logo from 'assets/icons/logo';

class Recover extends Component {

	sendRecoveryEmail (email, event) {
		event.preventDefault();

		this.props.firebase
			.resetPassword(email)
			.then(() => {
				//
				this.props.addNotification('reset-password-success', 'Account Recovery Email Sent');
				setTimeout( ()=> {
					browserHistory.push('/login');
				}, 6000);

			})
			.catch((err) => {
				console.error('Error updating account', err);
				this.props.addNotification('reset-password-error', err.message);
			});
	}

	render () {
		return(
			<div className="app-wrapper">
				<ReactCSSTransitionGroup
					transitionName="main-content"
					transitionAppear={true}
		      transitionAppearTimeout={1500}
					transitionEnterTimeout={1500}
					transitionLeaveTimeout={1500}
					className="main-transition-wrap"
				>
				<div className="main-content-area" key="recover">
					<div className="page-content centered-form">
						<div className="flex-center-container">
							<div className="container recover">
								<InlineSVG src={Logo} element="span" className="stagger-in-1 logo" />
								<RecoverForm
									sendRecoveryEmail={this.sendRecoveryEmail.bind(this)}
									{...this.props}
								/>
							</div>
						</div>
						<div className="bottom-text">
							<div className="container stagger-in-8">
								<p className="light-text-color">Nevermind. I remember.</p>
								<Link className="button secondary" to="/login">Log In</Link>
							</div>
						</div>
					</div>
				</div>
				</ReactCSSTransitionGroup>
				<Notifications/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNotification : (key, message) => { dispatch(addNotification(key, message)); }
	};
};

const fbWrappedComponent = firebaseConnect()(Recover);

export default connect(
	({ firebase }) => ({
		authError: pathToJS(firebase, 'authError'),
		auth: pathToJS(firebase, 'auth')
	}),
	mapDispatchToProps
)(fbWrappedComponent);

