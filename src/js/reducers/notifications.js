import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from 'actions/notifications';

import Immutable from 'immutable';

const initalState = Immutable.OrderedSet();

export default (state = initalState, action) => {

	switch (action.type) {
		case ADD_NOTIFICATION: {

			let notifications = state;

			let notification = {
				message: action.payload.message,
				key: action.payload.key,
			};

			state = notifications.add(notification);

			break;
		}
		case REMOVE_NOTIFICATION: {
			let notifications = state;
			state = notifications.filter(notification => notification.key !== action.payload.key);
			break;
		}
	}
	return state;
};

