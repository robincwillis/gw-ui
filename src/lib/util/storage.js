export const get = (key) => {
	if(!localStorage) {
		console.warn('localStorage not supported');
	}
	if(localStorage && !localStorage.getItem(key)){
		console.warn('tried to get a item in localStorage, but no value is set for ' + key);
	}
	return localStorage.getItem(key);
};

export const set = (key, value) => {
	if(!localStorage) {
		console.warn('localStorage not supported');
	}
	if(localStorage && localStorage.getItem(key)){
		console.warn('tried to set a token, but a '+ key +' is already set, overwriting');
	}
	localStorage.setItem(key, value);
};

export const del = (key) => {
	if(!localStorage) {
		console.warn('localStorage not supported');
	}
	localStorage.removeItem(key);
};

