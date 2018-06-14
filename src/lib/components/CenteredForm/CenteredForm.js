import React, { Component } from 'react';

import './CenteredForm.scss';

export class CenteredForm extends Component {
	render() {
		return(
			<div className={this.props.className ? ('centered-form ' + this.props.className) : 'centered-form'}>
				{this.props.fixedHeader ? (
					<div className="fixed-header">
						{this.props.fixedHeader}
					</div>
				) : false}
				{this.props.formSteps ? (
					<div className="fixed-header">
						{this.props.formSteps}
					</div>
				) : false}
				<div className="main-content">
					{this.props.header ? (
						<div className="header">
							{this.props.header}
						</div>
					) : false}
					<div className="content">
						{this.props.children}
					</div>
					{this.props.footer ? (
						<div className="footer">
							{this.props.footer}
						</div>
					) : false}
				</div>
				{this.props.fixedFooter ? (
					<div className="fixed-footer">
						{this.props.fixedFooter}
					</div>
				) : false}
			</div>
		);
	}
}

export default CenteredForm;

