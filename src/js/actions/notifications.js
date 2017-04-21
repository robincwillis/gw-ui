export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const addNotification = (key, message, props) => {
	return {
		type : ADD_NOTIFICATION,
		payload : {
			key : key,
			message : message,
			props : props
		}
	};
};

export const removeNotification = (key) => {
	return {
		type : REMOVE_NOTIFICATION,
		payload : {
			key : key
		}
	};
};
