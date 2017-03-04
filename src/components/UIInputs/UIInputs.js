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
              <Input
                inputType="typeahead"
                placeholder="Type It"
                options={[
                  { value : 'this', label: 'This' },
                  { value : 'that', label: 'That' },
                  { value : 'other', label: 'Other' }
                ]}
              />
              <Input
                inputClass="large"
                placeholder="Large Text Input"
              />
              <Input
                placeholder="Text Input"
              />
              <Input
                inputType="textarea"
                placeholder="Textarea"
              />
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
            </div>
          </div>
        </div>
      </section>
		);
	}
}