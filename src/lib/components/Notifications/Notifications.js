import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeNotification } from 'actions/notifications';
import { NotificationStack } from 'react-notification';

import './Notifications.scss';

const COLORS = {
	defaultColor : '#2c3b46', // Header bg color
	alertColor : '#DF693D',
	warningColor : '#FFD780',
	successColor : '#50B87F'
};


export class Notifications extends Component {

	customStyles = (notification, style) => {

		if (notification.type.includes('error')) {
			// style.background = COLORS.alertColor;
		}
		if (notification.type.includes('warning')) {
			// style.background = COLORS.warningColor;
		}
		if (notification.type.includes('success')) {
			// style.background = COLORS.successColor;
		}
		if (notification.type.includes('full')) {
			// style.left = 0;
		}

		return style;
	}

	defaultStyles = (index, style) => {
		const notification = this.props.notifications.toArray()[index];

		let defaultStyle = {
			background : COLORS.defaultColor,
			boxShadow: 'none',
			zIndex : '10000',
			fontSize: '1em',
			fontFamily: 'Hind, sans-serif',
			fontWeight: '500',
			borderRadius: '3px',
			color: '#fff',
			lineHeight: '1em',
			padding: '1.25rem',
			transition : '.75s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
			bottom: `${1.875 + index * 4.5}rem`,
		};

		let customStyle = this.customStyles(notification, defaultStyle);

		return Object.assign(
			{},
			style,
			customStyle
		);
	}

	defaultActiveStyles = (index, style) => {
		const notifications = this.props.notifications.toArray();
		const notification = notifications[index];

		let defaultStyle = 	{
			background : COLORS.defaultColor,
			bottom: `${1.875 + index * 4.5}rem`,
			left: '1.875rem'
		};

		let customStyle = this.customStyles(notification, defaultStyle);

		return Object.assign(
			{},
			style,
			customStyle
		);
	}

	render () {

		const notifications = this.props.notifications.toArray().map( (notification)=> {
			if(notification.action) {
				notification.onClick = (notification, deactivate) => {
					deactivate();
					this.props.removeNotification(notification.key);
				};
			}
			return notification;
		});

		return (
			<NotificationStack
				dismissAfter={4000}
				barStyleFactory={this.defaultStyles}
				activeBarStyleFactory={this.defaultActiveStyles}
				notifications={notifications}
				onDismiss={ (notification) => {
					this.props.removeNotification(notification.key);
				}}
			/>
		);
	}
}


const mapStateToProps = (state) => {
	return { notifications : state.notifications};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeNotification : (key) => { dispatch(removeNotification(key)); }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
