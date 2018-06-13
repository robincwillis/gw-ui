import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import validate from 'util/validation';
import { checkProperties } from 'util/objects';

export class UISection extends Component {

	render() {
		return (
			<section id={this.props.id} className="ui-section wide-space-after wide-space-before padding-after padding-before">
				<div className="flex-grid">
					<div className="col-6">
						<h1 className="title">{this.props.title}</h1>
					</div>
				</div>
				<div className="wide-space-before padding-after">
					<div className="rich-text section-desc lg">
						{this.props.description}
					</div>
				</div>
				<div className="wide-space-before">
					{this.props.children ? this.props.children : (<p className="medium-weight light-text-color">{this.props.title} section to come...</p>)}
				</div>
			</section>
		);
	}
}

export default UISection;