import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class UILoaders extends Component {

	render() {

		return (
			<Section 
				id={this.props.id} 
				title="Loaders"
				description={<div><p>For different scenarios, different types of loaders should be used. There are 4 types of loaders. The <code>Loader</code>, <code>DotLoader</code>, <code>LinearLoader</code>, and <code>TextLoader</code>.</p></div>}
			>
				<div className="grid-flex baseline v-spaced">
					<div className="col-3">
						<UIComponent
							component="Loader"
							className="tiny"
						/>
					</div>
					<div className="col-3">
						<UIComponent
							component="Loader"
							className="small"
						/>
					</div>	
					<div className="col-3">
						<UIComponent
							component="Loader"
							className="default"
						/>
					</div>	
					<div className="col-3">
						<UIComponent
							component="Loader"
							className="large"
						/>
					</div>	
					<div className="col-6">
						<UIComponent
							component="DotLoader"
							className="small"
						/>
					</div>
					<div className="col-6">
						<UIComponent
							component="DotLoader"
						/>
					</div>
					<div className="col-12">
						<UIComponent
							component="LinearLoader"
							className="default"
						/>
					</div>
					<div className="col-12">
						<div className="rich-text">
							<h4>Text Loaders</h4>
							<p>The textloader is a special kind of loader that takes the place of text that hasen't loaded yet. It will take on the style that is put on it. Wrap it in a <code>h#</code> tag and it will inherit the height of the tag.</p>
							<p>To create paragraph loaders with multiple lines easily, just pass the <code>lines</code> prop a number.</p>
						</div>
					</div>
					<div className="col-3">
						<UIComponent
							component="TextLoader"
							className="h1"
						/>
					</div>
					<div className="col-3">
						<UIComponent
							component="TextLoader"
							className="h2"
						/>
					</div>
					<div className="col-3">
						<UIComponent
							component="TextLoader"
							className="h3"
						/>
					</div>
					<div className="col-3">
						<UIComponent
							component="TextLoader"
							className="p"
							lines={6}
						/>
					</div>
				</div>

			</Section>
		);
	}
}

export default UILoaders;