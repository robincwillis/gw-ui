import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'util/actionWrapper';
import * as modalActions from 'actions/modal';

import InlineSVG from 'svg-inline-react';

import Input from 'components/Input';
import Button from 'components/Button';
import './SuccessModal.scss';


export class SuccessModal extends Component {

	render () {

		return (
			<div className="success-modal align-center padding-before padding-after stagger-in-items">
				{this.props.icon ? (
					<div className={this.props.iconColor ? (this.props.iconColor + " material-icons md-24 success-icon tight-space-after") : ("material-icons main-color md-24 success-icon tight-space-after")}>
						{this.props.icon}
					</div>
				) : false}
				{this.props.headline ? (<h3>{this.props.headline}</h3>) : false}
				{this.props.text ? (
					<div className="light-text-color tight-space-before">
						<p className={this.props.textSize ? (this.props.textSize + " medium-weight") : "md medium-weight"}>{this.props.text}</p>
					</div>
				) : false}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		modalActions
	}, dispatch);
};

export default connect(mapDispatchToProps)(SuccessModal)
