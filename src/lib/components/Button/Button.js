import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';

import './Button.scss';

class Button extends Component {

	constructor (props) {
		super(props)
		this.linkTo = this.linkTo.bind(this)
		this.state = {
			link : false,
		}
	}

	state = {
		state : this.props.state ? (this.props.state) : null,
	}

	componentDidUpdate () {
		// if (this.props.debug) {
		// 	console.log(this.props.state)
		// }
	}

	buttonClass () {
		var buttonClass = 'button';
		if (this.props.className) {
			buttonClass += ' ' + this.props.className;
		}
		if (this.props.cursor) {
			buttonClass += ' ' + this.props.cursor;
		}
		if(this.props.disabled) {
			buttonClass += ' disabled';
		}
		if(this.props.state) {
			buttonClass += ' ' + this.props.state;
		}
		return buttonClass;
	}

	buttonLabel () {
		var label = '';

		if (this.props.className && (this.props.className.includes('circle') || this.props.className.includes('square'))) {
			label = '';
		} else {
			label = (<div className="label">{this.props.children ? this.props.children : this.props.label}</div>);
		}

		return label;
	}

	buttonIcon (showIcon) {
		var icon = '';
		if (this.props.icon) {
			if (this.props.icon == "loader" || this.props.state == "loading") {
				icon = <Loader className="normal icon" />;
			} else if (this.props.state == 'success') {
				icon = (<i className="material-icons icon">check</i>);
			} else if (this.props.state == 'error') {
				icon = (<i className="material-icons icon">error_outline</i>);
			} else {
				icon = (<i className="material-icons icon">{this.props.icon}</i>);
			}
			if (this.props.state == "loading" && this.props.icon) {
				icon = <Loader className="normal icon" />;
			}
			if (this.props.state == "error") {
				icon = (<i className="material-icons icon">error_outline</i>);
			}
			if (this.props.state == "success") {
				icon = (<i className="material-icons icon">check</i>);
			}
		}
		if (showIcon) {
			if (this.props.state == "loading") {
				icon = <Loader className="normal icon" />;
			}
			if (this.props.state == "error") {
				icon = (<i className="material-icons icon">error_outline</i>);
			}
			if (this.props.state == "success") {
				icon = (<i className="material-icons icon">check</i>);
			}
		}
		return icon;
	}

	buttonRightIcon () {
		var icon = '';
		if (this.props.rightIcon) {
			if (this.props.rightIcon == "loader" || this.props.state == 'loading') {
				icon = <Loader className="normal icon" />;
			} else if (this.props.state == 'success') {
				icon = (<i className="material-icons icon">check</i>);
			} else if (this.props.state == 'error') {
				icon = (<i className="material-icons icon">error_outline</i>);
			} else {
				icon = (<i className="material-icons icon">{this.props.rightIcon}</i>);
			}
			if (this.props.state == "loading" && this.props.rightIcon) {
				icon = <Loader className="normal icon" />;
			}
			if (this.props.state == "error") {
				icon = (<i className="material-icons icon">error_outline</i>);
			}
			if (this.props.state == "success") {
				icon = (<i className="material-icons icon">check</i>);
			}
		}
		return icon;
	}

	handleClick (event) {
		if(this.props.onClick) {
			this.props.onClick(event);
		} else if (this.props.href) {
			var target = this.props.target ? this.props.target : '_self';
			window.open(this.props.href, target);
		}
	}

	linkTo () {
		if(this.props.history) {
			this.props.history.push(this.props.link);
		} else {
			console.log('tried to link with no history');
		}
	}

	render () {

		return (
			<button
				onClick={this.props.link ? this.linkTo : this.handleClick.bind(this)}
				className={this.buttonClass()}
				focus={this.props.focus}
				autoFocus={this.props.autoFocus}
				disabled={this.props.disabled}
				data-tooltip-text={this.props.state != "loading" ? (this.props.tooltipText) : null}
				data-tooltip-position={this.props.tooltipPosition}
				tabIndex={this.props.tabIndex}
				{...this.props.buttonProps}
			>
				{!this.props.icon && !this.props.rightIcon ? (
					this.props.state == "loading" ||
					this.props.state == "error" ||
					this.props.state == "success" ? (
						<div className="button-content">
							<div className="state-icon">
								{this.buttonIcon(true)}
							</div>
						</div>
					) : (
						<div className="button-content">
							{this.buttonLabel()}
						</div>
					)
				) : (
					<div className="button-content">
						{this.buttonIcon()}
						{this.buttonLabel()}
						{this.buttonRightIcon()}
					</div>
				)}

			</button>
		);
	}
}

Button.propTypes = {
	label : PropTypes.string,
	icon : PropTypes.string,
	state : PropTypes.string,
	className : PropTypes.string,
	focus : PropTypes.bool,
	disabled : PropTypes.bool,
	autoFocus : PropTypes.bool,
	buttonProps : PropTypes.object,
	onClick : PropTypes.func
}

Button.defaultProps = {
	label : 'Submit',
	className : '',
	disabled : false
}

export default Button;
