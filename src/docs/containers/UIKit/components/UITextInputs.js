import React, { Component } from 'react';

import { parse } from 'react-docgen';
import InputComponent from '!raw-loader!components/Input/Input';

import Input from 'components/Input';
import Section from './UISection'
import UIComponent from './UIComponent'
import UIProps from './UIProps';

const inputDocs = parse(InputComponent);

export class UIInputs extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<div>
				<Section
					id={this.props.id}
					key={this.props.id}
					title="Input"
					description={
						<div>
							<p>...</p>
						</div>
					}
				>
					<UIProps {...inputDocs} />
					<div className="grid-flex gutter-wide v-spaced-wide">
						<div className="col-6">
							<h5 className="space-after">Normal Inputs</h5>
							<UIComponent
								component="Input"
								placeholder="Tiny Size"
								labelAbove="Tiny Btn Height"
								className="tiny"
							/>
							<UIComponent
								component="Input"
								placeholder="Small Size"
								labelAbove="Small Btn Height"
								className="small"
								iconLeft="search"
							/>
							<UIComponent
								component="Input"
								placeholder="Default Size"
								labelAbove="Default Btn Height"
								iconLeft="loader"
							/>
							<UIComponent
								component="Input"
								placeholder="Large Size"
								labelAbove="Large Btn Height"
								className="large"
								icon="close"
							/>
						</div>
						<div className="col-6 split">
							<h5 className="space-after">Underlined Inputs</h5>
							<UIComponent
								component="Input"
								placeholder="Tiny Size"
								label="Tiny Btn Height"
								className="tiny"
							/>
							<UIComponent
								component="Input"
								placeholder="Small Size"
								label="Small Btn Height"
								className="small"
								iconLeft="search"
							/>
							<UIComponent
								component="Input"
								placeholder="Default Size"
								labelAbove="Default Btn Height"
								icon="loader"
								className="underlined"
							/>
							<UIComponent
								component="Input"
								placeholder="Large Size"
								label="Large Btn Height"
								className="large"
								icon="close"
							/>
						</div>
					</div>
				</Section>
			</div>
		);
	}
}

export default UIInputs;