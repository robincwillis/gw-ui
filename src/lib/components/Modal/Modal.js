import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { hideModal } from 'actions/modal';

import Button from 'components/Button';
import Cross from 'assets/icons/cross';

import './Modal.scss';
import './takeover.scss';

export class ModalContent extends Component {
	render () {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export class Footer extends Component {

	state = {}

	handleClose (result, event) {
		this.props.handleClose(result, event);
	}

	onCancel = () => {
		if (this.props.componentsLength > 1 && this.props.componentIndex > 0) {
			this.props.handlePrev();
		} else {
			this.handleClose(false);
		}
	}

	onConfirm = () => {
		if (this.props.componentsLength > 1 && this.props.componentIndex < this.props.componentsLength - 1) {
			this.props.handleNext(true);
		} else {
			this.handleClose(true);
		}
	}

	render () {
		return (
			this.props.hideFooter ? (false) : (
			<div className="gw-modal-footer">
				<div className="modal-actions">
					{this.props.cancelVisible ? (
						<Button
							disabled={this.props.cancelDisabled}
							label={this.props.cancelLabel}
							onClick={this.props.cancelAction ? this.props.cancelAction : this.onCancel}
							className="secondary large"
							className={this.props.cancelClass ? ("secondary large " + this.props.cancelClass) : "secondary large"}
						/>
					) : false}
					{this.props.confirmVisible ? (
					<Button
						disabled={this.props.confirmDisabled}
						label={this.props.confirmLabel}
						onClick={this.props.confirmAction ? this.props.confirmAction : this.onConfirm}
						className={this.props.confirmClass ? ("large " + this.props.confirmClass) : "large"}
					/>
					) : false}
				</div>
			</div>
			)
		)
	}
}

export class ConfirmComponent extends Component {

	handleClose (result, event) {
		this.props.handleClose(event, result);
	}

	render () {
		let message = this.props.modal.get('message');
		return (
			<div className="align-center">
				<p className="lg">{message ? message : 'Are your sure you want to do this?'}</p>
			</div>
		);
	}
}

class ModalContainer extends Component {

	static defaultProps = {
		componentsLength : 1,
		componentIndex : 0,
		confirmDisabled : false,
		cancelDisabled : false,
		cancelVisible : true,
		confirmVisible : true,
		closeTimeout : 400
	}

	state = {
		modalClass : this.props.modalClass || false,
		hideFooter : this.props.hideFooter || false,
		scrollable : this.props.scrollable || false,
		title : this.props.title || false,
		componentsLength : this.props.children && this.props.children.length ? this.props.children.length : 1,
		componentIndex : 0,
		confirmLabel : this.props.confirmLabel || 'Save',
		cancelLabel : this.props.cancelLabel || 'Cancel',
		confirmAction : this.props.confirmAction || false,
		cancelAction : this.props.cancelAction || false,
		confirmDisabled : this.props.confirmDisabled,
		cancelDisabled : this.props.cancelDisabled,
		cancelVisible : this.props.cancelVisible,
		confirmVisible : this.props.confirmVisible
	}

	updateState = (newState) => {
		let state = Object.assign(this.state, newState);
		this.setState(state);
	}

	resetState = () => {
		this.setState({
			modalClass : this.props.modalClass || false,
			hideFooter : this.props.hideFooter || false,
			scrollable : this.props.scrollable || false,
			title : this.props.title || false,
			componentIndex: this.props.componentIndex,
			confirmLabel : this.props.confirmLabel || 'Save',
			cancelLabel : this.props.cancelLabel || 'Cancel',
			confirmAction : this.props.confirmAction || false,
			cancelAction : this.props.cancelAction || false,
			confirmDisabled : this.props.confirmDisabled,
			cancelDisabled : this.props.cancelDisabled,
			cancelVisible : this.props.cancelVisible,
			confirmVisible : this.props.confirmVisible
		});
	}

	componentWillMount() {
    Modal.setAppElement('body');
 	}


	handleClose = (result) => {

		let beforeClose = this.props.modal.get('beforeClose');
		let onClose = this.props.modal.get('onClose');

		if (beforeClose && result) {
			const beforeClosePromise = beforeClose(result, this.state);
			if(beforeClosePromise instanceof Promise) {
				beforeClosePromise.then( (result) => {
					this.props.closeModal();
					if (onClose) {onClose(result, this.state)}
				});
			} else {
				console.warn("Modal has beforeClose, but it's not a Promise");
			}
		} else {
			this.props.closeModal();
			if (onClose) {onClose(result, this.state)}
		}

		setTimeout( () => {
			this.resetState();
		}, this.props.closeTimeout);

	}

	advanceModal = (result) => {
		const componentIndex = this.state.componentIndex + 1;
		if(componentIndex < this.state.componentsLength) {
			this.setState({ componentIndex });
			let onNext = this.props.modal.get('onNext');
			if(onNext) {
				onNext(result, this.state, componentIndex);
			}
		}
	}

	handleNext = (result) => {
		let beforeNext = this.props.modal.get('beforeNext');
		if (beforeNext) {
			const beforeNextPromise = beforeNext(result, this.state);
			if(beforeNextPromise instanceof Promise) {
				beforeNextPromise.then( (result) => {
					this.advanceModal(result);
				});
			} else {
				console.warn("Modal has beforeNext, but it's not a Promise");
			}
		} else {
			this.advanceModal(result);
		}
	}

	handlePrev = (result) => {
		const componentIndex = this.state.componentIndex - 1

		if(this.state.componentIndex > 0 ) {
			this.setState({ componentIndex });
			let onPrev = this.props.modal.get('onPrev');
			if(onPrev) {
				onPrev(componentIndex, this.state);
			}
		}
	}

	renderTitle () {
		let title = this.props.modal.get('title');
		if (this.props.title) {
			title = this.props.title
		} else if (this.state.title) {
			title = this.state.title
		}
		return title
	}

	getClassName (extraClasses) {
		let className = "gw-modal " + this.props.modal.get('className');
		if (this.props.className) {
			className = "gw-modal " + this.props.className
		}
		if (extraClasses) {
			className += ' ' + extraClasses
		}
		return className
	}

	renderChildren () {
		let modalProps = this.props.modal.toJS();

		const props = Object.assign({
			handleClose : this.handleClose,
			handleNext : this.handleNext,
			handlePrev : this.handlePrev,
			updateState : this.updateState,
			componentsLength : this.state.componentsLength,
			componentIndex : this.state.componentIndex,
		}, modalProps.component);

		if(!this.props.children) {
			return (<ConfirmComponent {...this.props} {...props} />);
		}

		if(this.props.children.constructor === Array ) {
			return React.cloneElement(this.props.children[this.state.componentIndex], props);
		}

		if(this.props.children.constructor === Object ) {
			return React.cloneElement(this.props.children, props);
		}

		if(this.props.children.constructor === String ) {
			return this.props.children;
		}

		return false;
	}

	render () {
		let modalProps = this.props.modal.toJS();

		if(modalProps.id !== this.props.id) {
			return false;
		}

		let styles = {
			overlay : {
				zIndex : 1000,
			}
		};

		return (
				<Modal
					style={styles}
					isOpen={modalProps.modalOpen && modalProps.id === this.props.id}
					onAfterOpen={this.props.afterOpen}
					onRequestClose={this.handleClose.bind(this, false)}
					closeTimeoutMS={this.props.closeTimeout}
					contentLabel="Modal"
					className={this.getClassName(this.state.modalClass)}
					overlayClassName={this.props.overlayClassName ? "gw-modal-container gw-overlay scrollable-frame " + this.props.overlayClassName : "gw-modal-container gw-overlay"}
					title="title"
				>
					<div className="modal-inner">

						{this.renderTitle() ? (
							<div className="gw-modal-header">
								<div className="container">
									<div className="grid-flex no-break-tight-gutter middle">
										<div className="col grow">
											<h5 className="title"><span>{this.renderTitle()}</span></h5>
										</div>
										{this.props.showSteps ? (
											<div className="col no-grow">
												<span className="modal-steps">
													<b>{this.state.componentIndex + 1}</b>&nbsp;/&nbsp;{this.state.componentsLength}
												</span>
											</div>
										) : false}
										<div className="col no-grow">
											<Button
												className="close-modal transparent small circle"
												onClick={this.handleClose.bind(this, false)}
												icon="close"
											/>
										</div>
									</div>
								</div>
							</div>
						) : (
							<Button
								className="close-modal transparent small circle"
								onClick={this.handleClose.bind(this, false)}
								icon="close"
							/>
						)}

						{this.props.showSteps && !this.renderTitle() ? (<span className="modal-steps">{`${this.state.componentIndex + 1} / ${this.state.componentsLength}`}</span>) : false}

						<div className="gw-modal-content">
							<div className="container">
								{this.renderChildren()}
							</div>
						</div>

						<Footer
							{...this.props}
							hideFooter={this.state.hideFooter}
							scrollable={this.state.scrollable}
							handleClose={this.handleClose}
							handleNext={this.handleNext}
							handlePrev={this.handlePrev}
							updateState={this.updateState}
							componentsLength={this.state.componentsLength}
							componentIndex={this.state.componentIndex}

							confirmLabel={this.state.confirmLabel}
							confirmClass={this.state.confirmClass}
							confirmDisabled={this.state.confirmDisabled}
							confirmVisible={this.state.confirmVisible}
							confirmAction={this.state.confirmAction}

							cancelLabel={this.state.cancelLabel}
							cancelClass={this.state.cancelClass}
							cancelDisabled={this.state.cancelDisabled}
							cancelVisible={this.state.cancelVisible}
							cancelAction={this.state.cancelAction}
						/>

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
		closeModal : () => {dispatch(hideModal());}
	};
};

export default connect(mapStateToProps,
	mapDispatchToProps)(ModalContainer);

