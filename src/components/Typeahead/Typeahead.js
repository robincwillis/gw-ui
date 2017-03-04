import React, { Component } from 'react';

import Select from 'react-select';
import './react-select'

export default class ContentHeader extends Component {

	render () {

		var options = [
		    { value: 'one', label: 'One' },
		    { value: 'two', label: 'Two' }
		];

		function logChange(val) {
		    console.log("Selected: " + val);
		}

		return (
			<div>
			<Select
		    name="form-field-name"
		    value="one"
		    options={options}
		    onChange={logChange}
			/>
			</div>
		);
	}
}