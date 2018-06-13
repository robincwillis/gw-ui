import React, { Component } from 'react';
import numeral from 'numeral';

import Loader from 'components/Loader';

import './Input.scss';

export class Input extends Component {

	static defaultProps = {
		type : 'text',
		hasValue : false,
		iconPosition : 'after'
	}

	state = {
		type : this.props.type,
		className : this.props.className,
		hasValue : this.props.value ? true : false,
		focused : false,
	}

	className () {
		let className = this.props.type + ' ' + this.state.className + ' ' + 'input-wrap';
		if(this.state.error) { className += ' ' + 'error' }
		if(this.state.validated) { className += ' ' + 'validated' }
		if(this.state.hasValue) { className += ' has-value' }

		if(this.props.icon || this.props.loading || this.props.type === 'password') {
			className += ' has-icon-'+this.props.iconPosition;
		}

		return className;
	}

	value () {
		const { focused } = this.state;
		if (!focused) { return this.formatValue(this.props.value)}
		return this.props.value || '';
	}

	formatValue = (value) => {
		const { format } = this.props;
		if (!value) { return '' }
		if(this.props.format) { return numeral(value).format(format)}
		return value;
	}

	parseValue = (value) => {
		const { type } = this.props;
		if(this.props.format) {
			let parsed = numeral(value).value();
			return parsed;
		}
		return value;
	}

	handleChange = (event) => {
		let value = this.parseValue(event.target.value)

		this.setState({
			hasValue : event.target.value && event.target.value.length > 0 ? true : false
		});

		if(this.props.maxLength) {
			value = value.substring(0, this.props.maxLength);
		}

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

	handleKeyPress = (event) => {
		if(this.props.onKeyPress) { this.props.onKeyPress(event)}
	}

	icon () {
		if (this.props.loading) {
			return(<i key="icon" className={"icon " + this.props.iconPosition}><Loader key="loader" className="normal" /></i>)
		} else if (this.props.secondary && this.props.iconPosition === 'after') {
			return false;
		} else if (this.props.icon) {
			return(<i key="icon" className={"material-icons icon " + this.props.iconPosition}>{this.props.icon}</i>);
		}	else if (this.props.type == 'password') {
			return(
				<i key="icon" className={"material-icons icon " + this.props.iconPosition}
					onClick={() => this.setState({type : this.state.type === 'password' ? 'text' : this.props.type})}
				>remove_red_eye</i>);
		}
		return false;
	}

	label = () => (
		<label key='label' htmlFor={this.props.id}>{this.props.label}</label>
	)

	input = () => (
		<input
			key='input'
			type={this.state.type}
			value={this.value()}
			placeholder={this.props.placeholder || ''}
			disabled={this.props.disabled || this.props.loading}
			autoFocus={this.props.autoFocus}
			autoComplete={this.props.autoComplete}
			name={this.props.name}
			onChange={this.handleChange}
			onFocus={this.handleFocus}
			onBlur={this.handleBlur}
			onKeyPress={this.handleKeyPress}
			readOnly={this.props.readOnly}
			{...this.props.inputProps}
		/>
	)

	secondary () {
		if (this.props.loading) {
			return false;
		} else if (this.props.error && typeof this.props.error === 'string') {
			return (<span key="error" className="error-message">{this.props.error}</span>);
		} else if(this.props.secondary) {
			return (<span key="secondary" className="secondary">{this.props.secondary}</span>);
		}
		return false;
	}

	wrap (inputElements) {
		if (this.props.label) {
			return( <div className="input-with-label">{inputElements}</div>)
		}
		return inputElements;
	}

	render() {
		const inputElements = [ this.input(), this.icon(), this.label(), this.secondary()];

		return (
			<div className={this.className()}>
				{this.wrap(inputElements)}
			</div>
		);
	}
}

export default Input;
