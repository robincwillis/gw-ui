import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { closeModal } from 'actions/modal';

import Button from 'components/Button';
import CloseX from '../../../assets/icons/x';
import Trash from '../../../assets/icons/trash';

import './modal.scss';

class ConfirmComponent extends Component {

	handleClose (result, event) {
		this.props.handleClose(event, result);
	}

	render () {

		let message = this.props.modal.get('message');
		return (<div className="align-center">
			<p className="lg">{message ? message : 'Are your sure you want to do this?'}</p>

			<div className="modal-actions">
				<Button
					buttonClass="secondary"
					onClick={this.handleClose.bind(this, false)}
					label="Cancel"
				/>
				<Button
					buttonClass="alert"
					onClick={this.handleClose.bind(this, true)}
					label="Delete"
				/>
			</div>
		</div>);
	}
}

class ModalContainer extends Component {

	handleClose = (event, result) => {
		this.props.closeModal();
		let onClose = this.props.modal.get('onClose');
		if(onClose) {
			onClose(result);
		}
	}

	render () {
		let props = this.props.modal.toJS();
		let styles = {
			overlay : {
				zIndex : 1000,
			}
		};

		return (
				<Modal
					style={styles}
					isOpen={props.modalOpen}
					onAfterOpen={this.props.afterOpen}
					onRequestClose={this.handleClose.bind(this)}
					closeTimeoutMS={400}
					contentLabel="Modal"
					className="gw-modal"
					overlayClassName="gw-modal-container gw-overlay"
					title="title"
				>
					<div>
						<Button
							buttonClass="close-modal circle transparent small"
							onClick={this.handleClose.bind(this)}
							icon={CloseX}
						/>
						<div className="gw-modal-header">
							<h5 className="title"><span>Delete Order</span></h5>
						</div>
						<div className="gw-modal-content">
							{props.component ? props.component :
								(<ConfirmComponent
									handleClose={this.handleClose.bind(this)}
									{...this.props}
								/>)
							}
						</div>
					</div>
				</Modal>
		);
	}
}

const mapStateToProps = (state) => {
	return {modal : state.modal};
};

const mapDispatchToProps = (dispatch) => {
	return {
		closeModal : () => {dispatch(closeModal());}
	};
};

export default connect(mapStateToProps,
	mapDispatchToProps)(ModalContainer);

