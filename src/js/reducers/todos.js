
const initialState = [];

export default (state = initialState, action) => {

	switch (action.type) {

		case 'ADD_TODO':
			state = [...state, action.payload];
			break;

		case 'CLEAR_TODOS':
			state = initialState;
			break;

	}
	return state;
};

