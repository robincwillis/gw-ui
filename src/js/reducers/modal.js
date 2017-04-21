import { OPEN_MODAL, CLOSE_MODAL, SET_COMPONENT } from 'actions/modal';


import Immutable from 'immutable';


const initialState = Immutable.Map({
	modalOpen : false,
	component : false,
	onClose : false,
	message : null
});


export default (state = initialState, action) => {

	switch (action.type) {
		case OPEN_MODAL: {
			if(action.payload.component) {
				state = state.set('component', action.payload.component);
			}
			if(action.payload.props) {

				if(action.payload.props.onClose) {
					state = state.set('onClose', action.payload.props.onClose);
				}

				if(action.payload.props.message) {
					state = state.set('message', action.payload.props.message);
				}
			}

			state = state.set('modalOpen', true);
			break;
		}

		case CLOSE_MODAL: {
			state = state.set('modalOpen', false);
			break;
		}

		case SET_COMPONENT: {
			state = initialState;
			break;
		}
	}
	return state;
};