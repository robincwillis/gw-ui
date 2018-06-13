import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import actionWrapper from 'util/actionWrapper';
import * as modalActions from 'actions/modal';
import * as notificationActions from 'actions/notifications';

import Navigation from 'components/Navigation';

import InlineSVG from 'svg-inline-react';

import Button from 'components/Button'
import UIButtons from './components/UIButtons';
import UITextInputs from './components/UITextInputs';
import UISelectInputs from './components/UISelectInputs';
import UIOtherInputs from './components/UIOtherInputs';
import UITypography from './components/UITypography';
import UIGrid from './components/UIGrid';
import UITest from './components/UITest';

import UISection from './components/UISection';

import Modal from 'components/Modal';

import './ui-kit.scss';


const examples = [
	{
		title : "Buttons",
		sectionComponent : <UIButtons/>
	},
	{
		title : "Typography",
		sectionComponent : <UITypography/>
	},
	{
		title : "Grid",
		sectionComponent : <UIGrid/>
	},
	{
		title : "Form Elements",
		sectionComponent : "..."
	},
	{
		title : "Text Inputs",
		sectionComponent : <UITextInputs/>
	},
	{
		title : "Selects",
		sectionComponent : <UISelectInputs/>
	},
	{
		title : "Other Inputs",
		sectionComponent : <UIOtherInputs/>
	},
	{
		title : "Spacing",
		// sectionComponent : <UIButtons/>
	},
	{
		title : "Colors",
		// sectionComponent : <UIButtons/>
	},
	{
		title : "Icons",
		// sectionComponent : <UIButtons/>
	},
	{
		title : "Components",
		// sectionComponent : <UIButtons/>
	},
	{
		title : "Data Lists",
		// sectionComponent : <UIButtons/>
	},
	{
		title : "Misc",
		// sectionComponent : <UIButtons/>
	},
	{
		title : "Animations",
		// sectionComponent : <UIButtons/>
	}
];

export class UIKit extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {
		return (
			<DocumentTitle title={this.props.pageTitleLeader + "UI Kit"}>
				<div className="main-content-region ui-kit">
					<div className="container">
						<div className="flex-grid left wide-space-before">
							{examples.map( (section, index) => {
								if (section.sectionComponent) {
									return (
										<div key={'ui-kit-nav-item-' + section.title + '-' + index} className="col">{section.title}</div>
									);
								}
							})}
						</div>
						<div className="flex-grid">
							<div className="col grow">
								{/*

								<UISelectInputs/>
								<UIOtherInputs/>
								<UITextInputs/>
								*/}
								{examples.map( (section, index) => {
									if (section.sectionComponent) {
										return (
											section.sectionComponent
										);
									}
								})}
							</div>
						</div>
					</div>

					<Modal
						title="Default Modal"
						id="default-modal"
						className="modal-class"
					/>

				</div>
			</DocumentTitle>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		modalActions
	}, dispatch);
};

export default connect(mapDispatchToProps)(UIKit);



