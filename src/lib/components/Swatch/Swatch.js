import React, { Component } from 'react';

import './Swatch.scss';

class Swatch extends Component {

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

	swatch = () => (
		<div className="swatch">
			<input
				disabled={this.props.disabled}
				type="radio"
				style={{display: 'none'}}
				placeholder={this.props.placeholder}
				value={this.props.value}
				id={this.props.id ? this.props.id : this.props.value}
				name={this.props.name}
				onChange={this.handleChange}
				checked={this.props.checked}
				{...this.props.swatchProps}
			/>
			<label
				style={{display: 'block', background: this.props.value}}
				htmlFor={this.props.value}
			/>
		</div>
	)

	render() {
		return (
			<div className={this.className()}>
				{this.swatch()}
			</div>
		);
	}
}

export default Swatch;
