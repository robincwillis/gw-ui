import React, { Component } from 'react';
import { NotificationStack } from 'react-notification';

export default class Notifications extends Component {

	defaultStyles(index, style) {
		return Object.assign(
			{},
			style,
			{
				background : '#3394FF',
				zIndex : '1'
			}
		);
	}


	defaultActiveStyles(index, style) {
		return Object.assign(
			{},
			style,
			{
				left : '240px',
				background : '#3394FF',
				zIndex : '1'
			}
		);
	}

	render () {

		//TODO Click notifications to dismiss them
		// {
		// 	action: 'Dismiss',
		// 	onClick: (deactivate) => {
		// 		deactivate();
		// 		this.removeNotification('some UID');
		// }

		return (
				<NotificationStack
					dismissAfter={4000}
					barSTyleFactory={this.defaultStyles}
					activeBarStyleFactory={this.defaultActiveStyles}
					notifications={this.props.notifications.toArray()}
					onDismiss={ (notification) => {
						this.props.removeNotification(notification.key);
					}}
				/>

		);
	}
}
