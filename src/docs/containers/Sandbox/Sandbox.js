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
				<div className="stagger-in-items">
					<div>Stagger 1</div>
					<div>Stagger 2</div>
					<div>Stagger 3</div>
					<div>Stagger 4</div>
					<div>Stagger 5</div>
				</div>
				<Button icon="assignment" rightIcon="arrow_forward">Button Text</Button>
				<br/><br/>
				<Button disabled>Disbaled</Button>
				<br/><br/>
				<Button state='loading' icon="arrow_forward">Loading</Button>
				<br/><br/>
				<Button state='loading'>Loading</Button>
				<br/><br/>
				<Button state='success' icon="arrow_forward">Success</Button>
				<br/><br/>
				<Button state='success'>Success</Button>
				<br/><br/>
				<Button state='error' icon="arrow_forward">Error</Button>
				<br/><br/>
				<Button state='error'>Error</Button>
				<br/><br/>
			</div>
		);
	}
}


export default Sandbox;


