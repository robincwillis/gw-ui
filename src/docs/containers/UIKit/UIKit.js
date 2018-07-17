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
import UISpacing from './components/UISpacing';
import UITest from './components/UITest';
import UILoaders from './components/UILoaders';
import UIMisc from './components/UIMisc';
import UIColors from './components/UIColors';
import UITables from './components/UITables';

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
		title : 'Spacing',
		id : 'UISpacing',
		sectionComponent : <UISpacing id="UISpacing" />
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
		title : 'Colors',
		id : 'UIColors',
		sectionComponent : <UIColors id="UIColors" />
	},
	{
		title : 'Icons',
		id : 'Icons',
		description : <div>
			<div className="grid-flex tight-gutter no-break left mb-gutter">
				<div className="col"><span className="material-icons md-48">check_circle</span></div>
				<div className="col"><span className="material-icons md-48">arrow_forward</span></div>
				<div className="col"><span className="material-icons md-48">photo</span></div>
				<div className="col"><span className="material-icons md-48">attachment</span></div>
				<div className="col"><span className="material-icons md-48">local_taxi</span></div>
				<div className="col"><span className="material-icons md-48">videogame_asset</span></div>
				<div className="col"><span className="material-icons md-48">add_circle_outline</span></div>
				<div className="col"><span className="material-icons md-48">more_horiz</span></div>
			</div>
			<p className="bold">The UI Kit uses <a href="https://material.io/tools/icons/?style=baseline" target="_blank">Material Icons</a>.</p>
			<p>Other than using the <code>.material-icons</code> class, we include the <code>material-icons</code> mixin for quick use.</p>
			<p className="sm light-text-color"><strong>ie:</strong> <code>@include material-icons($size);</code> The default size is 18px</p>
		</div>
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
											section.sectionComponent
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



