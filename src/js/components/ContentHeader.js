import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import XIcon from 'assets/icons/x';

import 'sass/components/headers';

export default class ContentHeader extends Component {

	closeX () {
		if (this.props.closeable === 'true') {
			return (
				<div onClick={this.props.onClose} className="close">
					<InlineSVG src={XIcon} element="span" className="icon" />
				</div>
			);
		}
	}

	render () {
		return (
			<div className="content-header">
				<div className="container">
					<div className="left">
						<h1 className="page-title">{this.props.title}</h1>
					</div>
					<div className="right">
						{this.props.button ? this.props.button : false}
						{this.closeX()}
					</div>
				</div>
			</div>
		);
	}
}