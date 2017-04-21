import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

class VisibleOnlyAdminComponent extends Component {
	render () {
		if(this.props.profile && this.props.profile.role === 'admin') {
			return this.props.children;
		} else {
			return (<span />);
		}
	}
}

const fbWrappedVisibleOnlyAdminComponent = firebaseConnect()(VisibleOnlyAdminComponent);

export const VisibleOnlyAdmin = connect(
	({ firebase }) => ({
		profile: pathToJS(firebase, 'profile'),
		auth: pathToJS(firebase, 'auth')
	})
)(fbWrappedVisibleOnlyAdminComponent);

class VisibleOnlyCustomerComponent extends Component {
	render () {
		if(this.props.profile && this.props.profile.customer) {
			return this.props.children;
		} else {
			return (<span />);
		}
	}
}

const fbWrappedVisibleOnlyCustomerComponent = firebaseConnect()(VisibleOnlyCustomerComponent);

export const VisibleOnlyCustomer = connect(
	({ firebase }) => ({
		profile: pathToJS(firebase, 'profile'),
		auth: pathToJS(firebase, 'auth')
	})
)(fbWrappedVisibleOnlyCustomerComponent);


