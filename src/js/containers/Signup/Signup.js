import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import { Link } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

import SignupForm from '../../components/SignupForm';

import Logo from 'assets/icons/logo';

import 'sass/setup/reset';
import 'sass/setup/base';
import 'sass/components/app';

class Signup extends Component {

	render () {
		return (
			<div className="app-wrapper">
				<ReactCSSTransitionGroup
					transitionName="main-content"
					transitionAppear={true}
		      transitionAppearTimeout={1500}
					transitionEnterTimeout={1500}
					transitionLeaveTimeout={1500}
					className="main-transition-wrap"
				>
				<div className="main-content-area" key="signup">
					<div className="page-content centered-form">
						<div className="flex-center-container">
							<div className="container login">
								<InlineSVG src={Logo} element="span" className="stagger-in-1 logo" />
								<SignupForm {...this.props} />
							</div>
						</div>
						<div className="bottom-text">
							<div className="container stagger-in-8">
								<p className="light-text-color">Already have an account?</p>
								<Link className="button secondary" to="/login">Log In</Link>
							</div>
						</div>
					</div>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}


const fbWrappedComponent = firebaseConnect()(Signup);

export default connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth')
  })
)(fbWrappedComponent);