import React, { Component } from 'react';

export class UISubSection extends Component {

	render() {
		return (
			<div className={"wide-space-before space-after ui-sub-section " + this.props.className}>
				<hr/>
				<div className="flex-grid wide-space-after">
					<div className="col-4">
						<h2>{this.props.title}</h2>
					</div>
					<div className="col-8 md">
						<div className={this.props.children && this.props.description ? "rich-text space-after" : "rich-text"}>
							{this.props.description}
						</div>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}

}

export default UISubSection;