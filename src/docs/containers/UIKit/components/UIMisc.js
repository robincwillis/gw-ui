import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class UIMisc extends Component {

	render() {

		return (
			<Section 
				id={this.props.id} 
				title="Misc"
				description={<div>For different scenarios, different types of loaders should be used</div>}
			>
				<SubSection
					title='Tooltips'
					id={this.props.id + 'Tooltips'}
					description={<div><p className="regular">Using the <code>tooltipText</code> and <code>tooltipPosition</code> props, you can give your buttons a little tooltip description on hover. This is great for circle buttons with only icons in them.</p></div>}
				>
					<div>...</div>
				</SubSection>

				<SubSection
					title='Helper Classes'
					id={this.props.id + 'HelperClasses'}
					description={<div><p>...the helper classes and descriptions</p></div>}
				>
					<div>
					.hide-sm
					.hide-md
					.hide-lg
					.hide-xlg
					.hide-huge
					---
					.show-sm
					.show-md
					.show-lg
					.show-xlg
					.show-huge
					</div>
				</SubSection>

			</Section>
		);
	}
}

export default UIMisc;