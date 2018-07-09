import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import UIPhilosophy from './components/UIPhilosophy';
import Button from 'components/Button'
import UIButtons from './components/UIButtons';
import UITextInputs from './components/UITextInputs';
import UISelectInputs from './components/UISelectInputs';
import UIOtherInputs from './components/UIOtherInputs';
import UITypography from './components/UITypography';
import UIGrid from './components/UIGrid';
import UITest from './components/UITest';
import UILoaders from './components/UILoaders';
import UIMisc from './components/UIMisc';
import UIColors from './components/UIColors';

import UISection from './components/UISection';

import './ui-kit.scss';

const examples = [
	{
		title : 'Philosophy',
		id : 'Philosophy',
		sectionComponent : <UIPhilosophy id="Philosophy" />
	},
	{
		title : 'Buttons',
		id : 'UIButtons',
		sectionComponent : <UIButtons id="UIButtons" />,
		subsections : [
			'Colors',
			'Shapes',
			'States',
			'Icons',
		]
	},
	{
		title : 'Typography',
		id : 'UITypography',
		sectionComponent : <UITypography id="UITypography" />,
		subsections : [
			'Headers',
			'Paragraphs',
			'RichText'
		]
	},
	{
		title : 'Grid',
		id : 'UIGrid',
		sectionComponent : <UIGrid id="UIGrid" />,
		subsections : [
			'HorzAlignment',
			'VertAlignment',
			'Breakpoints',
			'Helpers'
		]
	},
	{
		title : 'Text Inputs',
		id : 'UITextInputs',
		sectionComponent : <UITextInputs id="UITextInputs" />
	},
	{
		title : 'Selects',
		id : 'UISelectInputs',
		sectionComponent : <UISelectInputs id="UISelectInputs" />
	},
	{
		title : 'Other Inputs',
		id : 'UIOtherInputs',
		sectionComponent : <UIOtherInputs id="UIOtherInputs" />
	},
	{
		title : 'Loaders',
		id : 'Loaders',
		sectionComponent : <UILoaders id="Loaders" />
	},
	{
		title : 'Spacing',
		id : 'Spacing',
		// sectionComponent : <UIButtons/>
	},
	{
		title : 'Colors',
		id : 'UIColors',
		sectionComponent : <UIColors id="UIColors" />
	},
	{
		title : 'Icons',
		id : 'Icons',
		// sectionComponent : <UIButtons/>
	},
	{
		title : 'Components',
		id : 'Components',
		// sectionComponent : <UIButtons/>
	},
	{
		title : 'Table',
		id : 'Table',
		// sectionComponent : <UIButtons/>
	},
	{
		title : 'Misc',
		id : 'UIMisc',
		sectionComponent : <UIMisc id="UIMisc"/>,
		subsections : [
			'Tooltips',
			'HelperClasses',
		]
	},
	{
		title : 'Animations',
		id : 'Animations',
		// sectionComponent : <UIButtons/>
	}
];

export class UIKit extends Component {

	render() {
		return (
			<DocumentTitle title={this.props.pageTitleLeader + "UI Kit"}>
				<div className="screen-ui-kit">

					<div className="ui-sidebar p-gutter">
						<div className="ui-kit-menu-icon">
							<div className="material-icons md-24">menu</div>
							<div className="sidebar">
								<ul>
									{examples.map( (section, index) => {
										return (
											<li key={'ui-kit-nav-item-' + section.title + '-' + index} className={section.sectionComponent ? '' : 'empty'}>
												<a className="p sm medium-weight" href={'#' + section.id}>{section.title}</a>
												{section.subsections ? (
													<ul>
														{section.subsections.map( (subsection) => { return(
															<li><a className="p sm" href={'#' + section.id + subsection}>{subsection}</a></li>
														); } )}
													</ul>
												) : false}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>

					<div className="ui-kit container">
						<div className="grid-flex">
							<div className="col grow">
								{examples.map( (section, index) => {
									if (section.sectionComponent) {
										return (
											section.sectionComponent
										);
									} else {
										return (
											<UISection id={section.id} title={section.title} />
										);
									}
								})}
							</div>
						</div>
					</div>

				</div>
			</DocumentTitle>
		);
	}
}

export default UIKit;



