import React, { Component } from 'react';

import Input from 'components/Input';
import Section from './UISection'
import UIComponent from './UIComponent'

export class UIInputs extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<div>
				<Section 
					id={this.props.id}
					title="Text Inputs"
					description={
						<div>
							<p>The <code>Input</code> component is pretty serious. All of the functionality for all types of inputs is contained within it. To create awesome forms all you need to to is include one component.</p>
							<h6>Sizes</h6>
							<p>Other than the default input size, you can add a class of <code>tiny</code>, <code>small</code>, or <code>large</code> to make the inputs match the height of the button of that size.</p>
							<h6>Icons</h6>
							<p>Both custom icons and material icons can be used with text inputs by adding props of <code>iconLeft="nameOfIcon"</code> or just <code>icon="nameOfIcon"</code> will place the icon to the right.</p>
							<p>One of the special icons is the <code>loader</code> icon which uses the loader component so it matches the loaders accross the app.</p>
						</div>
					}
				>
					<div className="grid-flex wide-gutter v-spaced-wide">
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