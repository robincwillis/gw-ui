import React, { Component } from 'react';

import Input from 'components/Input';
import Section from './UISection'
import UIComponent from './UIComponent'

export class UISelectInputs extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<div>
				<Section 
					id="SelectInputs"
					title="Selects"
					description={
						<div>
							<p>...</p>
						</div>
					}
				>
					<div className="flex-grid wide-gutter v-spaced-wide">
						<div className="col-6">
							<UIComponent
								component="Input"
								type="select"
								labelAbove="Underlined Select"
								className="underlined"
								options={[
									{ label : 'Select Option', value : 'Select Option'},
									{ label : 'Another Option', value : 'Another Option'},
									{ label : 'The Third Option', value : 'The Third Option'}
								]}
							/>
						</div>
						<div className="col-6">
							<UIComponent
								component="Input"
								type="typeahead"
								labelAbove="Typeahead Select"
								options={[
									{ label : 'Select Option', value : 'Select Option'},
									{ label : 'Another Option', value : 'Another Option'},
									{ label : 'The Third Option', value : 'The Third Option'}
								]}
							/>
						</div>
					</div>
				</Section>
			</div>
		);
	}
}

export default UISelectInputs;