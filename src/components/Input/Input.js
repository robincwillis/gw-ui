import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Typeahead from '../Typeahead/Typeahead';

import ErrorIcon from '../Icons/Check';
import CheckIcon from '../Icons/Check';
import DownArrow from '../Icons/ArrowDown';

import './input';

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

  inputId () {
    var inputId = '';
    if (this.props.inputId) {
      inputId += ' ' + this.state.inputId;
    }
    return inputId;
  }

  inputClass () {
    var inputClass = 'input-wrap';
    if (this.props.inputType) {
      inputClass += ' ' + this.props.inputType;
    } else {
      inputClass += ' text';
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

  inputLeftIcon () {
    var icon = '';
    if (this.props.leftIcon) {
      icon = (<InlineSVG src={this.props.leftIcon} element="span" className="icon left" />);
    }
    return icon;
  }

  inputRightIcon () {
    var icon = '';
    if (this.props.rightIcon) {
      icon = (<InlineSVG src={this.props.rightIcon} element="span" className="icon right" />);
    }
    return icon;
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
          <InlineSVG src={DownArrow} element="span" className="icon right" />
        </div>
      )
    }
    else if (this.props.inputType === 'typeahead') {
      return (
        <Typeahead {...this.props}/>
      )
    }
    else if (this.props.inputType === 'checkbox' || this.props.inputType === 'radio') {
      var inputLabel = <div className="text">{this.props.inputValue}</div>;
      if (this.props.hideLabel == 'true') {
        inputLabel = '';
      }
      return (
        <div>
        <input
          type={this.inputType()}
          value={this.props.inputValue}
          id={this.props.inputValue}
          name={this.props.inputName}
          {...this.props.extraProps}
        />
        <label htmlFor={this.props.inputValue}><span/>{inputLabel}</label>
        </div>
      )
    }
    else if (this.props.inputType === 'toggle') {
      var inputLabel = <div className="text"><span className="off-label">{this.props.offLabel}</span><span className="on-label">{this.props.onLabel}</span></div>;
      if (this.props.hideLabel == 'true') {
        inputLabel = '';
      }
      return (
        <div>
        <input
          className="toggle"
          type="checkbox"
          value={this.props.inputValue}
          id={this.props.inputValue}
          name={this.props.inputName}
          {...this.props.extraProps}
        />
        <label htmlFor={this.props.inputValue}><div className="switch"/>{inputLabel}</label>
        </div>
      )
    }
    else if (this.props.inputType === 'tabs') {
      var options = this.props.options
      var listRadios = options.map((option) =>
        <input type="radio" name={this.props.tabName} id={option}/>
      );
      var listOptions = options.map((option) =>
        <label className="tab" htmlFor={option}>{option}</label>
      );
      return (
        <form name={this.props.tabName} className="ui-tabs">
          {listRadios}
          {listOptions}
          <span className="underline"/>
        </form>
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
    else if (this.props.inputType === 'search') {
      return (
        <div class="search-wrap">
          <InlineSVG src={SearchIcon} element="span" className="icon" />
          <input
            type="text"
            placeholder={this.inputPlaceholder()}
            value={this.props.inputValue}
            name={this.props.inputName}
            {...this.props.extraProps}
          />
        </div>
      )
    }
    else {
      return (
        <div>
          {this.inputLeftIcon()}
          {this.inputRightIcon()}
          <input
            type={this.inputType()}
            placeholder={this.inputPlaceholder()}
            value={this.props.inputValue}
            name={this.props.inputName}
            {...this.props.extraProps}
          />
        </div>
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