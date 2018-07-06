import React, { Component } from 'react';

import Input from 'components/Input';
import Toggle from 'components/Toggle';
import Section from './UISection'
import UIComponent from './UIComponent'

export class UIOtherInputs extends Component {

	state = {}

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<div>
				<Section 
					id={this.props.id}
					title="Other Inputs"
					description={
						<div>
							<p>...</p>
						</div>
					}
				>
					<div className="grid-flex wide-gutter v-spaced-wide">
						<div className="col-6">
							<h5 className="space-after">Toggles</h5>
							<UIComponent
								component="Toggle"
								offLabel="Off"
								onLabel="On"
								id="UIToggle"
								// onChange={(event) => { this.setState({ UIToggle : event.target.value })}}
							/>
							<h5 className="space-after">Texareas</h5>
							<UIComponent
								component="Textarea"
								placeholder="A text area"
								labelAbove="Textarea"
							/>
						</div>
						<div className="col-6">
							<h5 className="space-after">Checkboxes and Radios</h5>
							<UIComponent
								component="Checkbox"
								label="Checkbox"
								id="UICheckbox"
							/>
							<UIComponent
								component="Radio"
								label="Radio City"
								id="UIRadio"
							/>
						</div>
					</div>
				</Section>
			</div>
		);
	}
}

export default UIOtherInputs;