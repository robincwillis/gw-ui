import React, { Component } from 'react';

import './ui-kit.scss';

import DocumentTitle from 'react-document-title';

import Button from 'components/Button'

import UIIntroduction from './components/UIIntroduction';
import UIButtons from './components/UIButtons';
import UITextInputs from './components/UITextInputs';
import UISelectInputs from './components/UISelectInputs';
import UIOtherInputs from './components/UIOtherInputs';
import UITypography from './components/UITypography';
import UIGrid from './components/UIGrid';
import UISpacing from './components/UISpacing';
import UITest from './components/UITest';
import UILoaders from './components/UILoaders';
import UIMisc from './components/UIMisc';
import UIColors from './components/UIColors';
import UITables from './components/UITables';
import UISection from './components/UISection';
import UIIcons from './components/UIIcons';




const examples = [
	{
		title : 'Introduction',
		id : 'UIIntroduction',
		sectionComponent : <UIIntroduction id="UIIntroduction" />,
		subsections : [
			'Getting Started',
			'Variables',
			'React'
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
		title : 'Colors',
		id : 'UIColors',
		sectionComponent : <UIColors id="UIColors" />
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
		title : 'Spacing',
		id : 'UISpacing',
		sectionComponent : <UISpacing id="UISpacing" />
	},
	{
		title : 'Icons',
		id : 'UIIcons',
		sectionComponent : <UIIcons id="UIIcons" />
	},
	{
		title : 'Animations',
		id : 'Animations',
		// sectionComponent : <UIButtons/>
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
		title : 'Components',
		id : 'Components',
		// sectionComponent : <UIButtons/>
	},
	{
		title : 'Table',
		id : 'UITable',
		sectionComponent : <UITables id="UITable"/>
	},
	{
		title : 'Misc',
		id : 'UIMisc',
		sectionComponent : <UIMisc id="UIMisc" />,
		subsections : [
			'Tooltips',
			'HelperClasses',
		]
	}
];

export class UIKit extends Component {

	render() {
		return (
			<DocumentTitle title={this.props.pageTitleLeader ? this.props.pageTitleLeader + "UI Kit" : "UI Kit"}>
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
														{section.subsections.map( (subsection, index) => { return(
															<li key={'ui-kit-nav-item-' + section.title + '-' + subsection + '-' + index}><a className="p sm" href={'#' + section.id + subsection}>{subsection}</a></li>
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
											<div key={section.id}>{section.sectionComponent}</div>
										);
									} else {
										return (
											<UISection id={section.id} key={section.id} title={section.title} description={section.description} />
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



