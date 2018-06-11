import React, { Component } from 'react';

import Typeahead from 'components/Typeahead';
import InlineSVG from 'svg-inline-react';

import './inputs';

export default class Input extends Component {

	constructor (props) {
		super(props);
		this.state = {
				inputClass: this.props.inputClass
		};
	}

	type () {
		var type = 'text';
		if (this.props.type) {
			type = this.props.type;
		}
		return type;
	}

	inputClass () {
		var inputClass = 'input-wrap';
		if (this.props.type) {
			inputClass += ' ' + this.props.type;
		}
		if (this.props.inputClass) {
			inputClass += ' ' + this.state.inputClass;
		}
		return inputClass;
	}

	inputPlaceholder () {
		var placeholderText = this.props.type;
		if (this.props.placeholder) {
				placeholderText = this.props.placeholder;
		}
		else if (this.props.placeholder === false) {
			placeholderText = '';
		}
		return placeholderText;
	}

	// TO DO Only works on the first textarea on the page. not THIS one
	autoResize () {
		var textarea = document.querySelector(this.props.type);
		var heightLimit = 1000; /* Maximum height: 200px */
		textarea.style.height = ""; /* Reset the height*/
		textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
	}

	createInput () {
		if (this.props.type === 'select') {
			var options = this.props.options;
			var listOptions = options.map((option, index) =>
				<option key={index} value={option.value} >{option.label}</option>
			);
			return (
				<select
					disabled={this.props.disabled}
					placeholder={this.inputPlaceholder()}
					value={this.props.value}
					name={this.props.name}
					onChange={this.props.onChange}
					{...this.props.extraProps}
				>
					{listOptions}
				</select>
			);
		}
    else if (this.props.type === 'toggle') {
      var inputLabel = <div className="text"><span className="off-label">{this.props.offLabel}</span><span className="on-label">{this.props.onLabel}</span></div>;
      if (this.props.hideLabel === 'true') {
        inputLabel = '';
      }
      return (
        <div>
        <input
          className="toggle"
          type="checkbox"
          checked={this.props.checked}
          value={this.props.value}
          id={this.props.name}
          name={this.props.name}
          onChange={this.props.onChange}
          {...this.props.extraProps}
        />
        <label htmlFor={this.props.name}><div className="switch"/>{inputLabel}</label>
        </div>
      );
    }
		else if (this.props.type === 'typeahead') {
			return (
				<Typeahead {...this.props}/>
			);
		}
		else if (this.props.type === 'checkbox' || this.props.type === 'radio') {
			return (
				<div>
				<input
					disabled={this.props.disabled}
					type={this.type()}
					placeholder={this.inputPlaceholder()}
					value={this.props.value}
					id={this.props.value}
					name={this.props.name}
					onChange={this.props.onChange}
					{...this.props.extraProps}
				/>
				<label htmlFor={this.props.value}>{this.props.value}</label>
				</div>
			);
		}
		else if (this.props.type === 'textarea') {
			return (
				<textarea
					disabled={this.props.disabled}
					type={this.type()}
					placeholder={this.inputPlaceholder()}
					value={this.props.value}
					name={this.props.name}
					rows="4"
					onInput={this.autoResize.bind(this)}
					onChange={this.props.onChange}
					{...this.props.extraProps}
				/>
			);
		}
		else {
			return (
				<input
					disabled={this.props.disabled}
					type={this.type()}
					placeholder={this.inputPlaceholder()}
					value={this.props.value || ''}
					name={this.props.name}
					onChange={this.props.onChange}
					{...this.props.extraProps}
				/>
			);
		}
	}

	render () {
		return (
			<div className={this.inputClass()}>
				{this.createInput()}
			</div>
		);
	}
}