import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from '../Input/Input';

import SearchIcon from '../Icons/Search';
import PlusIcon from '../Icons/Plus';

export default class UIInputs extends Component {

	render () {

		return (
			<section id="inputs">
				<div className="container">
					<div className="float-grid">
						<div className="col-4">
							<div className="section-info">
								<h3>Inputs</h3>
								<p>...</p>
							</div>
						</div>
						<div className="col-7 right">
							<hr className="space-below" />
							<h5>Text Inputs</h5>
							<Input
								inputId="validate"
								inputClass="large"
								placeholder="Large Text Input"
							/>
							<Input
								placeholder="Text Input"
							/>
							<Input
								inputClass="small"
								placeholder="Small Text Input"
							/>
							<h5>With Icons</h5>
							<Input
								leftIcon={SearchIcon}
								placeholder="Use A Search Icon"
							/>
							<Input
								leftIcon={PlusIcon}
								placeholder="Add Item"
							/>
							<Input
								rightIcon={PlusIcon}
								placeholder="Add Icon On the Right"
							/>
							<h5>Textareas</h5>
							<Input
								inputType="textarea"
								placeholder="Textarea"
							/>
							<h5>Checklist</h5>
							<Input
								inputType="checkbox"
								inputName="option"
								inputValue="Checkbox 1"
							/>
							<Input
								inputType="checkbox"
								inputName="option"
								inputValue="Checkbox 2"
							/>
							<Input
								inputType="checkbox"
								inputName="option"
								inputValue="Checkbox 3"
							/>
							<h5>Radio List</h5>
							<Input
								inputType="radio"
								inputName="radio options"
								inputValue="Radio 1"
							/>
							<Input
								inputType="radio"
								inputName="radio options"
								inputValue="Radio 2"
							/>
							<Input
								inputType="radio"
								inputName="radio options"
								inputValue="Radio 3"
							/>
							<h5>Toggle</h5>
							<Input
								inputType="toggle"
								inputName="switch"
								inputValue="On"
								offLabel="Off"
								onLabel="On"
							/>
							<h5>Selects</h5>
							<Input
								inputClass="small"
								inputType="select"
								placeholder="Small Select"
								options={[
									'Small Select',
									'Option',
									'Another Option'
								]}
							/>
							<Input
								inputType="select"
								placeholder="Select"
								options={[
									'Select',
									'Option',
									'Another Option'
								]}
							/>
							<Input
								inputClass="large"
								inputType="select"
								placeholder="Large Select"
								options={[
									'Large Select',
									'Option',
									'Another Option'
								]}
							/>
							<h5>React Typeahead</h5>
							<Input
								inputType="typeahead"
								placeholder="Type It"
								options={[
									{ value : 'this', label: 'This' },
									{ value : 'that', label: 'That' },
									{ value : 'other', label: 'Other' }
								]}
							/>
							<h5>Tabs</h5>
							<Input
								tabName="tabGroup2"
								inputClass="button-tabs large"
								inputType="tabs"
								options={[
									'Tab 01',
									'Another Tab',
									'Tab Three',
									'Tab 04'
								]}
							/>
							<Input
								tabName="tabGroup3"
								inputClass="button-tabs"
								inputType="tabs"
								options={[
									'Tab 1',
									'Tab 2',
									'Tab 3',
									'Tab 4',
									'Tab 5'
								]}
							/>
							<Input
								tabName="tabGroup4"
								inputClass="button-tabs small"
								inputType="tabs"
								options={[
									'01',
									'02',
									'03',
									'04',
									'05',
									'06'
								]}
							/>
							<Input
								tabName="tabGroup1"
								inputType="tabs"
								options={[
									'Option 01',
									'Option 2',
									'Third Option'
								]}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}