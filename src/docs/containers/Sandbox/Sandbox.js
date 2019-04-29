import React, { Component } from 'react';

import './Sandbox.scss';

// Button

// Basic Inputs

import Input from 'lib/components/Input';
import TextArea from 'lib/components/TextArea';
import Select from 'lib/components/Select';
import Checkbox from 'lib/components/Checkbox';
import Radio from 'lib/components/Radio';
import Toggle from 'lib/components/Toggle';
import Button from 'lib/components/Button';

// Custom Inputs

import ContentEditable from 'lib/components/ContentEditable';
import EditableItem from 'lib/components/EditableItem';
import FileUpload from 'lib/components/FileUpload';

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

let componentNotes = [
	{
		title : 'Accordion',
		text : 'Takes very specific array of items to fit into Collapse component'
	},
	{
		title : 'AddContentBetween',
		text : 'Very specific component',
		flag : 'Worth keeping?'
	},
	{
		title : 'Button',
		text : 'Need to standardize icons, states, and colors with other components (mostly input and form elements)',
		status : 'High Priority',
	},
	{
		title : 'Calendar',
		text : 'Currently needs redux. need to update to import styles from variables',
	},
	{
		title : 'CalendarKey',
		text : 'What is it? Looks transmit.live specific',
		flag : 'Worth keeping?'
	},
	{
		title : 'CenteredForm',
		text : 'Could be great for login screens and multistep forms with work',
		flag : 'Nice to have'
	},
	{
		title : 'Checkbox',
		text : 'need to be able to do simple checkbox or custom label for thumbnail options',
		status : 'High Priority',
	},
	{
		title : 'CodeBlock',
		text : 'No harm in keeping it. good for documentation and other webapps',
	},
	{
		title : 'Collapse',
		text : 'Transition open and close. Make clearer documentation',
		flag : 'Nice to have'
	},
	{
		title : 'ContentEditable',
		text : 'Update next time we need it',
		flag : 'Nice to have'
	},
	{
		title : 'Drawer',
		text : '...',
	},
	{
		title : 'EditableItem',
		text : '...',
	},
	{
		title : 'FileUpload',
		text : 'Not bad, could use a few different style options. Button only, empty area, combo of the 2, etc.',
		flag : 'Next time we need it'
	},
	{
		title : 'Gallery',
		text : 'Not bad, could use a few different style options. Button only, empty area, combo of the 2, etc.',
		flag : 'Broken',
		status : 'Needs a lot of work'
	},
	{
		title : 'Graph',
		text : 'Next time we need it',
		flag : 'Broken',
	},
	{
		title : 'ImageList',
		text : 'Necessary? Seems very specific',
	},
	{
		title : 'Input',
		text : 'Necessary? Seems very specific. Able to change state?',
		status : 'High Priority'
	},
	{
		title : 'Loader',
		text : '...'
	},
	{
		title : 'Modal',
		text : '...'
	},
	{
		title : 'Notifications',
		text : 'should import styles from variables to inherit app styles'
	},
	{
		title : 'Photo',
		text : 'Tied to Gallery component. Should probably scrap the Gallery and make a good staggered one next time we need it'
	},
	{
		title : 'Popup',
		text : 'dependent on react-click-outside and popper is the issue',
		status : 'rewrite'
	},
	{
		title : 'Profile',
		text : 'nice to have. universal component that should be able to take, initials, image, color, or nothing and still look good'
	},
	{
		title : 'Radio',
		text : '...',
		status : 'High Priority'
	},
	{
		title : 'Select',
		text : '...',
		status : 'High Priority'
	},
	{
		title : 'StripeCard',
		text : 'Move to a gw-stripe-card package',
	},
	{
		title : 'Success Modal',
		text : 'Seems to specific',
		flag : 'Worth keeping?'
	},
	{
		title : 'Table',
		text : 'Pretty awesome. May need style love',
		status : 'Mid Priority'
	},
	{
		title : 'Tabs',
		text : '...',
		status : 'Mid Priority'
	},
	{
		title : 'Textarea',
		text : '...',
		status : 'High Priority'
	},
	{
		title : 'Toggle',
		text : 'maybe fold into checkbox and just make it a prop',
		status : 'High Priority'
	},
	{
		title : 'Video',
		text : 'Unsure of status',
	},
	
]

//Loaders

import Loader, {TextLoader, DotLoader, LinearLoader}  from 'components/Loader';

// Testing Components here

class Sandbox extends Component {

	state = {
		input5 : 'Value',
		modalOpen : false,
		btnState : 'normal'
	}

	openModal = (event) => {
	}

	onModalClose = (result, state) => {
	}

	toggleButtonState = () => {
		const states = [ 'error', 'loading', 'normal', 'success' ]
		let newState = states[Math.floor(Math.random() * states.length)];
		this.setState({btnState : newState})
	}

	render() {

		return (
			<div className="container py-margin">
				<div className="my-2">
					<Input 
						id="Input"
						placeholder="Placeholder"
					/>
				</div>
				<div className="my-2">
					<TextArea 
						id="TextArea"
						placeholder="Placeholder"
					/>
				</div>
				<div className="my-2">
					<Select
						id="Select"
						options={[
							{
								label : 'Label',
								value : 'value'
							}
						]}
					/>
				</div>
				<div className="my-2">
					<Checkbox id="Checkbox"/>
				</div>
				<div className="my-2">
					<Radio id="Radio"/>
				</div>
				<div className="my-2">
					<Toggle id="Toggle"/>
				</div>
				<div className="my-2">
					<Button id="Button">Button Label</Button>
				</div>

				
				{componentNotes.map((note, index) => {
					return (
						<div className="my-3" key={note.title}>
							<hr className="mt-0 mb-1"/>
							<div className="grid-flex baseline no-break">
								<div className="col-3">
									<h5>{note.title}</h5>
								</div>
								<div className="col-5">
									<div className="rich-text">
										<p className="sm">{note.text}</p>
									</div>
								</div>
								<div className="col-3">
									{note.status ? (<p className="sm mt-1 color-light-text-color">{note.status == 'Complete' ? <span className="material-icons color-success">check</span> : <span className="material-icons color-alert">close</span>} {note.status}</p>) : false}
									{note.flag ? (<p className="sm mt-1 color-light-text-color"><span className="material-icons color-notify">flag</span> {note.flag}</p>) : false}
								</div>
							</div>
							<div className="pl-2">
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}


export default Sandbox;


