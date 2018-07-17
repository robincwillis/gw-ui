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
					key={this.props.id}
					title="Other Inputs"
					description={
						<div>
							<p>...</p>
						</div>
					}
				>
					<div className="grid-flex gutter-wide v-spaced-wide">
						<div className="col-12">
							<div className="grid-flex top">
								<div className="col-2"><h5 className="space-after">Toggles</h5></div>
								<div className="col-2">
									<UIComponent
										component="Toggle"
										className="tiny"
										offLabel="Tiny Off"
										onLabel="Tiny On"
										id="UIToggle"
										// onChange={(event) => { this.setState({ UIToggle : event.target.value })}}
									/>
								</div>
								<div className="col-2">
									<UIComponent
										component="Toggle"
										className="sm"
										label="Small Toggle"
										id="UIToggle2"
										// onChange={(event) => { this.setState({ UIToggle : event.target.value })}}
									/>
								</div>
								<div className="col-2">
									<UIComponent
										component="Toggle"
										id="UIToggle3"
										// onChange={(event) => { this.setState({ UIToggle : event.target.value })}}
									/>
								</div>
								<div className="col-2">
									<UIComponent
										component="Toggle"
										className="lg"
										offLabel="Off"
										onLabel="On"
										id="UIToggle4"
										// onChange={(event) => { this.setState({ UIToggle : event.target.value })}}
									/>
								</div>
								<div className="col-2">
									<UIComponent
										component="Toggle"
										className="xlg"
										offLabel="Extra large"
										onLabel="Xlg"
										id="UIToggle5"
										// onChange={(event) => { this.setState({ UIToggle : event.target.value })}}
									/>
								</div>
							</div>
						</div>
						<div className="col-6">
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