import SimpleSchema from 'simpl-schema';

//Options
export const DefaultTerms = 'some default terms here, probably from markdown';
export const UserRoleOptions = ['teacher', 'customer', 'admin' ];
export const PaymentFrequencyOptions = ['monthly', 'quartely', 'annual', 'biannnual'];
export const StatusOptions = [ 'new', 'pending', 'active', 'started', 'ready','in_progress', 'complete', 'signed', 'expired'];
export const StateOptions = ['a', 'b', 'c'];  //Todo option of states

//Records

export const User = new SimpleSchema({
	id : {
		type : String,
		optional : true
	},
	email : {
		type : String,
		optional : false
	},
	password : {
		type : String,
		optional : true
	},
	name : {
		type : String,
		optional : true
	},
	customer : {
		type : String,
		optional : true
	},
	role : {
		type : String,
		optional : false,
		defaultValue : 'teacher',
		allowedValues : UserRoleOptions
	},
	disabled : {
		type : Boolean,
		optional : false,
		defaultValue : true
	}
});

export const Contact = new SimpleSchema({
	firstName : {
		type : String,
		optional : true
	},
	lastName : {
		type : String,
		optional : true
	},
	companyName : {
		type : String,
		optional : true
	},
	emailAddress : {
		type : String,
		optional : true
	},
	phoneNumber : {
		type : String,
		optional : true
	}
});

export const Address = new SimpleSchema({
	street : {
		type : String,
		optional : true
	},
	city : {
		type : String,
		optional : true
	},
	state : {
		type : String,
		optional : true
	},
	postalCode : {
		type : Number,
		optional : true
	}
});

export const Customer = new SimpleSchema({
	id : {
		type : String,
		optional : true
	},
	name : {
		type : String,
		label : 'Customer Name',
		optional : false
	},
	contactInfo : {
		type : Contact,
		optional : true
	},
	contactAddress : {
		type : Address,
		optional : true
	},
	dateActivated : {
		type : Date,
		optional : false,
		defaultValue : new Date()
	},
	active : {
		type : Boolean,
		optional : false,
		defaultValue : true
	},
	orders : {
		type : Object,
		blackbox : true,
		optional : true
	},
	users : {
		type : Object,
		blackbox : true,
		optional : true
	},
	schools : {
		type : Object,
		blackbox : true,
		optional : true
	}
});

export const Product = new SimpleSchema({
	id : {
		type : String,
		optional : true
	},
	productId : {
		type : String,
		optional : false
	},
	name : {
		type : String,
		optional : false
	},
	description : {
		type : String,
		optional : true
	},
	price : {
		type : Number,
		optional : false
	},
	cover : {
		type : String,
		optional : true
	}
});

export const OrderProduct = new SimpleSchema({
	id : {
		type : String,
		optional : true
	},
	productId : {
		type : String,
		optional : false
	},
	name : {
		type : String,
		optional : false
	},
	cover : {
		type : String,
		optional : true
	},
	description : {
		type : String,
		optional : true
	},
	studentCount : {
		type : Number,
		optional : false,
		defaultValue : 1
	},
	price : {
		type : Number,
		optional : false,
		defaultValue : 0
	},
	discount : {
		type : Number,
		optional : false,
		defaultValue : 0
	},
	total : {
		type : Number,
		optional : false,
		defaultValue : 0
	}
});

export const Order = new SimpleSchema({
	id : {
		type : String,
		optional : true
	},
	title : {
		type : String,
		label : 'Order Title',
		optional : false
	},
	customer : {
		type : String,
		optional : false
	},

	products : {
		type: Array,
		optional : false
	},
	'products.$' : OrderProduct,

	dateCreated : {
		type : Date,
		optional : false,
		defaultValue : new Date()
	},
	status : {
		type : String,
		optional : false,
		defaultValue : 'new',
		allowedValues : StatusOptions
	},
	startDate : {
		type : Date,
		optional : true
	},
	endDate : {
		type : Date,
		optional : true
	},
	description :{
		type : String,
		optional : true
	},
	subtotal : {
		type : Number,
		optional : false,
		defaultValue : 0
	},
	tax : {
		type : Number,
		optional : false,
		defaultValue : 0
	},
	total : {
		type : Number,
		optional : false,
		defaultValue : 0
	}
});


export const Classroom = new SimpleSchema({
	id : {
		type : String,
		optional : true
	},
	name : {
		type : String,
		label : 'Classroom Name',
		optional : false
	},
	product : {
		type : String,
		optional : false
	},
	school : {
		type : String,
		optional : false
	},
	studentCount : {
		type : Number,
		optional : true
	},
	teacher : {
		type : String,
		optional : false
	},
	students : {
		type : Object,
		blackbox : true,
		optional : true
	}
});

