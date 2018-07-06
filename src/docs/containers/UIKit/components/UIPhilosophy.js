import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class UIPhilosphy extends Component {

	render() {

		return (
			<Section 
				id={this.props.id} 
				title="The Philosophy"
				description={<p>The UI kit is easily configurable with the a series of variables. The grid, typography styles, spacing, and sizing can all be configrued using these variables.</p>}
			>

			</Section>
		);
	}
}

export default UIPhilosphy;