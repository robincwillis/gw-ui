import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from 'components/Input';
import Tabs from 'components/Tabs';
import PlusIcon from 'assets/icons/plus';

export default class UIInputs extends Component {

	render () {
		return (
      <section id="inputs">
        <div className="container">
          <div className="float-grid">
            <div className="col-6">
              <h3>Inputs</h3>
            </div>
            <div className="col-6">
              <Input
                type="typeahead"
                placeholder="Type It"
                options={[
                  { value : 'this', label: 'This' },
                  { value : 'that', label: 'That' },
                  { value : 'other', label: 'Other' }
                ]}
              />
              <Input
                type="typeahead"
                inputClass="large"
                fixedBtn="Create New Customer"
                fixedBtnIcon={PlusIcon}
                btnAction=""
                placeholder="Type It"
                options={[
                  { value : 'this', label: 'This' },
                  { value : 'that', label: 'That' },
                  { value : 'other', label: 'Other' }
                ]}
              />
              <Input
                inputClass="large"
                placeholder="hold it"
              />
              <Input
                placeholder="hold it"
              />
              <Input
                type="textarea"
                placeholder="textarea 1"
              />
              <Input
                type="textarea"
                placeholder="hold it"
              />
              <Input
                type="checkbox"
                name="option"
                value="Checkbox 1"
              />
              <Input
                type="checkbox"
                name="option"
                value="Checkbox 2"
              />
              <Input
                type="checkbox"
                name="option"
                value="Checkbox 3"
              />
              <Input
                type="radio"
                name="radio options"
                value="Radio 1"
              />
              <Input
                type="radio"
                name="radio options"
                value="Radio 2"
              />
              <Input
                type="radio"
                name="radio options"
                value="Radio 3"
              />
              <Input
                name="my switch"
                type="toggle"
                offLabel="No"
                onLabel="Yes"
                value="yes"
              />
              <Input
                type="select"
                placeholder="hold it"
                options={[
                  'This',
                  'That',
                  'Other'
                ]}
              />
              <Input
                inputClass="large"
                type="select"
                placeholder="hold it"
                options={[
                  'This',
                  'That',
                  'Other'
                ]}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="float-grid">
            <div className="col-6">
              <h3>Tabs</h3>
            </div>
            <div className="col-6">
              <Tabs/>
            </div>
          </div>
        </div>
      </section>
		);
	}
}