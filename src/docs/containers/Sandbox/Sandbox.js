import React, { Component } from 'react';

import './Sandbox.scss';

// Button

import Button from 'lib/components/Button';

// Basic Inputs

import Input from 'lib/components/Input';
import TextArea from 'lib/components/TextArea';
import Select from 'lib/components/Select';
import Checkbox from 'lib/components/Checkbox';
import Radio from 'lib/components/Radio';

import Collapse from 'lib/components/Collapse';
import Accordion from 'lib/components/Accordion';

import Popup from 'lib/components/Popup';

// Custom Inputs

import ContentEditable from 'lib/components/ContentEditable';
import EditableItem from 'lib/components/EditableItem';
import Typeahead from 'lib/components/Typeahead';
import Toggle from 'lib/components/Toggle';
import FileUpload from 'lib/components/FileUpload';

import Table { Column, Cell } from 'lib/components/Table';

// Modal

import Modal, { ModalContent } from 'lib/components/Modal';

var tableTestData = [
	{
		'title' : 'title',
		'percent' : '12.2%',
		'date' : 'date'
	},
	{
		'title' : 'title',
		'percent' : '12.2%',
		'date' : 'date'
	}
];

import DatePicker from 'lib/components/DatePicker';

//Loaders

import Loader, {TextLoader, DotLoader, LinearLoader}  from 'components/Loader';

// Testing Components here

class Sandbox extends Component {

	state = {
		input5 : 'Value',
		modalOpen : false
	}

	gap () {
		return (<div><br /><br /></div>);
	}

	openModal = (event) => {

	}

	onModalClose = (result, state) => {
		console.log(result);
		console.log(state);
	}

	render() {
		console.log('final state is');
		console.log(this.state);

		return (
			<div className="container py-margin">

				<DatePicker />

				<h3>Modal</h3>
				<hr/>

				<Button
					onClick={() => this.setState({modalOpen : true})}
					label="Show Modal"
				/>

				<Modal id="sandbox-modal"
					title="My Modal"
					modalOpen={this.state.modalOpen}
					closeModal={() => this.setState({modalOpen:false})}
					onClose={this.onModalClose}
				>
					<ModalContent>
						<p>hello there i'm a modal</p>
					</ModalContent>
				</Modal>

				<h3>Popups</h3>

				<hr/>
				<h3>Accordion</h3>
				<Accordion
					items={[
						{
							title : 'title',
							content : <div>item1</div>,
							icon : false
						},
						{
							title : 'Another title',
							content : <div>item2</div>
						}
					]}
				/>

				<hr/>
				<h3>Collapse</h3>
				<Collapse title="title" hasArrow={false}>
					<div>content</div>
				</Collapse>

				<hr/>
				<h2 className="h1">Basic</h2>
				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<div className="rich-text">
								<h3>Input</h3>
								<p>The input componenet should be used wherever you would use an "input" element</p>
								<p>I changed the class .fancy-input to .input-with-label. I think if we just want a static label above an input we should just add it above as a seperate element</p>
								<p>I also changed how icons work, only material icons are supported now. I removed the iconLeft and iconRight stuff, now you just pass an icon, and optionally iconPosition which can be "before" or "after", defaults to "after"</p>
							</div>
						</div>
						<div className="col-8">

							<Input
								label="Formated Input"
								format="$0,0.00"
								value={this.state.input1}
								onChange={(event) => { this.setState({input1 : event.target.value})}}
							/>

							{this.gap()}

							<Input
								loading={true}
								label="Loading Input"
								value={this.state.input2}
								onChange={(event) => {this.setState({input2 : event.target.value})}}
							/>

							{this.gap()}

							<Input
								icon="check"
								value={this.state.input3}
								onChange={(event) => {this.setState({input3 : event.target.value})}}
							/>

							{this.gap()}

							<Input
								type="password"
								value={this.state.input4}
								onChange={(event) => {this.setState({input4 : event.target.value})}}
							/>

							{this.gap()}

							<Input
								icon="check"
								iconPosition="before"
								label="Error Input With Icon Before"
								error="Something is wrong Here"
								value={this.state.input5}
								onChange={(event) => {this.setState({input5 : event.target.value})}}
							/>

							{this.gap()}

							<Input
								icon="check"
								secondary="Secondary Elements Override Icons"
								value={this.state.input6}
								onChange={(event) => {this.setState({input6 : event.target.value})}}
							/>

							{this.gap()}
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>TextArea</h3>
						</div>
						<div className="col-8">
							<TextArea
								onChange={(event) => { this.setState({textarea1 : event.target.value})}}
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>Select</h3>
						</div>
						<div className="col-8">
							<Select
								value="blue"
								options={[{label : 'Red', value : 'red'}, {label : 'Blue', value : 'blue'}, {label : 'Green', value : 'green', disabled:true}]}
								onChange={(event) => { this.setState({select1 : event.target.value})}}
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>Checkbox</h3>
						</div>
						<div className="col-8">
							<Checkbox
								id="myCheckbox1"
								label="Test"
								value={this.state.checkbox1}
								onChange={(event) => { this.setState({checkbox1 : event.target.value})}}
							/>
							<Checkbox
								id="myCheckbox2"
								label="Test 2"
								value={this.state.checkbox2}
								onChange={(event) => { this.setState({checkbox2 : event.target.value})}}
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>Radio</h3>
						</div>
						<div className="col-8">
							<Radio
								name="myRadio"
								id="myRadio1"
								label="Test"
								value={this.state.radio1}
								onChange={(event) => { this.setState({radio1 : event.target.value})}}
							/>

							<Radio
								name="myRadio"
								id="myRadio2"
								label="Test 2"
								value={this.state.radio2}
								onChange={(event) => { this.setState({radio2 : event.target.value})}}
							/>
						</div>
					</div>
				</section>



				<h2 className="h1">Custom</h2>
				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>ContentEditable</h3>
						</div>
						<div className="col-8">
							<ContentEditable
								html="Some content, any string or html"
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>EditableItem</h3>
						</div>
						<div className="col-8">
							<EditableItem
								label="Editable Item"
								format="$0,0.00"
								value="10000"
								type="Number"
								onSave={(value) => {console.log(value)}}
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>Typeahead</h3>
						</div>
						<div className="col-8">
							<Typeahead
								button="Hello"
								buttonIcon="add"
								options={[{label : 'Red', value : 'red'}, {label : 'Blue', value : 'blue'}, {label : 'Green', value : 'green', disabled:true}]}
								onChange={(option) => console.log(option) }
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>Toggle</h3>
						</div>
						<div className="col-8">
							<Toggle
								className="tiny"
								id="myToggle"
								label="Test 1"
								value={this.state.toggle1}
								onChange={(event) => { this.setState({toggle1 : event.target.value})}}
							/>
							<Toggle
								className="sm"
								id="myToggle2"
								label="Test 2"
								value={this.state.toggle1}
								onChange={(event) => { this.setState({toggle1 : event.target.value})}}
							/>
							<Toggle
								className="default"
								id="myToggle3"
								label="Test 3"
								value={this.state.toggle1}
								onChange={(event) => { this.setState({toggle1 : event.target.value})}}
							/>
							<Toggle
								className="lg"
								id="myToggle4"
								label="Test 4"
								value={this.state.toggle1}
								onChange={(event) => { this.setState({toggle1 : event.target.value})}}
							/>
							<Toggle
								className="xlg"
								id="myToggle5"
								label="Test 5"
								value={this.state.toggle1}
								onChange={(event) => { this.setState({toggle1 : event.target.value})}}
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3>FileUpload</h3>
						</div>
						<div className="col-8">
							<FileUpload
								accept="image/png"
								button={false}
								onDrop={(files) => {console.log(files)}}
								dropzone={{
									onDropRejected : () => {console.log('rejected')}
								}}
							/>

							{this.gap()}

							<FileUpload
								component={(
									<div style={{'background' : 'blue', 'padding' : '20px'}}>
										<p> Drop Files Here </p>
										<p>I can be passed any element or component</p>
									</div>
								)}
								buttonLabel="Customizable"
								buttonClassName="primary"
								onDrop={(files) => {console.log(files)}}
							/>
						</div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4"><h3>Slider / Range</h3></div>
						<div className="col-8"></div>
					</div>
				</section>

				<section className="pb-3">
					<hr/>
					<div className="grid-flex">
						<div className="col-4">
							<h3 className="mb-gutter v-spaced">Loaders</h3>
						</div>
						<div className="col-8">
							<div className="grid-flex pb-margin no-break left">
								<div className="col"><Loader className="tiny" /></div>
								<div className="col"><Loader /></div>
								<div className="col"><Loader className="medium" /></div>
								<div className="col"><Loader className="large" /></div>
							</div>

							<TextLoader className="h1"/>
							<TextLoader className="h2"/>
							<TextLoader className="h3"/>
							<TextLoader className="h4"/>
							<TextLoader className="h5"/>
							<TextLoader className="h6"/>
							<hr/>
								<TextLoader lines={5}/>
							<hr/>
							<TextLoader />
							{this.gap()}

							<DotLoader className="small"/>
							<DotLoader />
							{this.gap()}

							<LinearLoader />
						</div>
					</div>
				</section>

			</div>
		);
	}
}


export default Sandbox;


