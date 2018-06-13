import moment from 'moment';

export const checkProperties = (obj) => {
	for (var key in obj) {
		if (obj[key] !== null) {
			return false;
		}
	}
	return true;
};

export const firstValue = (obj) => {
	for (var key in obj) {
		if(obj[key] !== null) {
			return obj[key];
		}
	}
}

export const getKeyByValue = ( obj, value ) => {
	for( var prop in obj ) {
		if( obj.hasOwnProperty( prop ) ) {
			if( obj[ prop ] === value )
				return prop;
		}
	}
}

export const isEmpty = (obj) => {
	return Object.keys(obj).length === 0;
}

export const filterList = (list, keys, filter) => {
	return list.filter( (item) => {
		let itemString = keys.map( (key)=> {
				return item.attributes[key];
			}).join(' ');
		return itemString.toLowerCase().search(filter.toLowerCase()) !== -1;
	});
}

export const filterListByDate = (list, key, startDate, endDate) => {
	console.log(list);
	return list.filter( (item) => {
		var test = moment(item.attributes[key]).isBetween(startDate, endDate);
		console.log(moment(item.attributes[key]));
		console.log(startDate);
		console.log(endDate);

		console.log(test);
		return test;
		//return moment().range(startDate, endDate).contains(moment(item.attributes[key]));
	})
	//is thtis date between now and date
}


