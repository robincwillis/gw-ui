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
import Toggle from 'lib/components/Toggle';
import FileUpload from 'lib/components/FileUpload';

import { Table,  Column, Cell } from 'lib/components/Table';

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

//Loaders

import Loader, {TextLoader, DotLoader, LinearLoader}  from 'components/Loader';

// Testing Components here

class Sandbox extends Component {

	state = {
		input5 : 'Value',
		modalOpen : false,
		btnState : 'normal'
	}

	gap () {
		return (<div><br /><br /></div>);
	}

	openModal = (event) => {

	}

	onModalClose = (result, state) => {
		// console.log(result);
		// console.log(state);
	}

	toggleButtonState = () => {
		const states = [ 'error', 'loading', 'normal', 'success' ]
		let newState = states[Math.floor(Math.random() * states.length)];
		this.setState({btnState : newState})
	}

	render() {

		return (
			<div className="container py-margin">
				<div className="stagger-in-items">
					<h1>Sandbox</h1>
				</div>

				<Button 
					icon="assignment" 
					rightIcon="arrow_forward"
					state={this.state.btnState}
				>
					Stateful Button
				</Button>
				<br/><br/>
				<Button 
					className="light small"
					onClick={this.toggleButtonState}
				>
					Change Button State
				</Button>				
			</div>
		);
	}
}


export default Sandbox;


