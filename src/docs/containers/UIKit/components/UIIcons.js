import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class UIIcons extends Component {

	render() {

		return (
			<Section
				id={this.props.id}
				key={this.props.id}
				title="Icons"
				description={<div>
				<div className="grid-flex gutter-tight no-break left mb-gutter">
					<div className="col"><span className="material-icons md-48">check_circle</span></div>
					<div className="col"><span className="material-icons md-48">arrow_forward</span></div>
					<div className="col"><span className="material-icons md-48">photo</span></div>
					<div className="col"><span className="material-icons md-48">attachment</span></div>
					<div className="col"><span className="material-icons md-48">local_taxi</span></div>
					<div className="col"><span className="material-icons md-48">videogame_asset</span></div>
					<div className="col"><span className="material-icons md-48">add_circle_outline</span></div>
					<div className="col"><span className="material-icons md-48">more_horiz</span></div>
				</div>
				<p className="bold">The UI Kit uses <a href="https://material.io/tools/icons/?style=baseline" target="_blank">Material Icons</a>.</p>
				<p>Other than using the <code>.material-icons</code> class, we include the <code>material-icons</code> mixin for quick use.</p>
				<p className="sm light-text-color"><strong>ie:</strong> <code>@include material-icons($size);</code> The default size is 18px</p>
			</div>}
			>
			</Section>
		);
	}
}

export default UIIcons;