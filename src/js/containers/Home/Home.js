import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Redirect } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Loader from 'components/Loader/Loader';
import Footer from 'components/AppFooter/AppFooter'

import { firebaseConnect, helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

class Home extends Component {

	componentWillReceiveProps (nextProps) {
		// console.log('Home Redirect Execute');
		// console.log(this.props);
		// console.log(nextProps);

		if(nextProps.profile && !nextProps.profile.loading && nextProps.profile) {
			let profile = nextProps.profile;
			if(profile && !profile.disabled && profile.role === 'admin') {
				browserHistory.replace('/orders');
			} else if(profile && !profile.disabled && profile.customer) {
				browserHistory.replace('/classrooms');
			}
		}
	}

	render () {
		let profile = this.props.profile;

		if(!profile) {
			return (
				<div className="main-content-area">
					<div className="page-content">
						<Loader color="main" size="large" />
					</div>
				</div>
			);
		} else if(profile && profile.disabled){
			return (
				<ReactCSSTransitionGroup
					transitionName="main-content"
					transitionAppear={true}
		      transitionAppearTimeout={1500}
					transitionEnterTimeout={1500}
					transitionLeaveTimeout={1500}
					className="main-transition-wrap"
				>
				<div className="main-content-area" key="home">
					<div className="page-content">
						<div className="flex-center-container">
							<div className="content-area-notification rich-text">
								<h1>Your account has not been activated yet</h1>
								<hr className="tiny centered"/>
								<p className="light-text-color lg">We are reviewing your account. You will receive an email within 48 hours. If you do not receive an email, please contact us at <a href="mailto:accounts@colvardlearning.com">accounts@colvardlearning.com</a></p>
							</div>
						</div>
					</div>
				</div>
				</ReactCSSTransitionGroup>
			);
		} else {
			return (
				<div className="main-content-area">
					<div className="page-content">
						<Loader color="main" size="large" />
					</div>
				</div>
			);
		}
	}
}

const fbWrappedComponent = firebaseConnect()(Home);

export default connect(
	({ firebase }) => ({
		profile: pathToJS(firebase, 'profile'),
		auth: pathToJS(firebase, 'auth')
	})
)(fbWrappedComponent);
