import React, { Component } from 'react';
import numeral from 'numeral';
import ClickOutside from 'react-click-outside';

import ContentEditable from 'components/ContentEditable';

import './EditableItem.scss';

class EditableItem extends Component {

	static defaultProps = {
		editable : true,
		type : 'String'
	}

	state = {
		focused : false,
		value : this.props.value
	}

	value () {
		const { focused } = this.state;
		return this.formatValue(this.props.value) || this.props.value || '';
		return this.props.value || '';
	}

	cleanValue = () => {
		//TODO Strip out html;
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

	onFocus = (event) => {
		this.setState({focused : true});
	}

	onBlur = (event) => {
		this.contentEditable.htmlEl.blur();
		this.setState({focused : false});
	}

	handleClickOutside = () => {
		this.onBlur();
	}

	handleKeyPress = (event) => {
    if(event.key == 'Enter'){
    	event.preventDefault();
    	this.onSave(event);
    }
	}

	onChange = (event) => {
		let value = this.parseValue(event.target.value)

		const { type } = this.props;

		if (type && type === 'Number') {
			value = Number(value);
		}

		if (type && type === 'String') {
			value = String(value);
		}

		this.setState({value});
		if(this.props.onChange) { this.props.onChange(value)}
	}

	onCancel = (event) => {
		//TODO
	}

	onSave = (event) => {
		this.onBlur();
		const {value} = this.state;
		if(this.props.onSave) { this.props.onSave(value)}
	}

	render() {
		return (
			<div className="editable-item grid-flex left no-break tight-gutter">
				{this.props.label ? (
					<div className="col no-grow">
						<p className="medium-weight light-text-color">{this.props.label}</p>
					</div>
				) : false}

				<div onKeyPress={this.handleKeyPress} className="col no-grow">
				{this.props.editable ? (
					<ContentEditable
						ref={(el) => this.contentEditable = el}
						onFocus={this.onFocus}
						onChange={this.onChange}
						tagName="p"
						className="medium-weight"
						html={this.value()}
					/>
				) : (
					<p className="medium-weight">{this.props.value}</p>
				)}

				{this.state.focused ? (
					<span
						onClick={this.onSave}
						className="material-icons icon main-color md-18">check</span>
				) : false}

				</div>
			</div>
	);
	}
}

export default ClickOutside(EditableItem);
