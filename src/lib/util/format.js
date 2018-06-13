import moment from 'moment';

export const dateTimeToISO = (date, timeValue, timeFormat) => {
	let time = moment(timeValue, timeFormat)
	return moment(date)
	.utc()
	.set({
		hour:time.get('hour'),
		minute:time.get('minute'),
		second:time.get('second'),
		millisecond:time.get('millisecond')
	})
	.toISOString();
}

export const pluralize = (count, singular, plural) => {
	return Number(count) > 1 ? plural : singular;
};