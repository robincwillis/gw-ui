import SimpleSchema from 'simpl-schema';
import { Order, Product, Customer } from './index';

export const validate = (object, Schema) => {
	console.log(object);
	return new Promise( (resolve, reject)=> {
		let cleanedObject = Schema.clean(object, {filter : false});
		Schema.validate(cleanedObject);
		resolve(cleanedObject);
	});
};
