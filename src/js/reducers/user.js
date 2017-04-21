import { SET_USER_DATA, CLEAR_USER_DATA } from 'actions/user';

const initialState = {
	loading : true

};

export default (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA: {
			let user = Object.assign(action.payload,{loading: false });
			state = user;
			break;
		}

		case CLEAR_USER_DATA: {
			state = initialState;
			break;
		}
	}
	return state;
};

