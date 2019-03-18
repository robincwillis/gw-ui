import React, { Component } from 'react';

import './Radio.scss';

class Radio extends Component {

	static defaultProps = {
		className : ''
	}

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

	renderLabel = () => {
		if (this.props.label && !this.props.customLabel) {
			return (
				<label htmlFor={this.props.id ? this.props.id : this.props.value}>
					<div className="grid-flex no-break gutter-none left middle">
						<div className="col"><div className="radio"/></div>
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
					<div className="radio"/>
				</label>
			)
		}
	}

	radio = () => (
		<div className="gw-radio">
			<input
				disabled={this.props.disabled}
				type="radio"
				placeholder={this.props.placeholder}
				value={this.props.value}
				id={this.props.id ? this.props.id : this.props.value}
				name={this.props.name}
				onChange={this.handleChange}
				checked={this.props.checked}
				autoComplete={this.props.autoComplete}
				readOnly={this.props.readOnly}
				{...this.props.radioProps}
			/>
			{this.renderLabel()}
		</div>
	)

	render() {
		return (
			<div className={this.className()}>
				{this.radio()}
			</div>
		);
	}
}

export default Radio;
