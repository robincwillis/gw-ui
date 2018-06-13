import React, { Component } from 'react';

import './toggle.scss';

class Toggle extends Component {

	static defaultProps = {
		hideLabel : false,
		onLabel : 'On',
		offLabel : 'Off',
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

	label = () => {

		if (this.props.hideLabel) {
			return false;
		} else if (this.props.onLabel && this.props.offLabel) {
			return (
				<div className="text">
					<span className="off-label">
						{this.props.offLabel}
					</span>
					<span className="on-label">
						{this.props.onLabel}
					</span>
				</div>
			);
		} else if (this.props.label) {
			return (
				<div className="text">
					{this.props.label}
				</div>
			);
		}
		return false;

	}

	toggle = () => (
		<div>
			<input
				className="toggle"
				type="checkbox"
				checked={this.props.checked}
				value={this.props.value}
				id={this.props.id ? this.props.id : this.props.name}
				name={this.props.name}
				onChange={this.handleChange}
				{...this.props.toggleProps}
			/>
			<label htmlFor={this.props.id ? this.props.id : this.props.name}>
				<div className="switch"/>
				{this.label()}
			</label>
		</div>
	)

	render() {
		return (
			<div className={this.className()}>
				{this.toggle()}
			</div>
		);
	}
}

export default Toggle;
