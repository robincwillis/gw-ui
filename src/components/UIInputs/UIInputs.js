import React, { Component } from 'react';
import Input from '../Input/Input.js';

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
            </div>
          </div>
        </div>
      </section>
		);
	}
}