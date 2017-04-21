import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import { Link } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

import LoginForm from '../../components/LoginForm';
import AuthenticationHeader from '../../components/AuthenticationHeader';
import Footer from 'components/AppFooter/AppFooter'

import Logo from 'assets/icons/logo';

import 'sass/setup/reset';
import 'sass/setup/base';
import 'sass/components/app';
import 'sass/components/centered-form';

class Login extends Component {
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
				<div className="main-content-area" key="login">
					{/* <AuthenticationHeader path={this.props.route.path} /> */}
					<div className="page-content centered-form">
						<div className="flex-center-container">
							<div className="container">
								<InlineSVG src={Logo} element="span" className="stagger-in-1 logo" />
								<LoginForm {...this.props} />
								<p className="stagger-in-5 small-text light-text-color"><Link to="/recover-password">Forgot Password?</Link></p>
							</div>
						</div>
						<div className="bottom-text">
							<div className="container stagger-in-8">
								<p className="light-text-color">Don't have an account?</p>
								<Link className="button secondary" to="/signup">Sign Up</Link>
							</div>
						</div>
					</div>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}



const fbWrappedComponent = firebaseConnect()(Login);

export default connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth')
  })
)(fbWrappedComponent);


