import React, { Component } from 'react';


import './Sandbox.scss';

// Basic Inputs

import Input from 'lib/components/Input';
import TextArea from 'lib/components/TextArea';
import Select from 'lib/components/Select';
import Checkbox from 'lib/components/Checkbox';
import Radio from 'lib/components/Radio';

// Custom Inputs

import ContentEditable from 'lib/components/ContentEditable';
import EditableItem from 'lib/components/EditableItem';
import Typeahead from 'lib/components/Typeahead';
import Toggle from 'lib/components/Toggle';
import Swatch from 'lib/components/Swatch';
import FileUpload from 'lib/components/FileUpload'

//import DatePicker from 'lib/components/DatePicker';

//Loaders

import Loader, {TextLoader, DotLoader, LinearLoader}  from 'components/Loader';

// Testing Components here

class Sandbox extends Component {

	state = {
		input5 : 'Value'
	}

	gap () {
		return (<div><br /><br /></div>);
	}

	render() {
		console.log('final state is');
		console.log(this.state);

		return (
			<div className="container">

				<h2>Basic</h2>

				<h3>Input</h3>
				<p>The input componenet should be used wherever you would use an "input" element</p>
				<p>I changed the class .fancy-input to .input-with-label. I think if we just want a static label above an input we should just add it above as a seperate element</p>
				<p>I also changed how icons work, only material icons are supported now. I removed the iconLeft and iconRight stuff, now you just pass an icon, and optionally iconPosition which can be "before" or "after", defaults to "after"</p>

				{this.gap()}

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

				<h3>TextArea</h3>

				{this.gap()}

				<TextArea
					onChange={(event) => { this.setState({textarea1 : event.target.value})}}
				/>

				{this.gap()}

				<h3>Select</h3>

				{this.gap()}

				<Select
					value="blue"
					options={[{label : 'Red', value : 'red'}, {label : 'Blue', value : 'blue'}, {label : 'Green', value : 'green', disabled:true}]}
					onChange={(event) => { this.setState({select1 : event.target.value})}}
				/>

				{this.gap()}

				<h3>Checkbox</h3>

				{this.gap()}

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

				{this.gap()}

				<h3>Radio</h3>

				{this.gap()}

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

				{this.gap()}

				<h2>Custom</h2>


				<h3>ContentEditable</h3>

				{this.gap()}

				<ContentEditable
					html="Some content, any string or html"
				/>

				{this.gap()}

				<h3>EditableItem</h3>

				{this.gap()}

				<EditableItem
					label="Editable Item"
					format="$0,0.00"
					value="10000"
					type="Number"
					onSave={(value) => {console.log(value)}}
				/>

				{this.gap()}

				<h3>Typeahead</h3>

				{this.gap()}

				<Typeahead
					button="Hello"
					buttonIcon="add"
					options={[{label : 'Red', value : 'red'}, {label : 'Blue', value : 'blue'}, {label : 'Green', value : 'green', disabled:true}]}
					onChange={(option) => console.log(option) }
				/>

				{this.gap()}

				<h3>Toggle</h3>

				{this.gap()}

				<Toggle
					id="myToggle"
					label="Test 2"
					value={this.state.toggle1}
					onChange={(event) => { this.setState({toggle1 : event.target.value})}}
				/>

				{this.gap()}

				<h3>Swatch</h3>

				{this.gap()}

				<Swatch
					value="red"
				/>

				{this.gap()}

				<h3>FileUpload</h3>

				{this.gap()}

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


				{this.gap()}

				<h3>Slider / Range</h3>

				{this.gap()}
				{this.gap()}

				<h3>Loaders</h3>

				<Loader />
				{this.gap()}

				<Loader className="tiny" />
				{this.gap()}

				<Loader className="medium" />
				{this.gap()}

				<Loader className="large" />
				{this.gap()}

				<TextLoader />
				{this.gap()}

				<DotLoader />
				{this.gap()}

				<LinearLoader />
				{this.gap()}
			</div>
		);
	}
}


export default Sandbox;


