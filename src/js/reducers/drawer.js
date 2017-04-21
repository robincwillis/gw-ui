import { OPEN_DRAWER, CLOSE_DRAWER, SET_PANEL } from 'actions/drawer';

import Immutable from 'immutable';

const initialState = Immutable.Map({
	drawerOpen : false,
	panel : false
});

export default (state = initialState, action) => {

	switch (action.type) {

		case OPEN_DRAWER:
			if (action.payload.panel) {
				state = state.set('panel', action.payload.panel);
			}

			state = state.set('drawerOpen', true);
			break;

		case CLOSE_DRAWER:
			state = state.set('drawerOpen', false);
			break;

		case SET_PANEL:
			state = state.set('panel', action.payload.panel);
			break;

	}
	return state;
};

