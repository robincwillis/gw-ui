import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

class Select extends Component {

	state = {
		className : this.props.className
	}

	className () {
		let className = this.state.className  + ' ' + 'input-wrap';
		if(this.state.error) { className += ' ' + 'error' }
		if(this.state.validated) { className += ' ' + 'validated' }
		if(this.state.hasValue) { className += ' has-value' }
		return className;
	}

	handleChange = (event) => {
		if(this.props.onChange) { this.props.onChange(event)}
	}

	handleFocus = (event) => {
		this.setState({focused : true});
		if(this.props.onFocus) {this.props.onFocus(event)}
	}

	handleBlur = (event) => {
		this.setState({focused : false});
		if (this.props.onBlur) {this.props.onBlur(event)}
	}

	select () {
		const { options } = this.props;
		return (
			<div className="select-wrap">
				<select
					disabled={this.props.disabled}
					placeholder={this.props.placeholder}
					defaultValue={this.props.value}
					name={this.props.name}
					onChange={this.handleChange}
					{...this.props.selectProps}
				>
					{options.map((option, index) => (
						<option
							key={index}
							disabled={option.disabled}
							value={option.value}
							selected={option.selected}
						>
							{option.label}
						</option>
					))}
				</select>
				<i className="material-icons icon select-icon">keyboard_arrow_down</i>
			</div>
		);

	}

	render() {
		return (
			<div className={this.className()}>
				{this.select()}
			</div>
		);
	}
}

Select.propTypes = {
	value : PropTypes.object,
	name : PropTypes.string,
  options : PropTypes.array,
  placeholder : PropTypes.string,
  className : PropTypes.string,
  disabled : PropTypes.bool,
  selectProps : PropTypes.object,
  onChange : PropTypes.func,
  onBlur : PropTypes.func,
  onFocus : PropTypes.func
}

Select.defaultProps = {
	options : [],
	placeholder : '',
	className : '',
	disabled : false,
	selectProps : {}
}


export default Select;




