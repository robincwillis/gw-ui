export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const SET_PANEL = 'SET_PANEL';

export const openDrawer = (panel) => {
	return {
		type : OPEN_DRAWER,
		payload : {
			panel : panel
		}
	};
};

export const closeDrawer = () => {
	return {
		type : CLOSE_DRAWER
	};
};

export const setPanel = (panel) => {
	return {
		type : SET_PANEL,
		payload : {
			panel : panel
		}
	};
};