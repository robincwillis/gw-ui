import React, { Component } from 'react';

// import List from './List'

var customers = [
        {
            "id" : "-KeQP73sYoQjla6U_u8V",
            "contactAddress" : {
                "city" : "brooklyn",
                "postalCode" : "11211",
                "state" : "ny",
                "street" : "10 orient ave"
            },
            "contactInfo" : {
                "companyName" : "Robin",
                "emailAddress" : "robin@compstak.com",
                "firstName" : "Robin",
                "lastName" : "Willis",
                "phoneNumber" : "310 869 6614"
            }
        },
        {
            "id" :"-KeQQkb9w-c0icEAYZ4S",
            "contactAddress" : {
                "city" : "oiu",
                "state" : "oi",
                "street" : "oiu"
            },
            "contactInfo" : {
                "companyName" : "blab",
                "emailAddress" : "oiu",
                "firstName" : "oio",
                "lastName" : "ui",
                "phoneNumber" : "oiu"
            }
        },
        {
            "id" :"6szikg3jhbtwgyb3ayvi",
            "contactAddress" : {
                "city" : "oiwerwu",
                "state" : "oaaai",
                "street" : "oaaeriu"
            },
            "contactInfo" : {
                "companyName" : "bldadsfab",
                "emailAddress" : "osereiu",
                "firstName" : "oiwero",
                "lastName" : "uidsf",
                "phoneNumber" : "asdfoiu"
            }
        }
]



export default class Page extends Component {
  render () {
  	var customers = this.customers;
		return (
			<section id="data">
        {customers}
      </section>
		);
	}
}