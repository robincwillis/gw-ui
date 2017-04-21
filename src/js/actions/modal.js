export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_COMPONENT = 'SET_COMPONENT';

export const openModal = (component, props) => {
	return {
		type : OPEN_MODAL,
		payload : {
			component : component,
			props : props
		}
	};
};

export const closeModal = () => {
	return {
		type : CLOSE_MODAL
	};
};

export const setComponent = (component) => {
	return {
		type : SET_COMPONENT,
		payload : {
			component : component
		}
	};
};