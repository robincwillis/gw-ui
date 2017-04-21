export const SET_USER_DATA = 'SET_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';


export const setUserData = (profile) => {
	return {
		type : SET_USER_DATA,
		payload : profile
	};
};

export const clearUserData = () => {
	return {
		type : CLEAR_USER_DATA
	};
};

