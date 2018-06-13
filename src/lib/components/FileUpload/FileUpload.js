import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import Button from 'components/Button';

import './FileUpload';

export class FileUploader extends Component {

	static defaultProps = {
		accept : 'audio/*,video/*,image/*',
		autoOpen : false,
		multiple : false,
		icon : 'image',
		button : true,
		buttonLabel : 'Upload File',
		buttonClassName : 'secondary',
		activeClassName : 'empty-area-active',
		acceptClassName : 'empty-area-accepted',
		rejectClassName : 'empty-area-rejected',
		disabledClassName : 'empty-area-disabled',
		dropzone : {}
	}

	state = {
		files : []
	}

	componentDidMount () {
		if(this.props.autoOpen == true) {
			this.fileUploader.open();
		}
	}

	onDrop = (files) => {
		this.setState({files : files});
		if(this.props.onDrop) {
			this.props.onDrop(files);
		}
	}

	onClick = () => {
		this.fileUploader.open();
	}

	removeFile () {

	}

	render () {
		return (
			<div className="file-uploader">
				<Dropzone
					multiple={this.props.multiple ? true : false}
					accept={this.props.accept}
					className="empty-area"
					activeClassName={this.props.activeClassName}
					acceptClassName={this.props.acceptClassName}
					rejectClassName={this.props.rejectClassName}
					disabledClassName={this.props.disabledClassName}
					ref={(thisUploader) => {this.fileUploader = thisUploader}}
					onDrop={this.onDrop}
					{...this.props.dropzone}
				>
					{this.props.component ? (
						this.props.component
					) : (
						<div className="uploader-area">
							<div className="image-wrap">
								<span className="material-icons icon md-36">{this.props.icon}</span>
							</div>
						</div>
					)}
				</Dropzone>
				{this.props.button ? (
					<div className="button-actions">
						<Button
							label={this.props.buttonLabel}
							className={this.props.buttonClassName}
							onClick={this.onClick}
						/>
					</div>
				) : false}
			</div>
		);
	}
}

export default FileUpload;


