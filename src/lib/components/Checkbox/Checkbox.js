import React, { Component } from 'react';

import './Checkbox.scss';

class Checkbox extends Component {

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
			{this.props.label ? (
				<label htmlFor={this.props.id ? this.props.id : this.props.value}>
					<div className="grid-flex no-break no-gutter left middle">
						<div className="col"><div className="checkbox"/></div>
						{this.props.label ? (<div className="col"><span className="pl-1">{this.props.label}</span></div>) : false}
					</div>
				</label>
			) : false}
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
