import React, { Component } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import FileUpload from 'components/FileUpload';

import ClickOutside from 'react-click-outside';

import './AddContentBetween.scss';

class AddContentBetween extends Component {

	state = {
		addingContent : false,
		content : null,
		options : []
	}

	setOptions (options) {
		if (options) {
			options.push({label : 'Other', value : 'custom'});
		} else {
			// No options? Is that cool?
			console.warn('AddContentBetween : created without options for ', this.props.label);
		}

		this.setState({options});
	}

	componentWillMount () {
		const { options } = this.props;
		this.setOptions(options);
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.options && this.state.options.length !== nextProps.options.length) {
			this.setOptions(nextProps.options);
		}
	}


	handleContentAdding = (event) => {

		const { options } = this.state;

		if(event && event.value) {

			this.setState({
				addingContent : false
			});

			if(event.value === 'custom') {
				// Throw up appropriate Modal
				if (this.props.addCustomFunc === undefined) {
					console.warn('AddContentBetween: Tried to call addCustomFunc, but no prop exists for it')
				} else {
					this.props.addCustomFunc();
				}

			}
			// should else be a no op
			// else if(event.value !== this.state.content){
			// }
			else {
				this.props.addFunc(event.value);
			}


		} else if (options[0].value) {
			this.setState({
				addingContent : false
			});;
			this.props.addFunc(event.value);
		} else {
			console.log('nothing selected');
		}

	}

	handleContentAddingImmediate = () => {
		const { options } = this.state;
		this.props.addFunc(options[0]);
	}

	addContent = () => {
		this.setState({addingContent : true});
	}

	handleClickOutside = () => {
		this.setState({addingContent : false});
	}

	className () {
		let className = 'add-content-between';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		if (this.props.iconLeft) {
			className += ' has-left-icon';
		}
		if (this.state.addingContent) {
			className += ' adding-content';
		}
		return className;
	}

	render () {

		const { label, reportId, vulnerabilityId, debug } = this.props;
		const { options } = this.state;

		if(label === "Add Images" && !vulnerabilityId && debug) {
			console.warn('AddContentBetween : for Images required vulnerabilityId')
		}

		if(label === "Add Images" && !reportId && debug) {
			console.warn('AddContentBetween : for Images required reportId')
		}

		return (
			<div className={this.className()}>
				{this.state.addingContent ? (
					options ? (
						this.props.iconLeft ? (
							<div className="grid-flex no-gutter no-break top">
								<div className="col no-grow"><span className="material-icons icon left">{this.props.iconLeft}</span></div>
								<div className="col grow">
									<Input
										type="typeahead"
										name="add-content"
										className="minimal"
										placeholder={this.props.label}
										autoFocus={this.state.addingContent ? true : false}
										options={options}
										openOnFocus={true}
										onChange={this.handleContentAdding}
										value={this.state.content}
									/>
								</div>
							</div>
						) : (
							<Input
								type="typeahead"
								name="add-content"
								className="minimal"
								placeholder={this.props.label}
								autoFocus={this.state.addingContent ? true : false}
								options={options}
								openOnFocus={true}
								onChange={this.handleContentAdding}
								value={this.state.content}
							/>
						)
					) : (
						<FileUpload
							multiple={true}
							autoOpen={true}
							reportId={reportId}
							vulnerabilityId={vulnerabilityId}
							accept='image/*'
							component={
								<div className="add-line">
									{this.props.label ? (this.props.label) : false}
								</div>
							}
							visibleActions={false}
						/>
					)
				) : (
					<div
						className="add-line"
						//onClick={options && options.length <= 2 ? this.handleContentAddingImmediate : this.addContent.bind(this)}
						onClick={this.props.addContentImmediate ? this.handleContentAddingImmediate : this.addContent}
					>
						{this.props.label && !this.state.addingContent ? (
							<div className="label">
								{this.props.iconLeft ? (
									<div className="grid-flex no-gutter no-break top">
										<div className="col no-grow"><span className="material-icons icon left">{this.props.iconLeft}</span></div>
										<div className="col grow"><span className="label-text">{this.props.label}</span></div>
									</div>
								) : (
									this.props.label
								)}
							</div>
						) : false}

						<div className="line" />
						<div className="button-wrap">
							<Button icon="add" className="circle tiny" tabIndex="-1" />
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default ClickOutside(AddContentBetween);
