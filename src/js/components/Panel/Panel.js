import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from './Input';
import Button from './Button';

import ContentHeader from './ContentHeader';
import ContentFooter from './ContentFooter';

import 'sass/components/panel';

export default class Panel extends Component {

	switchPanel (props, componenet) {
		console.log('switch Panel');
		//this.props.switchPanel(props, panel);
	}

	render () {
		return (
			<div className="panel">
				<ContentHeader
					title={this.props.title}
					closeable="true"
					onClose={this.props.closeDrawer}
				/>
				<div className="panel-content">
					<div className="container">
						<div className="panel-section">
							<div className="panel-row">
								<p> some stuff here </p>
								<Button onClick={this.switchPanel.bind(this)} label="Switch Panel" />
							</div>
						</div>
					</div>
				</div>
				<ContentFooter
					onClose={this.props.closeDrawer}
					onCancel={this.props.onCancel}
					onConfirm={this.props.onConfirm}
					cancelLabel={this.props.cancelLabel}
					confirmLabel={this.props.confirmLabel}
				/>
			</div>
		);
	}
}
