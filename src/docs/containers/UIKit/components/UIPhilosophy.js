import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class UIPhilosphy extends Component {

	render() {

		return (
			<Section 
				id={this.props.id}
				key={this.props.id}
				title="The Philosophy"
				description={<div>
					<p>The UI kit is easily configurable with the a series of variables. The grid, typography styles, spacing, and sizing can all be configrued using these variables.</p>
					<p>Each of the basic components have been created to to go together at a set of different sizes. <code>.tiny</code>, <code>.small</code>, <code>.medium</code> (which is the default), and <code>.large</code> classes can all be added to these components to use their different sizes. These are all configured in <code>Variables.scss</code>. Using these classes insures that a <code>TextInput.small</code> component matches the height of a <code>Button.small</code> component. This makes combining different components much easier.</p>
					<p>Occasions arise where the premade classes don't make the cut for the final design. In these cases, just give the component a custom class that will be specific to this use case. This should be done as little as possible for consistency in the interface.</p>
				</div>}
			>

			</Section>
		);
	}
}

export default UIPhilosphy;