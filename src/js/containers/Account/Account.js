import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase';
const { isLoaded, dataToJS } = helpers;

import ContentHeader from 'components/ContentHeader';
import Button from 'components/Button';
import Footer from 'components/AppFooter/AppFooter'

class Account extends Component {

	handleLogout (event) {
		event.preventDefault();
		this.props.firebase.logout();
		browserHistory.replace("/");
	}

	//TODO Move logout to Content Header
	//Name
	//Customer
	//Role
	//Email / Password

	render () {

		let button = (<Button
			label="Logout"
			onClick={this.handleLogout.bind(this)}
		/>);


		return (
			<ReactCSSTransitionGroup
				transitionName="main-content"
				transitionAppear={true}
	      transitionAppearTimeout={1500}
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				className="main-transition-wrap"
			>
			<div className="main-content-area" key="account">
				<ContentHeader
					title="Account"
					button={button}
				/>
				<div className="page-content">
					<div className="container">

					</div>
					<Footer/>
				</div>
			</div>
			</ReactCSSTransitionGroup>
		);
	}
}

const fbWrappedComponent = firebaseConnect()(Account);

export default connect(
  ({ firebase }) => ({
    account: dataToJS(firebase, 'profile')
  })
)(fbWrappedComponent);

