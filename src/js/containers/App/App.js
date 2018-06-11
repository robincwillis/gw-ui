import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { firebaseConnect, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers;

//Icons
import CircleIcon from 'assets/icons/circle';

import Drawer from '../../components/Drawer';
import Modal from '../../components/Modal';
import Notifications from '../../components/Notifications';
import Loader from '../../components/Loader/Loader';

import { setUserData } from 'actions/user';
import { addNotification } from 'actions/notifications';

import 'sass/setup/reset';
import 'sass/setup/base';
import 'sass/components/app';

class App extends Component {

	componentDidMount () {
		// Uncomment to test notifications
		// this.props.addNotification('test', 'testing message uno');
		// this.props.addNotification('test2', 'testing message dos');
		// this.props.addNotification('test3', 'testing message tres');

	}

	componentWillReceiveProps (nextProps) {
		if( !this.props.profile && nextProps.profile) {
			this.props.setUserData(nextProps.profile);
		}
	}

	render () {
		return (
			<div className="app-wrapper">
				<Modal />
				<Drawer panel={this.props.panel} location={this.props.location} />
				{this.props.children}
				<Notifications/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUserData : (profile) => { dispatch(setUserData(profile)); },
		addNotification : (key, message) => { dispatch(addNotification(key, message)); }
	};
};

const fbWrappedComponent = firebaseConnect()(App);

export default connect(
	({ firebase }) => ({
		profile: pathToJS(firebase, 'profile'),
		authError: pathToJS(firebase, 'authError'),
		auth: pathToJS(firebase, 'auth')
	}),
	mapDispatchToProps
)(fbWrappedComponent);
