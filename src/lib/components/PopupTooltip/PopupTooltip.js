import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PopperJS, { referenceObject } from 'popper.js';

import './PopupTooltip.scss';

import ClickOutside from 'react-click-outside';

export class PopupTooltip extends Component {

	render() {
		return (
			<div
				className={'popup-tooltip ' + this.props.className}
			>
				{this.props.children}
			</div>
		);
	}
}

export default ClickOutside(PopupTooltip);
