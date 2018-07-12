import React, { Component } from 'react';

import Select from 'components/Select';
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
					id={this.props.id}
					title="Selects"
					description={
						<div>
							<p>...</p>
						</div>
					}
				>
					<div className="grid-flex wide-gutter v-spaced-wide">
						<div className="col-6">
							<UIComponent
								component="Select"
								type="select"
								labelAbove="Underlined Select"
								className="underlined"
								onChange={(event) => { this.setState({select1 : event.target.value})}}
								options={[
									{ label : 'Select Option', value : 'Select Option'},
									{ label : 'Another Option', value : 'Another Option'},
									{ label : 'The Third Option', value : 'The Third Option'}
								]}
							/>
						</div>
						<div className="col-6">
							<UIComponent
								component="Select"
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