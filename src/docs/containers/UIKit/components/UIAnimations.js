import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class UIAnimations extends Component {

	render() {

		return (
			<Section
				id={this.props.id}
				key={this.props.id}
				title="Animations"
				description={<div>
				<code>@import "{}/node_modules/gw-ui/dist/sass/animations.scss";</code>
				</div>}
			>
			</Section>
		);
	}
}

export default UIAnimations;


