import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

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

  clickHandler (event) {
    this.props.clickEvent(event);
  }

	render () {
		return (
			<button
        // onClick={this.clickHandler.bind(this)}
        className={this.buttonClass()}
        data-tooltip-text={this.props.tooltipText}
        data-tooltip-position={this.props.tooltipPosition}
        {...this.props.extraProps}
      >
        <div className="state-icon loader">
          <div className="spinner"></div>
        </div>
        <div className="state-icon success">
          <div className="css-icon-check"></div>
        </div>
        <div className="state-icon error">
          <div className="css-icon-x"></div>
        </div>
        <div className="btn-label">
          {this.buttonIcon()}{this.buttonLabel()}
        </div>
      </button>
		);
	}
}