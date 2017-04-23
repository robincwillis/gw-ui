import React, { Component } from 'react';

import Select from 'react-select';
import Creatable from 'react-select';
import Button from 'components/Button';
import './react-select';

export default class Typeahead extends Component {

	fixedBtnOption () {
		var button = false;
		if (this.props.fixedBtn) {
			button = (<Button
				label={this.props.fixedBtn}
				icon={this.props.fixedBtnIcon}
				buttonClass="fixed-typeahead-btn"
			/>);
		}
		return button;
	}

	onNewOption(newOption) {
		return {
			value: newOption.label,
			label: newOption.label,
			className: 'Select-create-option-placeholder'
		};
	}

	render () {
		var addNewOption = (value) => { return { value, label: value }; }
		var options = this.props.options;

		function logChange(val) {
			console.log(val);
				console.log("Selected: " + val);
		}

		return (
			<div className="has-fixed-btn">
				{/*<Creatable
					newOptionCreator={this.onNewOption}
					name="form-field-name"
					value="one"
					options={options}
					onChange={logChange}
				/>*/}
				<Select
					name={this.props.name}
					value={this.props.value}
					options={options}
					onChange={this.props.onChange}
				/>
				{this.fixedBtnOption()}
			</div>
		);
	}
}