import React, { Component } from 'react';
import { render } from 'react-dom';

import Gallery from 'react-photo-gallery';
import Photo from './Photo';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import './Gallery.scss';

const SortablePhoto = SortableElement(Photo);
const SortableGallery = SortableContainer(({images}) => {
  return <Gallery images={images} ImageComponent={SortablePhoto} columns={2} />
});

class GWGallery extends Component {

  onSortEnd ({ oldIndex, newIndex }) {
  }

	render() {
		return (
			<div className="gw-gallery">
				{this.props.sortable ? (
					<SortableGallery
						columns={2}
						axis={"xy"}
						photos={this.props.images}
						onSortEnd={this.onSortEnd.bind(this)}
					/>
				) : (
					<Gallery
						photos={this.props.images}
						ImageComponent={this.props.customComponent ? (this.props.customComponent) : (Photo)}
						columns={2} />
				)}
			</div>
		);
	}
}

export default GWGallery;