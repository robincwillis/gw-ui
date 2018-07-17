import React, { Component } from 'react';

import './ImageList.scss';

export class ImageList extends Component {

	state = {
		selectedImage : null
	};

	selectImage = (id, event) => {
		const image = this.props.images.find(image => image.id === id)
		this.setState({
			selectedImage : id
		});
	}

	deleteImage = (id, event) => {
		event.preventDefault();
		event.stopPropagation();
	}

	render() {
		return (
			<div className="container space-before space-after">
				<div className="sponsorship-uploads">
					{ this.props.images.map( (image, index) => {
						return(
							<div  key={index} className="inline-grid gutter-tight v-spaced-normal">
								<div
									onClick={this.selectImage.bind(this, image.id)}
									className={this.state.selected === image.id ? "col-1 grow align-left image-name selected" : "col-6 align-left image-name"}
								>
									<p className="tiny-caps ellipsis">{image.attributes.name}</p>
								</div>
								<div className="col no-grow">
									<p className="light-text-color small">
										<a onClick={this.deleteImage.bind(this, image.id)} className="hover-alert">Delete</a>
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<Modal
					title="Delete Image"
					id="delete-image"
				/>
			</div>
		);
	}
}

export default ImageList;
