import React, { Component } from 'react';

import './Checkbox.scss';

class Checkbox extends Component {

	static defaultProps = {
		className : ''
	}

	state = {
	}

	className () {
		let className = this.props.className  + ' ' + 'input-wrap';
		if(this.state.error) { className += ' ' + 'error' }
		if(this.state.validated) { className += ' ' + 'validated' }
		if(this.state.hasValue) { className += ' has-value' }
		return className;
	}

	handleChange = (event) => {
		if(this.props.onChange) { this.props.onChange(event)}
		console.log(event.target.value)
		console.log(event.target.checked)
	}

	renderLabel = () => {
		if (this.props.label && !this.props.customLabel) {
			return (
				<label htmlFor={this.props.id ? this.props.id : this.props.value}>
					<div className="grid-flex no-break gutter-none left middle">
						<div className="col"><div className="checkbox"/></div>
						{this.props.label ? (<div className="col"><span className="pl-1">{this.props.label}</span></div>) : false}
					</div>
				</label>
			)
		} else if (this.props.customLabel) {
			return (
				<label htmlFor={this.props.id ? this.props.id : this.props.value}>{this.props.customLabel}</label>
			)
		} else {
			return (
				<label htmlFor={this.props.id ? this.props.id : this.props.value}>
					<div className="checkbox"/>
				</label>
			)
		}
	}

	checkbox = () => (
		<div className="gw-checkbox">
			<input
				disabled={this.props.disabled}
				type="checkbox"
				placeholder={this.props.placeholder}
				value={this.props.value}
				id={this.props.id ? this.props.id : this.props.value}
				name={this.props.name}
				onChange={this.handleChange}
				checked={this.props.checked}
				autoComplete={this.props.autoComplete}
				readOnly={this.props.readOnly}
				{...this.props.checkboxProps}
			/>
			{this.renderLabel()}
		</div>
	)

	render() {

		return (
			<div className={this.className()}>
				{this.checkbox()}
			</div>
		);
	}
}

export default Checkbox;
