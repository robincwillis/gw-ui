import React, { Component } from 'react';

import { parse } from 'react-docgen';
import SelectComponent from '!raw-loader!components/Select/Select';

import Select from 'components/Select';
import Section from './UISection'
import UIComponent from './UIComponent'
import UIProps from './UIProps';

const selectDocs = parse(SelectComponent);

export class UISelectInputs extends Component {
	render() {
		return (
			<div>
				<Section
					id={this.props.id}
					key={this.props.id}
					title="Select"
					description={<UIProps {...selectDocs} />}
				>
					<div className="grid-flex gutter-wide v-spaced-wide">
						<div className="col-6">
							<UIComponent
								component="Select"
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