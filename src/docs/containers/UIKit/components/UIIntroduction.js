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
				title="Gordils & Willis UI Kit"
				description={<div>
					<code>@import "{}/node_modules/gw-ui/dist/sass/mixins.scss";</code>
					<br/>
					<code>@import "{}/node_modules/gw-ui/dist/sass/variables.scss";</code>
					<br/>
					<p>The UI kit is easily configurable with the a series of variables. The grid, typography styles, spacing, and sizing can all be configrued using these variables.</p>
				</div>}
			>

				<SubSection
					title="Getting Started"
					id={this.props.id + "Getting Started"}
					description={
						<div>
							<p><code>variables.scss</code> stylesheet</p>
						</div>
					}
				/>

				<SubSection
					title="Sass"
					id={this.props.id + "Variables"}
					description={
						<div>
						<ul>
							<li><code>mixins.scss</code></li>
							<li><code>variables.scss</code></li>
							<li><code>reset.scss</code></li>
							<li><code>base.scss</code></li>
							<li><code>fonts.scss</code></li>
							<li><code>typography.scss</code></li>
							<li><code>grid.scss</code></li>
							<li><code>spacing.scss</code></li>
							<li><code>icons.scss</code></li>
							<li><code>animations.scss</code></li>
							<li><code>tooltips.scss</code></li>
						</ul>
						</div>
					}
				/>

				<SubSection
					title="Variables"
					id={this.props.id + "Variables"}
					description={
						<div>
							<p>Each of the basic components have been created to to go together at a set of different sizes. <code>.tiny</code>, <code>.small</code>, <code>.medium</code> (which is the default), and <code>.large</code> classes can all be added to these components to use their different sizes. These are all configured in <code>variables.scss</code>. Using these classes insures that a <code>TextInput.small</code> component matches the height of a <code>Button.small</code> component. This makes combining different components much easier.</p>
							<p>Occasions arise where the premade classes don't make the cut for the final design. In these cases, just give the component a custom class that will be specific to this use case. This should be done as little as possible for consistency in the interface.</p>
						</div>
					}
				/>

				<SubSection
					title="React Components"
					id={this.props.id + "React"}
					description={
						<div>
							<ul>
								<li>
									<code>Button</code> ✅
								</li>
								<li>
									<code>Input</code> ✅
								</li>
								<li>
									<code>TextArea</code> ✅
								</li>
								<li>
									<code>Select</code> ✅
								</li>
								<li>
									<code>Checkbox</code> ✅
								</li>
								<li>
									<code>Radio</code> ✅
								</li>
								<li>
									<code>Toggle</code> ✅
								</li>
								<li>
									<code>ContentEditable</code>
								</li>
								<li>
									<code>EditableItem</code>
								</li>
								<li>
									<code>Typeahead</code>
								</li>
								<li>
									<code>FileUpload</code>
								</li>
								<li>
									<code>AddContentBetween</code>
								</li>
								<li>
									<code>Table</code>
								</li>
								<li>
									<code>Loader</code>
								</li>
								<li>
									<code>Tabs</code>
								</li>
								<li>
									<code>Collapse</code>
								</li>
								<li>
									<code>Accordion</code>
								</li>
								<li>
									<code>CenteredForm</code>
								</li>
								<li>
									<code>ImageList</code>
								</li>
								<li>
									<code>Avatar</code>
								</li>
								<li>
									<code>Card</code>
								</li>
								<li>
									<code>TermsOfService</code>
								</li>
								<li>
									<code>DatePicker</code>
								</li>
							</ul>
						</div>
					}
				/>

			</Section>
		);
	}
}

export default UIPhilosphy;