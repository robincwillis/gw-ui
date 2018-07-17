import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class UIMisc extends Component {

	render() {

		return (
			<Section 
				id={this.props.id}
				key={this.props.id}
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
					<div className="rich-text">
						<h4>Hide element below a certain breakpoint</h4>
						<ul>
							<li><code>.hide-sm</code></li>
							<li><code>.hide-md</code></li>
							<li><code>.hide-lg</code></li>
							<li><code>.hide-xlg</code></li>
							<li><code>.hide-huge</code></li>
						</ul>

						<h4>Only show element above a certain breakpoint</h4>
						<ul>
							<li><code>.show-sm</code></li>
							<li><code>.show-md</code></li>
							<li><code>.show-lg</code></li>
							<li><code>.show-xlg</code></li>
							<li><code>.show-huge</code></li>
						</ul>
					</div>
				</SubSection>

			</Section>
		);
	}
}

export default UIMisc;