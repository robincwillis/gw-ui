import React, { Component } from 'react';

import Input from 'components/Input';
import Section from './UISection'
import UIComponent from './UIComponent'

export class UIOtherInputs extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<div>
				<Section 
					id="OtherInputs"
					title="Other Inputs"
					description={
						<div>
							<p>...</p>
						</div>
					}
				>
					<div className="flex-grid wide-gutter v-spaced-wide">
						<div className="col-6">
							<h5 className="space-after">Toggles</h5>
							<UIComponent
								component="Input"
								type="toggle"
								offLabel="Off"
								onLabel="On"
								id="UIToggle"
							/>
							<h5 className="space-after">Texareas</h5>
							<UIComponent
								component="Input"
								type="textarea"
								placeholder="A text area"
								labelAbove="Textarea"
							/>
						</div>
						<div className="col-6">
							<h5 className="space-after">Checkboxes and Radios</h5>
							<UIComponent
								component="Input"
								type="checkbox"
								label="Checkbox"
								id="UICheckbox"
							/>
							<UIComponent
								component="Input"
								type="radio"
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