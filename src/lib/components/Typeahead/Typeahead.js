import React, { Component } from 'react';

//https://github.com/JedWatson/react-select/issues/1661
import Select from 'react-select';
import Button from 'components/Button';
import './Typeahead';

export default class Typeahead extends Component {

	static defaultProps = {
		options : [],
		button : false,
		buttonIcon : ''
	}

	componentDidMount () {
    if(this.props.autoFocus) {
    	this.select.focus();
  	}
	}

	button () {
		if (this.props.button) {
			return (
				<Button
					label={this.props.button}
					icon={this.props.buttonIcon}
					className="fixed-typeahead-btn"
					{...this.props.buttonProps}
				/>
			);
		}
		return false;
	}

	render () {

		return (
			<div>
				<Select
					ref={(el) => {this.select = el}}
					name={this.props.name}
					value={this.props.value}
					options={this.props.options}
					placeholder={this.props.placeholder}
					onChange={this.props.onChange}
					autoFocus={this.props.autoFocus}
					autosize={true}
					openOnFocus={this.props.openOnFocus}
				/>
				{this.button()}
			</div>
		);
	}
}