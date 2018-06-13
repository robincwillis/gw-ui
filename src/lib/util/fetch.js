import environments from 'environments';
const config = environments[process.env.NODE_ENV]();

import { getToken } from 'util/storage';

export const defaultHeaders = () => {
	return {
		'Content-Type' : 'application/vnd.api+json',
		'Accept' : 'application/vnd.api+json',
		'Authorization' : `JWT ${getToken()}`,
	};
};

export const formHeaders = () => {
	return {
		'Accept' : 'application/vnd.api+json',
		'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
		'Authorization' : `JWT ${getToken()}`
	}
}

export const json = (response) => {
	return response.status === 204 ? {} : response.json();
};

export const status = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response);
	} else {
		return response.json().then( (responseJson)=> {
			//BACKEND TODO : Errors are not coming back in a consistent format
			var message = '';

			if(response.url.includes('/api/api-token-auth/')) {
				message = responseJson.errors.non_field_errors[0];
			}
			else if (Array.isArray(responseJson.errors)) {
				message = responseJson.errors.map( (error)=> {
					return error.detail;
				}).join(' ');
			} else {
				message = Object.keys(responseJson.errors).map( (key) => {
					message = responseJson.errors[key].join(' ');
					return message;
				})
			}
			var error = new Error(message);
			error.code = response.status || response.statusText;
			return Promise.reject(error);
		});
	}
};

export const formBodyFromJson = (json) => {

	let formBody = [];
	for (let property in json) {
		let encodedKey = encodeURIComponent(JSON.stringify(property));
		let encodedValue = encodeURIComponent(JSON.stringify(json[property]));
		formBody.push(encodedKey + "=" + encodedValue);
	}
	return formBody.join("&");
};

export const queryFromJson = (json) => {
	let queryArr =  Object.keys(json).reduce( (query, key)=> {
		query.push(`filter[${key}]=${json[key]}`);
		return query
	}, []);
	return '?'+queryArr.join('&');
};

