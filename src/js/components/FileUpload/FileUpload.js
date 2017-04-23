import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';

import Dropzone from 'react-dropzone';
import Button from 'components/Button';

const filesPath = 'files';

class FileUploader extends Component {

	onFileDrop (files) {
		console.log(files);
		const { firebase } = this.props;
		let dbPath = filesPath;
		firebase.uploadFile(filesPath, files[0], dbPath).then( (response)=> {
			console.log(response);
			this.props.updateProductCover(response.key);
		});
	}

	deleteFile (file, fileId) {
		const { firebase } = this.props;
		firebase.deleteFile(file.fullPath, `${filesPath}/${fileId}`).then( (response)=> {
			this.props.updateProductCover(null);
		});
	}

	render () {

		const { files } = this.props;

		let fileId = this.props.product.cover;
		let productFile = files ? files[fileId] : null;

		return (
			<div className="file-uploader">


				{ productFile ? (
					<div>
						<img src={productFile.downloadURL} />
						<Button
							label="Delete File"
							onClick={this.deleteFile.bind(this, productFile, fileId)}
						/>
					</div>
					) : (
					<Dropzone
						multiple={false}
						accept="image/*"
						className="empty-area"
						onDrop={this.onFileDrop.bind(this)}
					>
						<div className="label">
							<div className="text">
								Drag and drop file here
								or click to select
							</div>
						</div>
					</Dropzone>
				)}


		</div>);
	}
}

const fbWrappedComponent = firebaseConnect([
	filesPath
])(FileUploader);

export default connect(
	({ firebase }) => ({
		files: dataToJS(firebase, filesPath)
	})
)(fbWrappedComponent);

