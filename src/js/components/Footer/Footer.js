import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import PlusIcon from 'assets/icons/circle';
import CrossIcon from 'assets/icons/x';
import CheckIcon from 'assets/icons/check';
import Button from './Button';

import './footers';

export default class Footer extends Component {

	confirm (event) {
		if(this.props.onConfirm) {
			this.props.onConfirm(event);
		}
		//TODO Remove This
		if(this.props.closeOnConfirm) {
			this.props.onClose(event);
		}
	}

	cancel (event) {
		if(this.props.onCancel) {
			this.props.onCancel(event);
		}
		if(this.props.onClose) {
			this.props.onClose(event);
		}
	}

	render () {
		return (
			<div className="content-footer">
				<div className="container">
					<div className="left">
						<Button
							icon={CrossIcon}
							buttonClass="transparent no-padding"
							label={this.props.cancelLabel || 'Cancel'}
							onClick={this.cancel.bind(this)}
						/>
					</div>
					<div className="right">
						<Button
							icon={CheckIcon}
							label={this.props.confirmLabel || 'Confirm'}
							onClick={this.confirm.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}