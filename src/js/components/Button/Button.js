import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import CheckIcon from 'assets/icons/check';
import XIcon from 'assets/icons/x';

import './buttons';

export default class Button extends Component {

  constructor (props) {
    super(props);
    this.state = {
        buttonClass: this.props.buttonClass
    };
  }

  buttonClass () {
    var buttonClass = 'button';
    if (this.state.buttonClass) {
      buttonClass += ' '+this.state.buttonClass;
    }
    if(this.props.disabled) {
      buttonClass += ' disabled';
    }
    return buttonClass;
  }

  buttonLabel () {
    var label = '';
    if (this.props.label) {
        label = (<span className="label">{this.props.label}</span>);
    }
    return label;
  }

  buttonIcon () {
    var icon = '';
    if (this.props.icon) {
        icon = (<InlineSVG src={this.props.icon} element="span" className="icon" />);
    }
    return icon;
  }

  buttonRightIcon () {
    var icon = '';
    if (this.props.rightIcon) {
        icon = (<InlineSVG src={this.props.rightIcon} element="span" className="icon" />);
    }
    return icon;
  }

  handleClick (event) {
    if(this.props.onClick) {
      this.props.onClick(event);
    }
  }

	render () {
    let disabled = this.props.disabled ? true : false;

		return (
      <button
        onClick={this.handleClick.bind(this)}
        className={this.buttonClass()}
        disabled={disabled}
        data-tooltip-text={this.props.tooltipText}
        data-tooltip-position={this.props.tooltipPosition}
        {...this.props.extraProps}
      >
        <div className="state-icon loader">
          <div className="spinner"><div className="spinner"/></div>
        </div>
        <div className="state-icon success">
          <InlineSVG src={CheckIcon} element="span" className="icon" />
        </div>
        <div className="state-icon error">
          <InlineSVG src={XIcon} element="span" className="icon" />
        </div>
        <div className="button-content">
          {this.buttonIcon()}{this.buttonLabel()}{this.buttonRightIcon()}
        </div>
      </button>
		);
	}
}