import React, { Component } from 'react';

import CodeBlock from 'components/CodeBlock';

import Input from 'components/Input';
import Button from 'components/Button';

export class UIComponent extends Component {

	state = {
	}

	renderComponent () {
		switch (this.props.component) {
		  case 'Input': {
		  	return (
		  		<Input {...this.props} />
		  	);
		  }		    
		  case 'Button': {
		  	return (
		  		<Button {...this.props} />
		  	);
		  }
		  default:
		    return false;
		}
	}

	renderClasses () {
		var classes = this.props.className;
		classes = classes.replace(/\s+/g, '.').toLowerCase();
		return '.' + classes;
	}

	componentDidMount () {
		this.getComponentHeight();
	}

	getComponentHeight () {
		if (this.props.measured) {
			var componentHeight = this.refs.measuredComponent.clientHeight;
			var componentWidth = this.refs.measuredComponent.clientWidth;
			this.setState({ componentHeight : componentHeight });
			this.setState({ componentWidth : componentHeight });
		}
	}

	render() {

		return (
			<div className={this.props.listStyle ? ("ui-component list-style") : "ui-component"}>
				<div className={this.props.measured ? 'measured' : ''}>
					{this.renderComponent()}
					{this.props.measured ? (
						<div className="measurements" ref="measuredComponent">
							<div className="height">{this.state.componentHeight}px</div>
						</div>
					) : false}
				</div>
				<div className="tight-space-before">
					{this.props.classOnly ? (
						<CodeBlock language="css" className="sm minimal" style="atom-one-dark">
							{this.props.className ? (this.renderClasses()) : 'default'}
						</CodeBlock>
					) : (
						<CodeBlock language="json" className="sm minimall" style="atom-one-dark">
							{JSON.stringify(this.props, null, "   ")}
						</CodeBlock>
					)}
				</div>
			</div>
		);
	}
}

export default UIComponent;