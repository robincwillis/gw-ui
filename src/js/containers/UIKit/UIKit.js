import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Tabs from '../../components/Tabs';

import PlusIcon from 'assets/icons/plus';

import 'sass/components/ui-kit';

export default class UIKit extends Component {

	constructor (props) {
    super(props);
  }

	render () {
		return (
			<div id="ui-kit">

				<section>
					<div className="container">
						<div className="inline-grid">
							<div className="col-3">
								<Button
									label="Button"
								/>
								<p className="code">button</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="loading"
									label="Button"
								/>
								<p className="code">button.loading</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="success"
									label="Button"
								/>
								<p className="code">button.success</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="error"
									label="Button"
								/>
								<p className="code">button.error</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="secondary"
									label="Button"
								/>
								<p className="code">button.secondary</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="secondary loading"
									label="Button"
								/>
								<p className="code">button.secondary.loading</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="secondary success"
									label="Button"
								/>
								<p className="code">button.secondary.success</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="secondary error"
									label="Button"
								/>
								<p className="code">button.secondary.error</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="large"
									label="Large"
								/>
								<p className="code">button.large</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="medium"
									label="Medium"
								/>
								<p className="code">button.medium</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="tiny"
									label="Tiny"
								/>
								<p className="code">button.tiny</p>
							</div>
							<div className="col-3">
								<Button
									buttonClass="circle"
									label="GW"
								/>
								<p className="code">button.circle</p>
							</div>
						</div>
					</div>
				</section>

				<section>
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
				</section>

				<section>
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
			</div>
		);
	}
}