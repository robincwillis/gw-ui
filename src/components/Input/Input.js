import React, { Component } from 'react';

import Typeahead from '../Typeahead/Typeahead';
import InlineSVG from 'svg-inline-react';

export default class Input extends Component {

  constructor (props) {
    super(props);
    this.state = {
        inputClass: this.props.inputClass
    };
  }

  inputType () {
    var inputType = 'text';
    if (this.props.inputType) {
      inputType = this.props.inputType;
    }
    return inputType;
  }

  inputClass () {
    var inputClass = 'input-wrap';
    if (this.props.inputType) {
      inputClass += ' ' + this.props.inputType;
    }
    if (this.props.inputClass) {
      inputClass += ' ' + this.state.inputClass;
    }
    return inputClass;
  }

  inputPlaceholder () {
    var placeholderText = this.props.inputType;
    if (this.props.placeholder) {
        placeholderText = this.props.placeholder;
    }
    else if (this.props.placeholder == false) {
      placeholderText = '';
    }
    return placeholderText;
  }

  // TO DO Only works on the first textarea on the page. not THIS one
  autoResize () {
    var textarea = document.querySelector(this.props.inputType);
    var heightLimit = 1000; /* Maximum height: 200px */
    textarea.style.height = ""; /* Reset the height*/
    textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
  };

  createInput () {
    if (this.props.inputType === 'select') {
      var options = this.props.options
      var listOptions = options.map((option) =>
        <option>{option}</option>
      );
      return (
        <div className="select-wrap">
          <select
            placeholder={this.inputPlaceholder()}
            {...this.props.extraProps}
          >
            {listOptions}
          </select>
          <div className="icon light-text-color">
            <div className="css-icon-arrow" />
          </div>
        </div>
      )
    }
    else if (this.props.inputType === 'typeahead') {
      return (
        <Typeahead {...this.props}/>
      )
    }
    else if (this.props.inputType === 'checkbox' || this.props.inputType === 'radio') {
      return (
        <div>
        <input
          type={this.inputType()}
          placeholder={this.inputPlaceholder()}
          value={this.props.inputValue}
          id={this.props.inputValue}
          name={this.props.inputName}
          {...this.props.extraProps}
        />
        <label htmlFor={this.props.inputValue}><span/>{this.props.inputValue}</label>
        </div>
      )
    }
    else if (this.props.inputType === 'textarea') {
      return (
        <textarea
          type={this.inputType()}
          placeholder={this.inputPlaceholder()}
          value={this.props.inputValue}
          name={this.props.inputName}
          rows="4"
          onInput={this.autoResize.bind(this)}
          {...this.props.extraProps}
        />
      )
    }
    else {
      return (
        <input
          type={this.inputType()}
          placeholder={this.inputPlaceholder()}
          value={this.props.inputValue}
          name={this.props.inputName}
          {...this.props.extraProps}
        />
      )
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